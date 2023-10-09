import { TodoItem } from './todo-item';

export const TodoList = ({
	todoList,
	isUpdated,
	onChange,
	onClick,
	isDeleted,
	onClickChange,
	editableElementId,
	onBlur,
}) => {
	return (
		<>
			{todoList.map(({ id, todo, completed }) => (
				<TodoItem
					key={id}
					id={id}
					todo={todo}
					completed={completed}
					isUpdated={isUpdated}
					onChange={onChange}
					onClick={onClick}
					isDeleted={isDeleted}
					onClickChange={onClickChange}
					editableElementId={editableElementId}
					onBlur={onBlur}
				/>
			))}
		</>
	);
};
