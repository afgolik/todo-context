import styles from './input-with-button.module.css';
import { Input } from './input';
import { Button } from '../button/button';
import { useState } from 'react';

export const InputWithButton = ({
	onChange,
	placeholder,
	buttonText,
	disabled,
	onBlur,
	initialValue,
	onClick,
	buttonType,
	clear,
	buttonClassName,
}) => {
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
