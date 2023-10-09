import React from 'react';
import styles from './app.module.css';
import { useState } from 'react';
import { TodoList } from './components/todo/todo-list';
import { Loader } from './components/ui/loader/loader';
import {
	useRequestAddTodo,
	useRequestDeleteTodo,
	useRequestUpdateStatus,
	useRequestGetTodos,
	useRequestUpdateTodo,
	useSearchingTodo, useSortTodo
} from './hook';
import { Modal } from './components/ui/modal/modal';
import { Search } from "./components/ui/search/search";
import { Button } from "./components/ui/button/button";
import {ModalContext, TodoContext} from "./context";

export const App = () => {
	const [modalActive, setModalActive] = useState(false);
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);
	const { todoList, isLoading } = useRequestGetTodos(refreshTodosFlag);
	const { isCreated, requestAddTodo, addInputValue, setAddInputValue } = useRequestAddTodo(refreshTodos, setModalActive);
	const { isUpdated, requestUpdateStatus } = useRequestUpdateStatus(todoList,	refreshTodos);
	const { isDeleted, requestDeleteTodo } = useRequestDeleteTodo(todoList, refreshTodos);
	const { isEdited, editableElementId, requestUpdateTodo, setEditableElementId } = useRequestUpdateTodo(todoList, refreshTodos);
	const { isSearched, searchedTodoList, searchingTodo, onReset } = useSearchingTodo(todoList);
	const { isSorted, sortedTodoList, sortTodo } = useSortTodo(searchedTodoList);

	const onClickChange = (id) => setEditableElementId(id);

	const todoContextValue = {
		isUpdated: isUpdated,
		onChange: requestUpdateStatus,
		onClick: requestDeleteTodo,
		isDeleted: isDeleted,
		onClickChange: onClickChange,
		editableElementId: editableElementId,
		onBlur: requestUpdateTodo,
	};

	const modalContextValue = {
		initialValue: addInputValue,
		onChange: setAddInputValue,
		disabled: isCreated,
	};

	return (
		<div className={styles.app}>
			<Search onClick={searchingTodo} isSearched={isSearched} onReset={onReset} />
			<div className={styles.buttonBlock}>
				<ModalContext.Provider value={modalContextValue}>
					<Modal
						active={modalActive}
						setActive={setModalActive}
						onClick={requestAddTodo}
					/>
				</ModalContext.Provider>
				<Button text={isSorted ? 'Не сортировать' : 'Отсортировать'} onClick={sortTodo} className={isSorted ? styles.sortButton : null} />
			</div>
			<TodoContext.Provider value={todoContextValue}>
				{isLoading ? <Loader /> : todoList.length ?
					<TodoList
						todoList={sortedTodoList}
					/> :
					<div className={styles.text}>Список задач пуст</div>
				}
			</TodoContext.Provider>
		</div>
	);
};
