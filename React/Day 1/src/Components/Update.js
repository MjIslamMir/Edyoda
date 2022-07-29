import React from "react";
class Update extends React.Component{
    render(){
        return (
            <div>
            <h1>Updating parent class from child class By passing update function to child component and taking the parameter value in the Child component</h1>
            <button onClick={()=>this.props.value(25)}>Update</button>
            </div>

        )
    }
}
export default Update;