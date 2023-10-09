import {useEffect, useState} from 'react';

export const useSortTodo = (searchedTodoList) => {
	const [sortedTodoList, setSortedTodoList] = useState(searchedTodoList);
	const [isSorted, setIsSorted] = useState(false);

	useEffect(() => {
		setSortedTodoList([...searchedTodoList]);
		setIsSorted(false);
	}, [searchedTodoList]);
	const sortTodo = () => {
		const isCurrentlySorted = JSON.stringify(sortedTodoList) !== JSON.stringify(searchedTodoList);
		if (isCurrentlySorted) {
			setIsSorted(false);
			setSortedTodoList(searchedTodoList);
		} else {
			setIsSorted(true);
			const sortedList = [...sortedTodoList].sort((a, b) => {
				let todoA = a.todo.toUpperCase();
				let todoB = b.todo.toUpperCase();
				return todoA < todoB ? -1 : 1;
			});
			setSortedTodoList(sortedList);
		}
	};
	return {
		isSorted,
		sortedTodoList,
		sortTodo,
	};
};
