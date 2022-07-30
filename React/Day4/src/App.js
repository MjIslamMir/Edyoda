import './App.css'
import React from 'react'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      itemName:'',
      todoItem:[]
    }

  }
  getItemName=(e)=>{
    this.setState({
      itemName:e.target.value
    })
  }
  addItemToList=()=>{
    let todoListCopy=[...this.state.todoItem]
    todoListCopy.push(this.state.itemName)
    this.setState({
      todoItem:todoListCopy,
      itemName:''
    })

  }
  deleteItem=(index)=>{
    let newList=[...this.state.todoItem]
    newList.splice(index,1)
    this.setState({
      todoItem:newList
    })
  }
  UpdateItem=(e,index)=>{
    let todoItemsCopy = [...this.state.todoItem]
    todoItemsCopy.splice(index,1, e.target.value)
    this.setState({
      todoItem : todoItemsCopy
    })

  }
  render(){
    return (
      <div>
        <h1>Todo App CRUD Operations</h1>
        {/* <h2>state:{JSON.stringify(this.state)}</h2> */}
        <input 
        placeholder='Enter Text' 
        onChange={this.getItemName}
        value={this.state.itemName}
        />
        <button onClick={this.addItemToList}>Add Item</button>
        {
          this.state.todoItem.map((item,index)=> { 
            return <div>
              <span>{index+1}.{item}</span>
              <input
              placeholder='Enter Text to Update'
              onChange={(e)=>this.UpdateItem(e,index)}
              />
              <button onClick={()=>this.deleteItem(index)}>Delete Item</button>
            </div> })
        }  
        
      </div>
      
    )
  }
}
export default App;