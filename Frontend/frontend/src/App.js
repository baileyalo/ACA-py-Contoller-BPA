import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';



function App() {

const [data, setData]= useState ();
const [loading, setLoading] = useState(true);
const [error, setError]= useState ();

useEffect (()=>{
  axios.get('http://34.228.20.198:3000/topic/connections/allconnections/')
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
      <h1> {data.their_label} </h1>
      <h3> Check Status</h3>
      <br></br>
      <h3> Connection ID</h3>
      <p>{data.connection_id}</p>
      <br></br>
      <button onClick ={()=>setData(data.rfc23_state)} type="button">Status</button>
      <p> isloading {data.rfc23_state}  </p>
      <h3> Send Response  </h3>
      <br></br>
      <button onClick={()=>setData(data.rfc23_state)}  type="button"> Accept</button>
      <p> isLoading {data.state} </p>
      <br></br>
      <button onClick={()=>setData(data.rfc23_state)} type="button"> Decline</button>
      <p> isLoading {data.rfc23_state} </p>
    </div>
  );
}

export default App;
