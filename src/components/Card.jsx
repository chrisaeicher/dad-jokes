import Button from './Button';
import Star from './Star';

function Card({ title, body, cta, ctaClick, className }) {
	const classNames = `mx-auto bg-white py-12 px-8 sm:px-16 md:px-32 w-100 md:w-3/4 lg:w-1/2 text-center border rounded-lg shadow-lg flex flex-col ${className}`;

	return (
		<div className={classNames}>
			<h1 className="text-2xl text-cyan-700 m-3">{title}</h1>

			<p className=" text-lg m-3">{body.joke}</p>
			<div className="flex items-center justify-center">
				<Star className="hover:fill-yellow-300 stroke-gray-600 transition mr-3" />
				<Button appearance="primary" onClick={ctaClick} className="text-lg">
					{cta}
				</Button>
			</div>
		</div>
	);
}

export default Card;
