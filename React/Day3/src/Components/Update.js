import React from 'react'
class Update extends React.Component{
    render(){
        return (
            <div>
                <h1>Home  Component value of state is {this.props.val}</h1>
                <button onClick={()=>this.props.increment("Update")}>Increment</button>
                <button onClick={()=>this.props.decrement("Update")}>Decrement</button>
                <button onClick={()=>this.props.reset("Update")}>Reset</button>
            </div>
        )
    }
}
export default Update