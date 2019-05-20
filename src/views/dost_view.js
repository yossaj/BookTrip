const PubSub = require('../helpers/pub_sub.js')
const Author = require('../models/author.js')

const DostDisplay = function (container) {
    this.container = container;

}

DostDisplay.prototype.bindEvents = function () {
    PubSub.subscribe('Dost: Data Ready', (event) => {
        this.books = event.detail
        const dostButton = document.getElementById('dostoevsky')
        dostButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.render(this.books)
        })

    })
};


DostDisplay.prototype.render = function () {
    this.container.innerHTML = '';


    mymap.setView([55.924, 38.012], 4)


    const page_title = document.querySelector('#logo')
    page_title.textContent = 'Book Trip - Fyodor Dostoyevsky'

    for (let book of this.books) {
        const textContainer = document.createElement('div')
        textContainer.setAttribute('class', 'text')
        const imgContainer = document.createElement('div')
        imgContainer.setAttribute('class', 'image')
        const title = document.createElement('h2');
        title.setAttribute('id', book.volumeInfo.title)
        title.textContent = book.volumeInfo.title
        const name = document.createElement('h3');
        name.textContent = book.volumeInfo.authors[0]
        const bookCover = document.createElement('img');
        bookCover.src = book.volumeInfo.imageLinks.thumbnail;
        const description = document.createElement('p')
        description.textContent = book.volumeInfo.description
        this.container.appendChild(imgContainer)
        imgContainer.appendChild(bookCover);
        this.container.appendChild(textContainer)
        textContainer.appendChild(title)
        textContainer.appendChild(name)
        textContainer.appendChild(description)
    }

}

module.exports = DostDisplay;