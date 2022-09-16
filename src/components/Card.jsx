import Button from './Button';
import Star from './Star';

function Card({ title, jokeObj, cta, ctaClick, className }) {
	const classNames = `mx-auto bg-white py-12 px-8 sm:px-16 md:px-32 w-100 md:w-3/4 lg:w-1/2 text-center border rounded-lg shadow-lg flex flex-col ${className}`;

	return (
		<div className={classNames}>
			<h1 className="text-3xl font-semibold text-cyan-700 m-3">{title}</h1>

			<p className=" text-xl m-3">{jokeObj.joke}</p>
			<div className="flex flex-col items-center justify-center">
				<div className="flex justify-center items-center">
					{jokeObj.id && (
						<Star
							joke={jokeObj}
							className="hover:fill-yellow-300 stroke-gray-500 hover:stroke-0 transition"
						/>
					)}
					<Button appearance="primary" onClick={ctaClick} className="text-lg">
						{cta}
					</Button>
				</div>

				<a
					className="text-cyan-700 text-sm hover:underline focus:outline-8 focus:outline-offset-2 focus:outline-orange-700"
					href="https://icanhazdadjoke.com/submit"
					target="_blank"
					rel="noreferrer"
				>
					Submit your own joke
				</a>
			</div>
		</div>
	);
}

export default Card;
