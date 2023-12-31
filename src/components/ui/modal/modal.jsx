import styles from './modal.module.css';
import { InputWithButton } from '../input/input-with-button';
import { Button } from '../button/button';
import {useState} from "react";

export const Modal = ({
	active,
	setActive,
	onClick,
}) => {
	const [clear, setClear] = useState(false);
	const openModal = () => {
		setActive(true);
		setClear(true);
	};
	const handleClick = () => {
		if(onClick) {
			onClick();
			setClear(false)
		}
	}
	return (
		<div className={styles.modal}>
			<Button onClick={openModal} buttonType='button' text='Создать новую задачу' />
			<div
				className={active ? `${styles.active} ${styles.window}` : styles.window}
				onClick={() => setActive(false)}
			>
				<div className={styles.body} onClick={(e) => e.stopPropagation()}>
					<InputWithButton
						clear={clear}
						onClick={handleClick}
						placeholder='Создать новую задачу...'
						buttonText='Создать'
						buttonType='submit'
					/>
				</div>
			</div>
		</div>
	);
};
