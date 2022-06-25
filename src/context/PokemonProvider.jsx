import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import PokemonContext from './PokemonContext';

export default function PokemonProvider({children}) {
    const [pokemons,setPokemons] = useState([]);
    const [currentPokemonId,setCurrentPokemonId]= useState(-1);
    const currentPokemon = pokemons[currentPokemonId];

  return (
    <PokemonContext.Provider value={{pokemons,setPokemons,setCurrentPokemonId,currentPokemonId,currentPokemon}}>
        {children}
    </PokemonContext.Provider>
  )
}

export const usePokemons = ()=>{
    return useContext(PokemonContext);
}