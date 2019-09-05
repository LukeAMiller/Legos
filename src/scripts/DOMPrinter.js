
  import makeLegoEntryComponent from './singleLegoentry.js'
  const renderLegoEntries = {
    PrintLegosToDOM:arrayofLegoParam => {
  document.querySelector("#DOM").innerHTML = "";
    arrayofLegoParam.forEach(
        singleEntry => {document.querySelector("#DOM").innerHTML +=
        makeLegoEntryComponent.buildEntryCard(singleEntry)}
    )
    }}
export default renderLegoEntries
