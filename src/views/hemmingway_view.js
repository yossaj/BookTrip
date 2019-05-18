const PubSub = require('../helpers/pub_sub.js')
const Author = require('../models/author.js')

const HemmingwayDisplay = function(container){
    this.container = container
}


HemmingwayDisplay.prototype.bindEvents = function () {
    PubSub.subscribe('Hemmingway: Data Ready', (event) => {
        this.books = event.detail
        const HemButton = document.getElementById('hemmingway')
        HemButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.render(this.books)
        })

    })
};

HemmingwayDisplay.prototype.render = function () {
    this.container.innerHTML = '';
    
    mymap.setView([40.680, -90.970], 4)
    
   
    const page_title = document.querySelector('#logo')
    page_title.textContent = 'Book Trip - Ernest Hemingway'

    for (let book of this.books) {
        const title = document.createElement('h2');
        title.setAttribute('id', book.volumeInfo.title)
        title.textContent = book.volumeInfo.title
        const name = document.createElement('h3');
        name.textContent = book.volumeInfo.authors[0]
        const bookCover = document.createElement('img');
        bookCover.src = book.volumeInfo.imageLinks.thumbnail;
        const description = document.createElement('p')
        description.textContent = book.volumeInfo.description
        this.container.appendChild(bookCover);
        this.container.appendChild(title)
        this.container.appendChild(name)
        this.container.appendChild(description)
    }

    const markerKeyWest = L.marker([24.694, -81.68 ]).addTo(mymap);
    const markerPamplona = L.marker([42.821, -1.642]).addTo(mymap);
    const markerSunValley = L.marker([34.114, -118.237]).addTo(mymap);
    const markerWyoming = L.marker([43.269, -107.58]).addTo(mymap);
    const markerChicago = L.marker([41.866, -87.687]).addTo(mymap);


    // markerJura.bindPopup(`<b>Orwell wrote</b><br><a href="#1984">1984 </a>here.`)
    // markerHampStead.bindPopup("<b>Orwell wrote</b><br>Keep the Aspidistra Flying in Hampstead.")
    // markerParis.bindPopup("<b>Here Down and Out</b><br>In Paris And London was written")
    // markerWallington.bindPopup(`<b>Wallington</b><br>Where<a href="#Homage to Catalonia"> Homage to Catalonia</a> was written.`)

}
    module.exports = HemmingwayDisplay;