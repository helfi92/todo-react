import React from 'react';
import { Component } from 'react';

import ToDoList from './todoList';
import AddItem from './addItem';

export default class App extends Component {
  constructor(props) {
  	super(props);
  	let list = ["Buy Groceries", "Return phone call", "Do one act of kindness"];
  	this.state = {
  		data : list
  	}
  }
  
  

  render() {
    return (
      <div>
      	<ToDoList data={this.state.data} />
      	<AddItem />
      </div>
    );
  }

  
}
