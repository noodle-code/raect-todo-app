import React, { Component } from 'react';
import './taskItem.css';

const TaskItem = () => {
	return (
		<div className="taksItem row">
				<div className="col-1">
					<input type="checkbox" className="form-control" />
				</div>
				<div className="col-9">
					<h4>This is a sample</h4>
				</div>
				<div className="col-1">
					<button className="btn">
						Edit
					</button>
				</div>
				<div className="col-1">
					<button className="btn">
						Delete
					</button>
				</div>
			</div>
	);
};

export default TaskItem;