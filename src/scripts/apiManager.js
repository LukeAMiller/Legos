// / Some starter code



    // Once you have collected all the values, build your data structure
   
    const apiManager = {
       getAllLegoProjects: () =>{
           return fetch('http://localhost:3000/legoCreation')
           .then(response => response.json());
          
       } ,
     PostOneLego: singleLegoObject =>  fetch(" http://localhost:3000/legoCreation", { 
        method: "POST",
            headers: {
            "Content-Type": "application/json"
        },
    body: JSON.stringify(singleLegoObject)
    }),
    deleteOneLego: (idofDeleteobject) => fetch(`http://localhost:3000/legoCreation/${idofDeleteobject}`,{
        method: "DELETE"
  })
    }

export default apiManager