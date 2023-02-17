import React from 'react';

const PokemonList = ({ pokemon }) => {
	return (
		<div className='list'>
			{pokemon.map((poke) => (
				<div className='instance' key={poke}>{poke}</div>
			))}
		</div>
	);
};

export default PokemonList;
