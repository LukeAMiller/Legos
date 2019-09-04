const makeLegoEntryComponent =  {
    buildEntryCard:(singleLegoObject)=>{
      // Create your own HTML structure for a journal entry
      return `
      <article>
    <h1>${singleLegoObject.creator}</h1>
    <p>${singleLegoObject.color}</p>
    <p>${singleLegoObject.shape}</p>
    <p>${singleLegoObject.creation}</p>
    </article>
      `;}
    }
    export default makeLegoEntryComponent