import React, { Component } from 'react';

class TaskInput extends Component {
	render() {
		return (
			<div className="TaskInput">
				<input 
					type="text"
					className="form-control"
					placeholder="Input task name and tap Enter to add"
				/>
			</div>
		);
	}
}

export default TaskInput;