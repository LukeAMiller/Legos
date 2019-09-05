import apiManager from "./apiManager.js"
import renderLegoEntries from './DOMPrinter.js';
apiManager.getAllLegoProjects()

.then(parsedLegos =>{
    renderLegoEntries.PrintLegosToDOM(parsedLegos)
})
// click event for save button
document.querySelector("#Save").addEventListener("click", () =>{
    const creator = document.querySelector("#lego__creator").value
const color = document.querySelector("#lego__color").value
const shape = document.querySelector("#lego__shape").value
const creation = document.querySelector("#lego__creation").value
const legoToSave = {
    "color": color,
    "creator": creator,
    "shape": shape,
    "creation": creation
};
apiManager.PostOneLego(legoToSave)
.then(apiManager.getAllLegoProjects)
.then(parsedLegos =>{
    renderLegoEntries.PrintLegosToDOM(parsedLegos)
})});
document.querySelector("body").addEventListener("click", () =>{
    if(event.target.id.includes("delete")){
        const legoArray = event.target.id.split("-");
        const idofDeleteobject = legoArray[2];
        console.log(idofDeleteobject);
        apiManager.deleteOneLego(idofDeleteobject).then(() => {
            apiManager.getAllLegoProjects()
            .then(parsedLegos => {
                renderLegoEntries.PrintLegosToDOM(parsedLegos);
            })
        }
    )}})