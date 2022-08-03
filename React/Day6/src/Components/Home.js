import React, {useState} from 'react'
import IsloggedIn from './IsloggedIn';
import {useNavigate} from 'react-router-dom'
const Home=()=> {
    const navigation=useNavigate()
    return ( 
    <div>
        <h1>Home Component</h1>
        <button onClick={()=>navigation('/Components/About')}>AboutPage  [useNavigate]</button>
    </div> 
    );
}

export default Home;

