import { useEffect, useState } from 'react';
import { TODO_LIST } from '../utils/url';

export const useRequestGetTodos = (refreshTodosFlag) => {
	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		fetch(TODO_LIST)
			.then((loadedData) => loadedData.json())
			.then((loadedTodoList) => setTodoList(loadedTodoList))
			.catch(error => {
				console.log('Ошибка получения данных с сервера', error);
			})
			.finally(() => setIsLoading(false));
	}, [refreshTodosFlag]);
	return {
		todoList,
		isLoading,
	};
};
