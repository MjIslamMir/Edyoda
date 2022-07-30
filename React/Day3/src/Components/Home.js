import React from 'react'
class Home extends React.Component{
    render(){
        return (
            <div>
                <h1>Home  Component value of state is {this.props.val}</h1>
                <button onClick={()=>this.props.increment("Home")}>Increment</button>
                <button onClick={()=>this.props.decrement("Home")}>Decrement</button>
                <button onClick={()=>this.props.reset("Home")}>Reset</button>
            </div>
        )
    }
}
export default Home;