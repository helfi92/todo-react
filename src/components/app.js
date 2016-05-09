import React from 'react';
import { Component } from 'react';

import ToDoList from './todoList';

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
      <div>React simple starter
      	<ToDoList data={this.state.data} />
      </div>
    );
  }
}
