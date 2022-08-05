import React from 'react'
import { HOC } from './HOC';
function App(props){
  return(
    <div>
      <h1>App Component val={props.val}</h1>
    </div>
  );
}
export default HOC(App);