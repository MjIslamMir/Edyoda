import React,{useState,useEffect } from 'react'
import About from './Components/About'
import './App.css'
function App(){
  const [status,setStatus]=useState(true)
  //is equivalent to componentDidMount() and componentDidUpdate() when only passed with a callback function, 
  //second parameter is optional which is a dependencyList= which is list of variables or props based on which useEffect should update
  //if useEffect has no dependency i.e dependency array is empty then it will function as componentDidMount() only
  useEffect(()=>{
    console.log("useEffect Called")
  },[status])//as now the dependency list is not empty it will act as componentDidUpdate() as the status changes
    // const navigation=useNavigate()
  return(
    <div>
      {/* if status is not changed it will return false for shouldComponentUpdate */}
      <h1>App Component: state is {String(status)}</h1>
      {/* Unmounting */}
      {
        !status?<About/>:''
      }
      <button onClick={()=>setStatus(!status)}>Update State</button>
      
    </div>
  );
}
export default App;