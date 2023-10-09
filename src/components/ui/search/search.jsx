import styles from './search.module.css';
import { InputWithButton } from '../input/input-with-button';
import React, { useState } from 'react';
import { Button } from '../button/button';

export const Search = ({ onClick, isSearched, onReset }) => {
	const [clear, setClear] = useState(false);
	const handleReset = () => {
		if (onReset) {
			onReset();
			setClear(true);
		}
	};
	const handleOnClick = (value) => {
		if (onClick) {
			onClick(value);
			setClear(false);
		}
	};
	return (
		<div className={styles.search}>
			<InputWithButton
				onClick={handleOnClick}
				clear={clear}
				placeholder='Найти задачу...'
				buttonText='Найти'
				buttonType='submit'
			/>
			{isSearched ? (
				<Button
					buttonType='button'
					className={styles.button}
					text='&#10006;'
					onClick={handleReset}
				/>
			) : null}
		</div>
	);
};
