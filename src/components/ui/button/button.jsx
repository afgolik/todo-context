import styles from './button.module.css';

export const Button = ({ disabled, onClick, text, className, buttonType }) => {
	return (
		<button
			type={buttonType}
			className={className ? `${styles.button} ${className}` : `${styles.button}`}
			disabled={disabled}
			onClick={onClick}
		>
			<span>{text}</span>
		</button>
	);
};
