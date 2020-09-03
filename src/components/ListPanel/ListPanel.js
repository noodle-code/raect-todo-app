import React, { Component } from 'react';
import TaskInput from './../TaskInput/TaskInput';
import TaskList from './../TaskList/TaskList';
import TodoListContext from './../../context/TodoListContext';
import './listPanel.css';

class ListPanel extends Component {
	constructor() {
		super();

		this.state = {
			list: [],
			editItem: this.editItem,
			deleteItem: this.deleteItem,
			addItem: this.addItem,
			toggleStatus: this.toggleStatus
		}
	}

	editItem =  (id, title) =>  {
		let currentList = this.state.list;
		
		currentList.forEach((item, index) => {
			if (item.id === id) {
				item.title = title;
			}
		});

		this.setState({list: [...currentList]});
	}

	deleteItem = id => {
		let currentList = this.state.list;
		let targetIndex = 0;

		currentList.forEach((item, index) => {
			if (item.id === id) {
				targetIndex = index;
			}
		});

		currentList.splice(targetIndex, 1);

		this.setState({list: [...currentList]});
	}

	addItem = newItemTitle => {
		let currentList = this.state.list;

		if (!newItemTitle) {
			return;
		}

		let newItem = {
			id: currentList.length + 1 || 1,
			title: newItemTitle,
			done: false
		}

		this.setState({ list: [ ...currentList, newItem ] })
	}

	toggleStatus = id => {
		let currentList = this.state.list;
		
		currentList.forEach(item => {
			if (item.id === id) {
				item.done = !item.done;
			}
		});
		
		// console.log(currentList);

		this.setState({ list: [...currentList] }, () => console.log(this.state.list));
	}

	render () {
		return (
			<TodoListContext.Provider value={this.state}>
				<div className="listPanel">
					<h2>Todo App</h2>
					<TaskInput />
					<TaskList />
				</div>
			</TodoListContext.Provider>
		);
	}
}

export default ListPanel;