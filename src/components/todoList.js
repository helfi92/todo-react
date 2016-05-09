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
			<div className="col-md-9">
				<div>{items}</div>
			</div>

		);	
	}
	
}

export default ToDoList;