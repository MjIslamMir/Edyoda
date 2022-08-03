import React from 'react'
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return (
        <div className='Navigation'>
            <Link to='/Components/Home'>Home Page</Link>
            <Link to='/Components/About'>About</Link>
            <Link to='/Components/Contacts'>Contacts</Link>
        </div>
    );
}
export default Navbar;