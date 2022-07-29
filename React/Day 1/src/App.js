import './App.css'
import React from 'react'
import Header from './Components/Header'
import Update from './Components/Update'
class App extends React.Component{
  state={
    val:10
  }
  update=(x)=>{
    this.setState({
      val:this.state.val+x
    })
  }
  greeting=(name)=>{
    console.log(`${name}, Welcomes you to this React Course`)
  }
  incrememnt=()=>{//set state is Async 
    this.setState((prevState)=>{//one way to update the state has to be a arraw functon
      console.log(this.state)
      return {
        val:prevState.val+1
      }
    },()=>console.log(this.state))//to use the updated state rather than using the previous state of state because of async nature of setState() function 
  }
  decrement=()=>{
    this.setState({ //another way to update the state
      val:this.state.val-1
    })
  }
  reset=()=>{
    this.setState({
      val:0
    })
  }
  render(){
    return (
      <div>
        <h1>Hello Welcome to React Day 1</h1>
        <h2>Take aways</h2>
        <p>Basic React ES6 components, use of State in class Components, Passing data using props </p>
        <button onClick={()=>this.greeting("Mujahi dul Islam")}>Click For Greeting</button>
        <h1>{this.state.val}</h1>
        <button onClick={this.incrememnt}>Increment State</button>
        <button onClick={this.decrement}>Decrement State</button>
        <button onClick={this.reset}>Reset State</button>
        <hr />
        <Header stat={this.state.val}/>
        <hr />
        <Update value={this.update}/>
        </div>
    )
  }

}
export default App;