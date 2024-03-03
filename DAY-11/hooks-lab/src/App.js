import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);
  useEffect(()=>{
    console.log("useEffect called for count")
  },[count])
  useEffect(()=>{
    console.log("useEffect called for data")
  },[data])
  return (
    <div className="App"> 
      <h1>Count : {count}</h1>  
      <h1>Data : {data}</h1> 
      <button onClick={()=>setCount(count+1)}>Increase Count</button> 
      <button onClick={()=>setData(data+1)}>Increase Data</button> 
    </div>
  );
}

export default App;
