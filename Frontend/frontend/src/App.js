import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';



function App() {

const [data, setData]= useState ();
const [loading, setLoading] = useState(true);
const [error, setError]= useState ();

useEffect (()=>{
  axios.get('http://34.228.20.198:3000/topic/connections')
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

 acceptrequest(connection_id) {
    axios.post('http://34.228.20.198:3000/topic/connections/acceptrequest', {"connection_id": connection_id})
      .then(res => {
        const data = res.data.results;
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });

  }


  return (
    <div className="App">   
      <p>Connection ID= {data.connection_id}</p>
      <br></br>
      <p>State= {data.rfc23_state}</p>
      <br></br>
      <button onClick={()=>setData(this.acceptrequest(data.connection_id))}  type="button"> Accept</button>
      </div>
  );
}

export default App;
