import React, { Component } from 'react'
import './App.css'
class App extends Component {
  constructor(){
    super()
    this.state = {
      item : [],
      value : ''
    }
  }
  HandleAddBtn = () =>{
    this.setState(state =>{
      let item = state.item.concat(state.value)
      console.log(item)
      return{
        item, value:''
      }

    })
  }

  HandleChange = (e) =>{
    this.setState({value: e.target.value})
  }

  HandleDeleteBtn =(index)=>{
    this.setState(state=>{
      const item = state.item.filter((items,Index)=> Index != index)
      return{
        item
      }
    })
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" vlaue={this.state.value} placeholder='enter your task' onChange={this.HandleChange}/>
          <button onClick={this.HandleAddBtn}>Add</button>
        </div>
        {this.state.item.map((item,index)=>{
         return( <div key={index}>
           <input type="text" defaultValue={item} />
           <button onClick={()=>this.HandleDeleteBtn(index)}>Delete</button>
          </div>)
        })}
      </div>
    )
  }
}

export default App