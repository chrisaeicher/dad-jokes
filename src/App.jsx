import { useState, useEffect } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import './App.css';

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
			console.log(err);
		}
	}

	useEffect(() => {
		getNewJoke();
	}, []);

	return (
		<div className="App min-h-screen max-h-full h-full grid p-4">
			<div className="col-span-6">
				<Button appearance="secondary">Login</Button>
				<Button appearance="accent">Sign Up</Button>
			</div>
			<div className="col-start-2 col-span-4 row-start-2">
				<Card
					title="Your Daily Dose of Dad (Joke)"
					body={joke}
					cta="New Joke"
					ctaClick={getNewJoke}
				/>
			</div>
		</div>
	);
}

export default App;
