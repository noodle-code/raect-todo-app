import React, { Component } from 'react';
import TaskItem from './../TaskItem/TaskItem';
import TodoListContext from './../../context/TodoListContext';
import './taskList.css';

class TaskList extends Component {
	render() {
		return (
			<TodoListContext.Consumer>
				{ ({list}) => (
							<div className="taskList">
								<div className="taskList container">
									{ list.length === 0 && <h4>List is empty</h4> }
									{ list.map((item) =>(
											<TaskItem 
												key={item.id} 
												id={item.id} 
												title={item.title} 
												isDone={item.done}
											/>
										))
									}
								</div>
							</div>
						)
				}
			</TodoListContext.Consumer>
		);
	}
};

export default TaskList;