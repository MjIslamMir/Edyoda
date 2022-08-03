import React,{ useState } from 'react'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contacts from './Components/Contacts'
import Home from './Components/Home'
import IsloggedIn from './Components/IsloggedIn'
import Notfound from './Components/Notfound'
import './App.css'
function App(){
  // const [user,setUserName]=useState({userName:"Mujahi dul Islam",age:30})
  // console.log(user);
  const [isLogIn,setLogin]=useState(true)
    // const navigation=useNavigate()
    const updateState=()=>{
        setLogin(!isLogIn)
    }
  return(
    <div>
      <h1>Holla Culers: App component</h1>
      <BrowserRouter>
        <Navbar/>
        <IsloggedIn isLogIn={isLogIn} updateState={updateState}/>
        <h1>Login status:{String(isLogIn)}</h1>
        <Routes>
          <Route path='/Components/About' element={ isLogIn ?<About/>:<Navigate to='/'/> }/>
          <Route path='/Components/Home' element={ isLogIn ?<Home/>:<Navigate to='/'/> }/>
          <Route path='/Components/Contacts' element={<Contacts/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
        
        
      </BrowserRouter>
      {/* <h2>{user.userName}</h2>
      <button onClick={()=>setUserName({...user,userName:"FCB"})}>UpdateName</button> */}
    </div>
  );
}
export default App;