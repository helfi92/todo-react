import React, { Component } from 'react';

class ToDoItem extends Component{
	


	render(){
		return (
			<div className="list-item">
				{this.props.item}
			</div>
		)
	}
}

export default ToDoItem;