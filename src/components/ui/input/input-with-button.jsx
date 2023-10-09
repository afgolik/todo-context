import styles from './input-with-button.module.css';
import { Input } from './input';
import { Button } from '../button/button';
import {useContext, useState} from 'react';
import {ModalContext} from "../../../context";

export const InputWithButton = ({
	placeholder,
	buttonText,
	onBlur,
	onClick,
	buttonType,
	clear,
	buttonClassName,
}) => {

	const {
		initialValue,
		onChange,
		disabled,
	} = useContext(ModalContext);

	const [value, setValue] = useState(initialValue || '');
	const onSubmit = (e) => {
		e.preventDefault();
	};
	const handleOnChange = (value) => {
		setValue(value);
		if (onChange) {
			onChange(value);
		}
	};
	const handleOnClick = () => {
		if (onClick) {
			onClick(value);
		}
	};
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<Input
				type='text'
				initialValue={initialValue}
				onChange={handleOnChange}
				placeholder={placeholder}
				onBlur={onBlur}
				clear={clear}
			/>
			<Button
				text={buttonText}
				onClick={handleOnClick}
				buttonType={buttonType}
				disabled={disabled}
				className={buttonClassName}
			/>
		</form>
	);
};
