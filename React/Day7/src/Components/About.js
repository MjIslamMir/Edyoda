import React, { useEffect } from 'react'
const About = () => {
    useEffect(()=>{
        return console.log("component Unmounted")
    })
    
    return ( 
    <div>
        <h1>About Component</h1>
    </div> 
    );
}
 
export default About;