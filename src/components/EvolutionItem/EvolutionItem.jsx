import './evolutionItem.scss';
import React from 'react';

import { usePokemons } from '../../context/PokemonProvider';
import { useNavigate} from 'react-router-dom';
import { getGenerationByPokemonId } from '../../utils/getGeneration';

export default function EvolutionItem(props) {
    const { setCurrentPokemonId } = usePokemons();
	const history = useNavigate();
    const {
		currentId,
		currentName,
		currentImage,
		nextId,
		nextName,
		nextImage,
		trigger,
		triggerValue,
		onPokemonChange,
	} = props;


    const handleClick = ( pokemonId ) => {
		const { link } = getGenerationByPokemonId( pokemonId );

		// Navigate to the Pokemon's generation ID.
		if ( history.pathname !== link ) {
			history( link );
		}

		setCurrentPokemonId( pokemonId );
		onPokemonChange();
	};


  return (
    <div className="evolution_container">
			<div className="evolve_container evolve_from">
				<div className="image_container" onClick={ () => handleClick( currentId ) }>
					<div className="bg_pokeball"></div>
					<img alt={ currentName } src={ currentImage } />
				</div>

				<span>{ currentName }</span>
			</div>

			<div className="trigger_container">
				<div className="arrow"></div>
				{ trigger } { triggerValue }
			</div>

			<div className="evolve_container evolve_to" onClick={ () => handleClick( nextId ) }>
				<div className="image_container">
					<div className="bg_pokeball"></div>
					<img alt={ nextName } src={ nextImage } />
				</div>

				<span>{ nextName }</span>
			</div>
		</div>
  )
}
