import React from 'react';

const TodoListContext = React.createContext({
	list: [],
	editItem: function() {},
	deleteItem: function() {},
	addItem: function() {},
	toggleStatus: function() {},
});

export default TodoListContext;