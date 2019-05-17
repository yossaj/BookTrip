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

    var markerJura = L.marker([56.068, -5.77]).addTo(mymap);
    var markerHampStead = L.marker([51.558, -0.173]).addTo(mymap);
    var markerParis = L.marker([48.804, 2.29]).addTo(mymap);
    markerJura.bindPopup("<b>Orwell wrote</b><br>1984 here.")
    markerHampStead.bindPopup("<b>Orwell wrote</b><br>Keep the Aspidistra Flying in Hampstead.")
    markerParis.bindPopup("<b>Here Down and Out</b><br>In Paris And London was written")

  

    
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