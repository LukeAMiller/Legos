// / Some starter code
import renderLegoEntries from './DOMPrinter.js';
document.querySelector("#Save").addEventListener("click", event => {
    const creator = document.querySelector("#lego__creator").value
const color = document.querySelector("#lego__color").value
const shape = document.querySelector("#lego__shape").value
const creation = document.querySelector("#lego__creation").value

    // Once you have collected all the values, build your data structure
    const legoToSave = {
        "color": color,
        "creator": creator,
        "shape": shape,
        "creation": creation
    }
    fetch(" http://localhost:3000/legoCreation", { // Replace "url" with your json-server API's URL
        method: "POST",
            headers: {
            "Content-Type": "application/json"
        },
    body: JSON.stringify(legoToSave)
    }).then(() => {
        // Once the lego has been posted, GET all of the legos from the database
        fetch('http://localhost:3000/legoCreation')
        .then(response => response.json())
        .then(parsedLegos => {
            
          renderLegoEntries(parsedLegos)// Print your legos to the DOM here
        })
    })
})