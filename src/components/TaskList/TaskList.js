import React, { Component } from 'react';
import TaskItem from './../TaskItem/TaskItem';
import './taskList.css';

const TaskList = () => {
	return (
		<div className="taskList container">
			<TaskItem />
		</div>
	);
};

export default TaskList;