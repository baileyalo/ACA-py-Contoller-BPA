import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';



function App() {

const [data, setData]= useState ();
const [loading, setLoading] = useState(true);
const [error, setError]= useState ();

useEffect (()=>{
  axios ('http://20.151.204.61:8080/connections/')
  .then(res => {
    setData(res.data)
    console.log(data)
  })
  .catch (err =>{
    console.log('error fetching data', err);
    setError(error);
   
  })
  .finally (()=>{
    setLoading(false);
  })
},[]);

  if (loading) return 'loading...';




  return (
    <div className="App">
      <h3> Check Status</h3>
      <br></br>
      <button onClick ={()=>setData(data.rfc23_state)} type="button">Status</button>
      <p> isloading  </p>
      <h3> Send Response </h3>
      <br></br>
      <button onClick={()=>setData(data.rfc23_state)}  type="button"> Accept</button>
      <p> isLoading  </p>
      <br></br>
      <button onClick={()=>setData(data.rfc23_state)} type="button"> Decline</button>
      <p> isLoading  </p>
    </div>
  );
}

export default App;
