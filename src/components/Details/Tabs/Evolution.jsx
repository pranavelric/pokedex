import React from 'react';
import useEvolutionChain from '../../../hooks/useEvolutionChain.jsx';
import EvolutionItem from '../../EvolutionItem/EvolutionItem.jsx';
import Loader from '../../Loader/Loader';


export default function Evolution({ pokemon, onPokemonChange } ) {
    const { isLoading, evolutionChain } = useEvolutionChain( pokemon.id );
    return (
   <div className="tab tab_evolution">
    <h3>Evolution Chain</h3>
    {
        isLoading && <Loader/>

    }

{ ! isLoading && ! evolutionChain.length &&
                <div>
                    This pokemon doesn't evolove
                </div>
			}

{ ! isLoading &&
				evolutionChain.map( ( evolution ) => (
                       <EvolutionItem
                       key={ `${ evolution.currentId }-${ evolution.nextId }` }
                       onPokemonChange={ onPokemonChange }
                       { ...evolution }
                       />
				) )
			}


   </div>
  )
}
