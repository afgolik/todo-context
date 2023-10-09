import { TODO_LIST } from '../utils/url';
import { useState } from 'react';

export const useRequestDeleteTodo = (todoList, refreshTodos) => {
	const [isDeleted, setIsDeleted] = useState(false);
	const requestDeleteTodo = (id) => {
		setIsDeleted(true);
		todoList.map((todo) => {
			if (todo.id === id) {
				fetch(`${TODO_LIST}/${id}`, {
					method: 'DELETE',
				})
					.then((rawResponse) => rawResponse.json())
					.then((response) => {
						console.log('Задача удалена', response);
						refreshTodos();
					})
					.catch(error => {
						console.log('Ошибка удаления данных с сервера', error);
					})
					.finally(() => setIsDeleted(false));
			}
		});
	};
	return {
		isDeleted,
		requestDeleteTodo,
	};
};
