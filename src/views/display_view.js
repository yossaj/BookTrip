const PubSub = require('../helpers/pub_sub.js')
const Author = require('../models/author.js')

const DisplayView = function(container){
    this.container = container;
    
}

DisplayView.prototype.bindEvents = function(){
    PubSub.subscribe('Author: Data Ready',(event)=>{
        this.books = event.detail
        this.render(this.books)
    })
};

DisplayView.prototype.render = function(){
    for(let book of this.books){
    const title = document.createElement('h2');
    title.textContent = book.volumeInfo.title
    const name = document.createElement('h3');
    name.textContent = book.volumeInfo.authors[0]
    this.container.appendChild(title)
    this.container.appendChild(name)


    const bookCover = document.createElement('img');
    bookCover.src = book.volumeInfo.imageLinks.thumbnail;
    this.container.appendChild(bookCover);
    }
    // this.container.appendChild(air)
    // this.container.appendChild(list)
    // list.appendChild(co)
    // list.appendChild(h)
    // list.appendChild(p25)
    // list.appendChild(p10)
    // list.appendChild(o3)
    // this.container.appendChild(time)
    
}

module.exports = DisplayView;