import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';

const API_URI = 'https://pokeapi.co/api/v2/pokemon';

const App = () => {
	const [pokemon, setPokemon] = useState([]);
	const [currentPageUrl, setCurrentPageUrl] = useState(API_URI);
	const [nextPageUrl, setNextPageUrl] = useState(API_URI);
	const [previousPageUrl, setPreviousPageUrl] = useState(API_URI);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let cancel;
		setLoading(true);
		axios
			.get(currentPageUrl, {
				cancelToken: new axios.CancelToken((token) => (cancel = token)),
			})
			.then((res) => {
				setLoading(false);
				setNextPageUrl(res.data.next);
				setPreviousPageUrl(res.data.previous);
				setPokemon(res.data.results.map((poke) => poke.name));
			});

		return () => cancel();
	}, [currentPageUrl]);

	const gotoNextPage = () => {
		setCurrentPageUrl(nextPageUrl);
	}

	const gotoPreviousPage = () => {
		setCurrentPageUrl(previousPageUrl);
	};


	if (loading) {
		return 'Loading...';
	}

	return (
		<>
			<h2>Pokemon</h2>
			<PokemonList pokemon={pokemon} />
			<Pagination 
				gotoNextPage={nextPageUrl ? gotoNextPage : null}
				gotoPreviousPage={previousPageUrl ? gotoPreviousPage : null}
			/>
		</>
	);
};

export default App;
