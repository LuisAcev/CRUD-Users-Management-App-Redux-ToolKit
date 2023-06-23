
 // Fetch using GET method 
export const getFetch = ( setState ) => { 
      
      const url = "https://gorest.co.in/public/v2/users";
      fetch( url ,{
      method: "GET",
      headers: {
        'Authorization': "Bearer 64a0c69f716920b6a61cc45e710e7fd015f1cea6b021272b1f81ff3fedd53d32",
        'Content-Type': 'application/json'
      },
    

    }).then (res => res.json())
    .then (data => setState (data)) 
    .catch (error => console.log(error));

 }


 // Fetch using POST method 
export const postFetch = ( user ) => { 
  
  const url = "https://gorest.co.in/public/v2/users";
  fetch( url ,{
  method: "POST",
  headers: {
    'Authorization': "Bearer 64a0c69f716920b6a61cc45e710e7fd015f1cea6b021272b1f81ff3fedd53d32",
    'Content-Type': 'application/json'
  },

  body: JSON.stringify( user )
  

}).then(response => response.json())
.then(data => {
  console.log(data)
})
.catch (erro => console.log(erro));

}

// Fetch using PUT method 
export const updateFetch = ( id, user, setState ) => { 
  
  const url = `https://gorest.co.in/public/v2/users/${ id }`;
  fetch( url ,{
  method: "PUT",
  headers: {
    'Authorization': "Bearer 64a0c69f716920b6a61cc45e710e7fd015f1cea6b021272b1f81ff3fedd53d32",
    'Content-Type': 'application/json'
  },

  body: JSON.stringify( user )
  

}).then(response => response.json())
.then(data =>  setState(data)
  
)
.catch (erro => console.log(erro));

}


// Fetch using DELETE method 
export const deletFetch = ( id ) => { 
  
  const url = `https://gorest.co.in/public/v2/users/${ id }` ;
  fetch( url ,{
  method: 'DELETE',
  headers: {
    'Authorization': "Bearer 64a0c69f716920b6a61cc45e710e7fd015f1cea6b021272b1f81ff3fedd53d32",
    'Content-Type': 'application/json'
  },

  
}).then(response => console.log(response))
.catch (erro => console.log(erro));

}