import React, { Component } from 'react';

class AddItem extends Component {
	
	addNewItem() {
	  	alert('item click');
	  	// let updated_list = this.state.data;
	  	// updated_list.push("New Todo");
	  	// this.setState({data : updated_list});
  	}

	render() {
		return (
			<div className="col-md-2">

				<div>
					<button onClick={this.addNewItem} className="btn btn-primary add-item">New Item</button>
				</div>

			</div>
		)
	}
}

export default AddItem;