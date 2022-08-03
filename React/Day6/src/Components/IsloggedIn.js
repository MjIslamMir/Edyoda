import React from 'react';
const IsloggedIn=(props) =>{
    const {isLogIn,updateState}=props
    console.log(isLogIn)
    return (
        <div>
            {
                isLogIn ? <button onClick={updateState}>Logout</button>: <button onClick={updateState}>Login</button>
            }
        </div>
    );
}

export default IsloggedIn;