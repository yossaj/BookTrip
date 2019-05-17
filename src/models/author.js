const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')

const Author = function(){
    this.books = []

}

Author.prototype.getData = function(){
    const request = new RequestHelper('https://www.googleapis.com/books/v1/volumes?q=george+orwell')
    
    request.get()
    .then((data)=>{
        const correctAuthor = this.filterAuthor(data.items);
        
        this.books = correctAuthor
        // console.log();
        
        PubSub.publish('Author: Data Ready', this.books)
    })
}


Author.prototype.filterAuthor = function(allBooks){
    const hasAuthor = allBooks.filter(book =>
        book.volumeInfo.authors !== undefined
        ) 

    const matchingAuthor = hasAuthor.filter(book => {
        return book.volumeInfo.authors[0] === 'George Orwell'
    })
    
    const writtenByOrwell = matchingAuthor.filter(book => {
        return book.volumeInfo.authors[1] === undefined
        // return book.volumeInfo.authors.length() === 1
    })
    return writtenByOrwell
}

module.exports =  Author;