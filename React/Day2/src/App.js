//Component life cysle
import axios from 'axios'
import React from 'react'
import './App.css'
import Header from './Components/Header';
class App extends React.Component{
  constructor(){
    super();
    console.log("Parent constructor called");
    this.state={
      val:10
    }
  }
  updateState=()=>{
    this.setState({
      val:this.state.val+10
    })
  }
  shouldComponentUpdate(nextProps,nextState){//called in between update (state or prop)and re-render
    /*Use shouldComponentUpdate() to let React know if a component’s output is not affected by the 
            current change in state or props. The default behavior is to re-render on every state change, 
            and in the vast majority of cases you should rely on the default behavior.
            shouldComponentUpdate() is invoked before rendering when new props or state are being received.
            Defaults to true. 
            This method is not called for the initial render or when forceUpdate() is used.
            This method only exists as a performance optimization. Do not rely on it to “prevent” a 
            rendering, as this can lead to bugs. Consider using the built-in PureComponent instead of 
            writing shouldComponentUpdate() by hand. PureComponent performs a shallow comparison of props 
            and state, and reduces the chance that you’ll skip a necessary update.*/
    if(this.state!==nextState){
      console.log(this.state.val, nextState.val)
      console.log("Parent shouldComponentUpdate called ")
      return true
    }
    else{
      return false
    }
  }
  componentDidUpdate(prevProps,prevState,snapshort){
    //omponentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
    //Use this as an opportunity to operate on the DOM when the component has been updated.
    if(prevState.val!==this.state.val){
      console.log("Parent componentDidUpdate() called ")
      console.log(`prevState ${prevState.val} currentState ${this.state.val}`)
      return true
    }
    else {
      return false
    }
  }
  componentDidMount(){
          //componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires 
          //DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
          //This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().
          //once the parent component is rendered completely
    
    //to perform operations which are required after the Dom is rendered
    //used when we require the data from api to update our DOM
    console.log("Parent Component did mount called");
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      console.log(res.data)
    })
    .catch((error)=>console.log(error))
  }
  render(){
    console.log("Parent render Called");
    return(
      <div>
        <h1>The value of state is {this.state.val}</h1>
        <button onClick={this.updateState}>Click to Update State</button>
        <Header stat={this.state.val}/>
      </div>
    )
  }
}
export default App; 

//Sequence of Execution
// Parent constructor called
// Parent render Called

// Child constructor called
// Child Component render called
// Child component did mount called

// Parent Component did mount called

// Parent shouldComponentUpdate called 
// Parent render Called

// Child shouldComponentUpdate called 
// Child Component render called

// Child componentDidUpdate() called 
// prevProps 10 currentProps 20
// Parent componentDidUpdate() called 
// prevState 10 currentState 20
