import React from 'react'
import './App.css'
import Home from './Components/Home'
import Update from './Components/Update'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      appCounterState:{val:0},
      homeCounterState:{val:0},
      updateCounterState:{val:0}
    }
  }
increment=(component)=>{
  if(component==="App"){
    this.setState((prevState)=>{
      return {
        appCounterState:{
          val:prevState.appCounterState.val+1 
        }
      }
  })
  }
  else if(component==="Home"){
    this.setState((prevState)=>{
      return {
        homeCounterState:{
          val:prevState.homeCounterState.val+1 
        }
      }
  })
  }
  else{
    this.setState((prevState)=>{
      return {
        updateCounterState:{
          val:prevState.updateCounterState.val+1 
        }
      }
  })
  }
    
}
decrement=(component)=>{
  if(component==="App"){
    this.setState((prevState)=>{
      return {
        appCounterState:{
          val:prevState.appCounterState.val-1 
        }
      }
  })
  }
  else if(component==="Home"){
    this.setState((prevState)=>{
      return {
        homeCounterState:{
          val:prevState.homeCounterState.val-1 
        }
      }
  })
  }
  else{
    this.setState((prevState)=>{
      return {
        updateCounterState:{
          val:prevState.updateCounterState.val-1
        }
      }
  })
}
}
reset=(component)=>{
  if(component==="App"){
    this.setState((prevState)=>{
      return {
        appCounterState:{
          val:0 
        }
      }
  })
  }
  else if(component==="Home"){
    this.setState((prevState)=>{
      return {
        homeCounterState:{
          val:0 
        }
      }
  })
  }
  else{
    this.setState((prevState)=>{
      return {
        updateCounterState:{
          val:0
        }
      }
  })
}
}
render(){
    return (
        <div>
          <div>
            <h1>App Component in View, Value of the state is {this.state.appCounterState.val}</h1>
            <button onClick={()=>this.increment("App")}>Increment</button>
            <button onClick={()=>this.decrement("App")}>Decrement</button>
            <button onClick={()=>this.reset("App")}>Reset</button>
          </div>
          <Home 
          val={this.state.homeCounterState.val}
          increment={this.increment}
          decrement={this.decrement}
          reset={this.reset}
          />
          <Update
          val={this.state.updateCounterState.val}
          increment={this.increment}
          decrement={this.decrement}
          reset={this.reset}
          />
            
        </div>
    )
}
}
 export default App; 