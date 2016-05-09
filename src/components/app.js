import React from 'react';
import { Component } from 'react';

import ToDoList from './todoList';
import AddItem from './addItem';

export default class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		data : ["Buy Groceries", "Return phone call", "Do one act of kindness"]
  	}

  	this.itemAdded = this.itemAdded.bind(this);
  }


  render() {
    return (
      <div>
      	<ToDoList data={this.state.data} />
      	<AddItem data={this.state.data} onItemAdd={this.itemAdded} />
      </div>
    );
  }

  /*
	This method replaces the list of todos with the newer one
  */
  itemAdded(newlist){
  	this.setState({
  		data: newlist
  	});
  }

  
}
