import React, { Component } from 'react';

class AddItem extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			task : ''
		};
		this.onInputChange = this.onInputChange.bind(this);
		this.addNewItem = this.addNewItem.bind(this);
	}

	render() {
		return (
			<div className="col-md-3">
				<div className="add-item-container">
					<span><input placeholder="todo task" value={this.state.task} onChange={this.onInputChange} /></span>
					<span><button className="btn btn-primary add-item" onClick={this.addNewItem}>add</button></span>
				</div>

			</div>
		)
	}

	onInputChange(event){
		this.setState({task : event.target.value});
	}


	/*

	This method performs the logic of adding a new todo to the existing list
	This method will clear the task input after submitting the new list

	*/
	addNewItem() {
	  	let task = this.state.task;
	  	let updated_list = this.props.data;
	  	
	  	updated_list = updated_list.concat(task);
	  	this.props.onItemAdd(updated_list);
	  	this.setState({task : ''});
  	
  	}
}

export default AddItem;