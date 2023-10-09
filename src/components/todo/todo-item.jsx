import styles from './todo-item.module.css';
import { Button } from '../ui/button/button';
import { InputWithButton } from '../ui/input/input-with-button';

export const TodoItem = ({
	id,
	todo,
	completed,
	isUpdated,
	onChange,
	onClick,
	isDeleted,
	onClickChange,
	editableElementId,
	onBlur,
}) => {
	return (
		<div key={id} className={styles.item}>
			<div className={styles.container}>
				<div className={styles.content}>
					<form>
						<input
							onChange={() => onChange(id)}
							className={styles.checkbox}
							disabled={isUpdated}
							checked={completed}
							type='checkbox'
							id={id}
						/>
						<label htmlFor={id}></label>
					</form>
					<span
						className={
							completed ? `${styles.text} ${styles.done}` : styles.text
						}
					>
						{editableElementId === id ? (
							<InputWithButton
								onBlur={(value) => onBlur(id, value)}
								initialValue={todo}
								buttonText='&#10004;'
								buttonClassName={`${styles.edit} ${styles.button}`}
							/>
						) : (
							todo
						)}
					</span>
				</div>
				<div className={styles.buttons}>
					<Button
						className={`${styles.change} ${styles.button}`}
						onClick={() => onClickChange(id)}
						text='&#9998;'
					/>
					<Button
						onClick={() => onClick(id)}
						disabled={isDeleted}
						text='Удалить'
						className={`${styles.delete} ${styles.button}`}
					/>
				</div>
			</div>
		</div>
	);
};
