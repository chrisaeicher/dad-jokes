import { useState, useEffect } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import './App.css';
import Star from './components/Star';

const headers = new Headers({
	Accept: 'application/json',
	'User-Agent': 'Get Your Dad Jokes (https://github.com/chrisaeicher/dad-jokes',
});
const fetchConfig = {
	headers: headers,
	method: 'GET',
};

function App() {
	const [joke, setJoke] = useState({});
	const [favorites, setFavorites] = useState([]);
	const [viewFavorites, setViewFavorites] = useState(false);

	async function getNewJoke() {
		try {
			const res = await fetch('https://icanhazdadjoke.com/', fetchConfig);
			const joke = await res.json();
			setJoke(joke);
		} catch (err) {
			setJoke({
				joke: "I'm sorry, we weren't able to find any jokes. Please try again.",
				id: null,
			});
		}
	}

	useEffect(() => {
		getNewJoke();
	}, []);

	useEffect(() => {
		const faveJokes = JSON.parse(localStorage.getItem('favorite-dad-jokes'));
		faveJokes ? setFavorites(faveJokes) : setFavorites([]);
	}, [joke, viewFavorites]);

	return (
		<div className="App min-h-screen max-h-full h-full grid p-4">
			{!viewFavorites && (
				<>
					<div className="col-span-6">
						{/* <Button appearance="secondary">Login</Button>
						<Button appearance="accent">Sign Up</Button> */}
						{favorites.length > 0 && (
							<Button
								appearance="accent"
								onClick={() => setViewFavorites(!viewFavorites)}
							>
								Favorites
							</Button>
						)}
					</div>

					<div className="col-start-2 col-span-4 row-start-2">
						<Card
							title="Your Daily Dose of Dad (Joke)"
							jokeObj={joke}
							cta="New Joke"
							ctaClick={getNewJoke}
						/>
					</div>
				</>
			)}
			{viewFavorites && (
				<>
					<div className="col-span-6">
						{/* <Button appearance="secondary">Login</Button>
						<Button appearance="accent">Sign Up</Button> */}
						<Button
							appearance="accent"
							onClick={() => setViewFavorites(!viewFavorites)}
						>
							New Jokes
						</Button>
					</div>

					<div className="flex flex-col mx-0 col-start-2 col-span-2 row-start-2 md:mx-16">
						{favorites.map((joke) => {
							return (
								<div
									className="flex items-center bg-slate-50 px-8 py-4 border rounded-lg text-cyan-700 text-lg mt-4"
									key={joke.id}
								>
									<Star
										joke={joke}
										className="hover:fill-yellow-300 stroke-gray-500 hover:stroke-0 transition mr-4"
									/>
									<p>
										<a
											className="hover:underline"
											href={`https://www.icanhazdadjoke.com/j/${joke.id}`}
										>
											{joke.joke}
										</a>
									</p>
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
