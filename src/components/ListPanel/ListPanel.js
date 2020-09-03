import React, { Component } from 'react';
import TaskInput from './../TaskInput/TaskInput';
import TaskList from './../TaskList/TaskList';
import './listPanel.css';

class ListPanel extends Component {
	render () {
		return (
			<div className="listPanel">
				<h2>Todo App</h2>
				<TaskInput />
				<TaskList />
			</div>
		);
	}
}

export default ListPanel;