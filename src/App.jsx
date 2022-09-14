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
				joke: "I'm sorry, we weren't able to find any jokes today. Please try again later.",
				id: null,
			});
			console.log(err);
		}
	}

	useEffect(() => {
		getNewJoke();
	}, []);

	return (
		<div className="App">
			<Button appearance="secondary">Login</Button>
			<Button appearance="accent">Sign Up</Button>
			<div className="w-100 min-h-screen max-h-screen flex items-center justify-center">
				<Card
					title="Get Your Dad Jokes"
					body={joke}
					cta="New Joke"
					ctaClick={getNewJoke}
				/>
			</div>
		</div>
	);
}

export default App;
