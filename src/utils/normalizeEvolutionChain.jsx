import React from 'react'
import getImageURL from './getImageURL';

export const normalizeEvolutionChain  = (evolution)=> {
 
    if ( ! evolution.evolves_to.length ) {
		return [];
	}
    const triggersDisplayName = {
		'level-up': 'Lvl',
		trade: 'Trade',
		'use-item': 'Use',
	};

    // Extract pokemon ID from 'species' URL (https://pokeapi.co/api/v2/pokemon-species/{id}/).
	const extractId = ( url ) => url.match( /\/(\d+)\// )[ 1 ];


   return evolution.evolves_to.reduce( ( carry, nextEvolution ) => {
		const details = nextEvolution.evolution_details[ 0 ],
			currentId = extractId( evolution.species.url ),
			nextId = extractId( nextEvolution.species.url );

		carry.push( {
			currentId,
			nextId,
			currentName: evolution.species.name,
			nextName: nextEvolution.species.name,
			currentImage: getImageURL( currentId ),
			nextImage: getImageURL( nextId ),
			trigger: triggersDisplayName[ details.trigger.name ],
			triggerValue: details.min_level || details.min_happiness || details.item?.name.replace( '-', ' ' ) || '',
		} );

		carry.push( ...normalizeEvolutionChain( nextEvolution ) );

		return carry;
	}, [] );
}
