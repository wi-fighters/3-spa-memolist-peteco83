import React from 'react';
import logo from '../components/logo.svg';
import '../css/App.css';
import { Component } from 'react';
import Header from '../components/Header'
import ListOfAllItems from './ListOfAllItems';
import ListOfDoneItems from './ListOfDoneItems'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  addItem = (newitem) => {
    let item = {id: this.state.items.length, text: newitem, done: false}

    //agregando los items al array vacio de items 
    this.setState({
      items: [...this.state.items, item]
    })
  }

  changeStatus = (i) => {
    let newState = [...this.state.items]
    newState.map(el => {
      if(el.id === i) {
        el.done = !el.done
        return el
      } else {
        return el
      }
    })

    this.setState({
      items: newState
    })
  }

  removeItem = (i) => {
    let newState = [...this.state.items]
    newState.splice(i, 1)
    this.setState({
      items: newState
    })
  }

  editItem = (i, value) => {
     let newState = [...this.state.items]
     newState[i].text = value
     this.setState({
       items: newState
     })
 }

  render() {

    const toDos = this.state.items.filter(el => !el.done)
    const dones = this.state.items.filter(el => el.done)

    return ( 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header/>
          <ListOfAllItems items={toDos} addItem={this.addItem} changeStatus={this.changeStatus} removeItem={this.removeItem} editItem={this.editItem}/>

          <h5>Done Items</h5>
          <ListOfDoneItems items={dones} changeStatus={this.changeStatus} removeItem={this.removeItem}/> 

          
        </header>
      </div>
    );
  }
  
}
