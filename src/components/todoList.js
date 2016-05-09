import React, { Component } from 'react';

import ToDoItem from './todoItem';

class ToDoList extends Component {
	render() {
		return (
			<div>
				ToDoList
				<ToDoItem />
			</div>

		);	
	}
	
}

export default ToDoList;