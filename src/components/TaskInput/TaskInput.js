import React, { Component } from 'react';
import TodoListContext from './../../context/TodoListContext';

class TaskInput extends Component {
	static contextType = TodoListContext;

	handleKeydown = e => {
		if (e.keyCode === 13) {
			// handle submit
			this.context.addItem(e.target.value);
			e.target.value = '';
		}
	}

	render() {
		return (
			<div className="TaskInput">
				<input 
					type="text"
					className="form-control"
					placeholder="Input task name and tap Enter to add"
					onKeyUp={this.handleKeydown}
				/>
			</div>
		);
	}
}

export default TaskInput;