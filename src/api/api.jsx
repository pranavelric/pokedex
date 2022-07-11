const BASE_URL = 'https://pokeapi.co/api/v2/';

const cache = {}

// Get req to api

const get = async (endpoint)=>{
        if(!cache[endpoint]){
            const data = await fetch(BASE_URL+endpoint).then((result) => result.json()                
            ).catch((err) =>     data= "Some error occured, details:"+ err 
            );
         
            cache[endpoint] = data
        }  
     
        return cache[endpoint];
};


// Fetch all pokemons.
export const fetchPokemons = ( limit, offset ) => {
	return get( `pokemon?limit=${ limit }&offset=${ offset }` );
};


// Fetch specific pokemon data.
export const fetchPokemonData = ( pokemonId ) => {
	return get( `pokemon/${ pokemonId }` );
};



// Fetch pokemon evolutions.
export const fetchPokemonEvolutionChain = ( pokemonId ) => {
	return get( `pokemon-species/${ pokemonId }` ).then( ( data ) => {
		const evolutionChainId = data.evolution_chain.url.match( /\/(\d+)\// )[ 1 ];

		return get( `evolution-chain/${ evolutionChainId }` );
	} );
};