import { TODO_LIST } from '../utils/url';
import { useState } from 'react';

export const useRequestUpdateStatus = (todoList, refreshTodos) => {
	const [isUpdated, setIsUpdated] = useState(false);

	const requestUpdateStatus = (id) => {
		setIsUpdated(true);
		todoList.map((todo) => {
			if (todo.id === id) {
				fetch(`${TODO_LIST}/${id}`, {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json;charset=utf-8' },
					body: JSON.stringify({
						todo: todo.todo,
						completed: !todo.completed,
					}),
				})
					.then((rawResponse) => rawResponse.json())
					.then((response) => {
						console.log('Статус изменен:', response);
						refreshTodos();
					})
					.catch(error => {
						console.log('Ошибка обновления данных на сервере', error);
					})
					.finally(() => setIsUpdated(false));
			}
		});
	};
	return {
		isUpdated,
		requestUpdateStatus,
	};
};
