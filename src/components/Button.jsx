function Button({ appearance = 'primary', children, className, onClick }) {
	const classNames =
		appearance === 'primary'
			? `hover:bg-white hover:text-cyan-700 hover:border-cyan-700 text-white border border-white px-4 py-2 m-3 bg-cyan-700 rounded-lg transition ${className}`
			: appearance === 'secondary'
			? `hover:bg-cyan-700 hover:text-white border border-white px-4 py-2 m-3 bg-white text-cyan-700 border border-cyan-700 rounded-lg transition ${className}`
			: `bg-orange-600 text-white border border-white px-4 py-2 m-3 hover:bg-white hover:text-orange-600 border border-orange-600 rounded-lg transition ${className}`;

	return (
		<button
			className={
				classNames +
				'focus:outline-8 focus:outline-offset-2 focus:outline-orange-700'
			}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
