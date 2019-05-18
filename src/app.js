const  Author = require('./models/author.js')
const DisplayView = require('./views/display_view.js')



document.addEventListener('DOMContentLoaded', () => {
   console.log('Javascript Loaded');

    const displayContainer = document.querySelector('#book-list')
    const displayView = new DisplayView(displayContainer)
    displayView.bindEvents()

    const author = new Author();
    author.getData();
});