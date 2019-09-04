
  import makeLegoEntryComponent from './singleLegoentry.js'
  const renderLegoEntries = (entries) => {
  
    entries.forEach(
        singleEntry => {document.querySelector("#DOM").innerHTML +=
        makeLegoEntryComponent.buildEntryCard(singleEntry)}
    )
    }
export default renderLegoEntries
