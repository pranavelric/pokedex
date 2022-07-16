import React from 'react';
import './detailsView.scss';
import ReactDOM from 'react-dom';
import { useCallback, useState } from 'react';
import { usePokemons } from '../../context/PokemonProvider';
import Card from '../card/Card';
import Overlay from '../Overlay/Overlay';
import BackButton from '../BackButton/BackButton';
import Details from '../Details/Details';



export default function DetailsView() {

    const { currentPokemon, setCurrentPokemonId } = usePokemons();
    const [ isHidden, seIsHidden ] = useState( false );

	const closeModal = useCallback( () => {
		
		seIsHidden( true );
	}, [] );

    const handleAnimationEnd = useCallback( ( { animationName } ) => {
		if ( animationName !== 'pull-down-center' ) {
			return;
		}

		seIsHidden( false );
		setCurrentPokemonId( -1 );
	},[] );

	if ( ! currentPokemon ) {
		return null;
	}

    return ReactDOM.createPortal(
		<>
			<Overlay hidden={ isHidden } onClick={ closeModal } />

			<div className={ `details_view_container ${ isHidden && 'hidden' }` } onAnimationEnd={ handleAnimationEnd }>
				<BackButton onClick={ closeModal } />
				<Card pokemon={ currentPokemon }/>
				<Details pokemon={ currentPokemon } />
			</div>
		</>, document.body,
	);
}
