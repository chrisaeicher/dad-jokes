import { useEffect, useRef } from 'react';

function Star({ joke, className }) {
	const starNode = useRef(null);
	function getFavorites() {
		try {
			return JSON.parse(localStorage.getItem('favorite-dad-jokes')) || [];
		} catch (err) {
			return [];
		}
	}

	function isFavorited() {
		try {
			return getFavorites().find((x) => x.id === joke.id);
		} catch (err) {
			return false;
		}
	}

	function toggleStarColor(setToYellow) {
		if (setToYellow) {
			starNode.current.classList.add('fill-yellow-300');
			starNode.current.classList.remove('stroke-gray-500');
		} else {
			starNode.current.classList.remove('fill-yellow-300');
			starNode.current.classList.add('stroke-gray-500');
		}
	}

	function addJoke() {
		let currFaves = getFavorites();
		if (currFaves.length) {
			currFaves.push({ id: joke.id, joke: joke.joke });
		} else {
			currFaves = [{ id: joke.id, joke: joke.joke }];
		}
		localStorage.setItem('favorite-dad-jokes', JSON.stringify(currFaves));
		toggleStarColor(true);
		return;
	}

	function removeJoke() {
		let currFaves = getFavorites();
		currFaves = currFaves.filter((x) => x.id !== joke.id);
		toggleStarColor(false);
		localStorage.setItem('favorite-dad-jokes', JSON.stringify(currFaves));
	}

	function favoriteJoke(e) {
		// if user is signed in, change the color and add the id to their favorite jokes db
		isFavorited() ? removeJoke() : addJoke();
		// if user is not signed in, grab the joke id and direct them to the sign up screen
	}

	useEffect(() => {
		toggleStarColor(isFavorited());
	}, [joke]);

	return (
		<button
			className="focus:outline-8 focus:outline-offset-2 focus:outline-orange-700"
			onClick={(e) => favoriteJoke(e)}
		>
			<svg
				width="32"
				height="28"
				viewBox="0 0 24 23"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={className}
				ref={starNode}
			>
				<path d="M7.99227 7.40276L8.25232 7.36484L8.36857 7.12915L11.2027 1.38281C11.5288 0.722332 12.4706 0.724595 12.7975 1.38316C12.7976 1.38329 12.7976 1.38342 12.7977 1.38355L15.6314 7.12915L15.7477 7.36484L16.0077 7.40276L22.3489 8.32724L22.3492 8.32729C23.0757 8.43266 23.3683 9.33007 22.8404 9.84402L22.8403 9.84416L18.2526 14.3146L18.0642 14.4982L18.1088 14.7574L19.1938 21.0722C19.3181 21.7986 18.5517 22.3478 17.9055 22.008L17.9054 22.0079L12.2326 19.0262L12 18.9039L11.7674 19.0262L6.09462 22.0079L6.09305 22.0088C5.4503 22.3495 4.6814 21.8016 4.80621 21.0722L5.89122 14.7574L5.93576 14.4982L5.74739 14.3146L1.15972 9.84416L1.15958 9.84402C0.631732 9.33007 0.924263 8.43266 1.65076 8.32729L1.65113 8.32724L7.99227 7.40276Z" />
			</svg>
		</button>
	);
}

export default Star;
