import './pokedexview.scss';
import React from 'react'

import { useEffect } from 'react';
import { usePokemons } from '../../context/PokemonProvider';
import useGeneration from '../../hooks/useGeneration';
import Card from '../card/Card';
import Loader from '../Loader/Loader';


export default function PokedexView({generation}) {
    const {pokemons,setPokemons,setCurrentPokemonId} = usePokemons();
    const {data,isLoading}= useGeneration(generation);

	useEffect( () => {
		setPokemons( data );
	}, [ data ] );

    if(isLoading){
     return (<Loader/>)
    }

  return (
    <div className="pokedex_view">
        {
            pokemons.map((pokemon)=>{
                return (
                <Card key={pokemon.id} pokemon={pokemon} onClick={()=>setCurrentPokemonId(pokemon.id)}/>
                );
            })
        }
    </div>
  )
}
