import React from "react";
class Header extends React.Component{
    constructor(){
        super()
        console.log("Child constructor called")
     }
    shouldComponentUpdate(nextProps, nextState){
        console.log(this.props.stat,nextProps.stat)
        if(this.props.stat!==nextProps.stat){
            
            console.log("Child shouldComponentUpdate called ")
            return true
        }
        else{
            return false}
    }
    componentDidUpdate(prevProps,prevState,snapshort){
        //omponentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
        //Use this as an opportunity to operate on the DOM when the component has been updated.
        if(prevProps.stat!==this.props.stat){
          console.log("Child componentDidUpdate() called ")
          console.log(`prevProps ${prevProps.stat} currentProps ${this.props.stat}`)
          return true
        }
        else {
          return false
        }
      }
    componentDidMount(){
        console.log("Child component did mount called")
    }
    render(){
        console.log("Child Component render called")
        return (
            <div>
                <h1>Passing data from parent Component(App) to Child component(Header) using props </h1>
                <h2>This is Header Component acquiring data from App component through props ({this.props.stat}). As the state changes in parent component same is reflected in child component</h2>
            </div>
        );
    }
}
export default Header;