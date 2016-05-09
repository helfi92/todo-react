import React from 'react';
import { Component } from 'react';

import ToDoList from './todoList';

export default class App extends Component {
  constructor() {
  	super();
  	let list = ["Buy Groceries", "Return phone call", "Do one act of kindness"];
  }
  render() {
    return (
      <div>React simple starter
      	<ToDoList />
      </div>
    );
  }
}
