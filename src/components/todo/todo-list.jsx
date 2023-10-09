import { TodoItem } from './todo-item';

export const TodoList = ({
	todoList,
}) => {
	return (
		<>
			{todoList.map(({ id, todo, completed }) => (
				<TodoItem
					key={id}
					id={id}
					todo={todo}
					completed={completed}
				/>
			))}
		</>
	);
};
