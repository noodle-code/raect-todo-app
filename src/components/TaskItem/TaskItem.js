import React, { Component } from 'react';
import TodoListContext from './../../context/TodoListContext';
import './taskItem.css';

class TaskItem extends Component {
	static contextType = TodoListContext;

	constructor(props) {
		super(props);

		let { id, title } = props;

		this.state = {
			id,
			title,
			edit: false,
		};
	}

	handleTick = () => {
		this.context.toggleStatus(this.state.id);
	}

	handleDelete = () => {
		this.context.deleteItem(this.state.id);
	}

	toggleEdit = () => {
		this.setState({ edit: !this.state.edit });
	}

	handleOnchange = e => {
		let { value } = e.target;

		this.setState({ title: value });
	}

	handleOnKeyUp = e => {
		if (e.keyCode === 13) {
			this.context.editItem(this.state.id, this.state.title);
			this.toggleEdit();
		}
	}

	toggleTextAndInput = () => {
		if (this.state.edit) {
			return (
				<input 
					type="text" 
					value={this.state.title} 
					className="form-control"
					onChange={this.handleOnchange}
					onKeyUp={this.handleOnKeyUp}
				/>
			)
		}

		return this.getItemText();
	}

	getItemText = () => {
		let className = "";

		if (this.props.isDone) {
			className = "text--done";
		}

		return (
			<h4
				className={className}
				title={this.state.title}
			>
				{this.state.title}
			</h4>
		);
	}

	render() {
		return (
			<div className="taskItem row">
				<div className="col-1">
					<input 
						type="checkbox" 
						checked={this.props.isDone}
						className="form-control"
						value={this.props.id}
						onChange={this.handleTick}
					/>
				</div>
				<div className="col-6 title-container">
					{this.toggleTextAndInput()}
				</div>

				<div class="col-5">
					{ this.state.edit && (
						<button 
							className="btn btn-secondary"
							onClick={this.toggleEdit}
						>
							Cancel
						</button>
					)}

					{ !this.state.edit && (
							<button 
								className="btn btn-success edit-btn"
								onClick={this.toggleEdit}
								disabled={this.props.isDone}
							>
								Edit
							</button>
					)}
					
					{ !this.state.edit && (
							<button 
								className="btn btn-danger"
								onClick={this.handleDelete}
								disabled={this.props.isDone}
							>
								Delete
							</button>
					)}
				</div>
				
			</div>
		);
	}
};

export default TaskItem;