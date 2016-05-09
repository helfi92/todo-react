import React, { Component } from 'react';

import ToDoItem from './todoItem';

class ToDoList extends Component {

	constructor(props) {
		super(props)
		
	}
	render() {
		const items = this.props.data.map((item) => {
			return <ToDoItem key={item} item={item} />
		});
		return (
			<div>
				{items}
			</div>

		);	
	}
	
}

export default ToDoList;