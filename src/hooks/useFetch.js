import { useEffect, useState } from 'react'


// Fetch using GET method 
export const useGetFetch = () => { 
  
  const url = "https://gorest.co.in/public/v2/users";
  const [state, setState ] = useState([]);
  const [ change, setChange]=useState([])
    
  useEffect (()=>{
    fetch(url,
      {
      method: 'GET',
      headers: {
        'Authorization': "Bearer 64a0c69f716920b6a61cc45e710e7fd015f1cea6b021272b1f81ff3fedd53d32",
        'Content-Type': 'application/json'
      }

    })
    .then (res => res.json())
    .then (data => setState (data)) 
    .catch (error => console.log(error));


  },[ change ])
 

return { state, setChange,change } ;

}




