const  Author = require('./models/author.js')
const DisplayView = require('./views/display_view.js')
const HemmingwayDisplay = require('./views/hemmingway_view.js')
const LinyutangDisplay = require('./views/linyutang_view.js')



document.addEventListener('DOMContentLoaded', () => {
   console.log('Javascript Loaded');

    const displayContainer = document.querySelector('#book-list')
    const displayView = new DisplayView(displayContainer)
    displayView.bindEvents();

    const hemmingwayDisplay = new HemmingwayDisplay(displayContainer)
    hemmingwayDisplay.bindEvents();

    const linyutangDisplay = new LinyutangDisplay(displayContainer)
    linyutangDisplay.bindEvents()
    
  

    const author = new Author();
    author.getDataOrwell();
    author.getDataHemmingway(); 
    author.getDataLinyutang();
});

  