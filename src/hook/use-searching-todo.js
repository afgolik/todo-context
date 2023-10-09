import { useEffect, useState } from 'react';

export const useSearchingTodo = (todoList) => {
	const [searchedTodoList, setSearchedTodoList] = useState(todoList);
	const [isSearched, setIsSearched] = useState(false);
	const onReset = () => {
		setSearchedTodoList(todoList);
		setIsSearched(false);
	};
	useEffect(() => {
		setSearchedTodoList(todoList);
	}, [todoList]);
	const searchingTodo = (search) => {
		setIsSearched(true);
		setSearchedTodoList(searchedTodoList.filter((todoList) => todoList.todo.includes(search)));
	};
	return {
		isSearched,
		searchedTodoList,
		searchingTodo,
		onReset,
	};
};
