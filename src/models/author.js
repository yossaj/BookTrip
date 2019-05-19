const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')

const Author = function(){
    this.books = []

}

Author.prototype.getDataOrwell = function(){
    const request = new RequestHelper('https://www.googleapis.com/books/v1/volumes?q=george+orwell')
    
    request.get()
    .then((data)=>{
        const correctAuthor = this.filterAuthor(data.items, 'George Orwell');
        this.books = correctAuthor
        PubSub.publish('Orwell: Data Ready', this.books)
    })
}

Author.prototype.getDataHemmingway = function(){
    const request = new RequestHelper('https://www.googleapis.com/books/v1/volumes?q=ernest+hemingway')
    
    request.get()
    .then((data)=>{
        const correctAuthor = this.filterAuthor(data.items, 'Ernest Hemingway');
        this.books = correctAuthor
        PubSub.publish('Hemmingway: Data Ready', this.books)
    })
}
Author.prototype.getDataLinyutang = function(){
    const request = new RequestHelper('https://www.googleapis.com/books/v1/volumes?q=lin+yutang')
    
    request.get()
    .then((data)=>{
        const correctAuthor = this.filterAuthor(data.items, 'Lin Yutang');
        this.books = correctAuthor
        PubSub.publish('Lin Yutang: Data Ready', this.books)
    })
}




Author.prototype.filterAuthor = function(allBooks, authorName){
    
   
    const hasAuthor = this.filterUndefined(allBooks);
    const matchingAuthor = this.filterMatchingAuthor(hasAuthor, authorName)   
    const onlyWriter = matchingAuthor.filter(book => {
        return book.volumeInfo.authors[1] === undefined
        // return book.volumeInfo.authors.length() === 1
    })
    console.log(onlyWriter);
    
    return onlyWriter
}

Author.prototype.filterUndefined = function(allBooks) {
    
    const hasAuthor = allBooks.filter(book =>
        book.volumeInfo.authors !== undefined)
        return hasAuthor
}

Author.prototype.filterMatchingAuthor = function(hasAuthor, authorName){
    const matchingAuthor = hasAuthor.filter(book => {
        return book.volumeInfo.authors[0] === authorName
    })
    return matchingAuthor

}

module.exports =  Author;