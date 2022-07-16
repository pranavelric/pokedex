import './details.scss';
import React from 'react'
import {memo, useState} from 'react';
import getImageURL from '../../utils/getImageURL';
import About from './Tabs/About.jsx';
import BaseStatus from './Tabs/BaseStatus';
import Evolution from './Tabs/Evolution';

const TAB_ABOUT = 'about';
const TAB_STATS = 'base_stats';
const TAB_EVOLUTION = 'evolution';
const TAB_DEFAULT = TAB_ABOUT;

const tabs = [
	{
		id: TAB_ABOUT,
		label: 'About',
	},
	{
		id: TAB_STATS,
		label: 'Base Stats',
	},
	{
		id: TAB_EVOLUTION,
		label: 'Evolution',
	},
];

 function Details({pokemon}) {

  const [currentTab,setCurrentTab]  = useState(TAB_DEFAULT);
  const imgUrl  = getImageURL(pokemon?.id);
  if(!pokemon){
    return null
  }

  // Return tab switch class name.
	const getClassName = ( tabName ) => {
		return `tab_switch ${ currentTab === tabName ? 'active' : '' }`;
	};
  	// Change pokemon data & go to first tab.
	const onPokemonChange = () => {
		setCurrentTab( TAB_DEFAULT );
	};



  return (
    <div className="details">
 
      <img src={imgUrl} alt={pokemon.name} className="pokemon_image" />
 


      <div className="tabs_switch_container">
				{
					tabs.map( ( { id, label } ) => (
						<button key={ id } className={ getClassName( id ) } onClick={ () => setCurrentTab( id ) }>
							{ label }
						</button>
					) )
				}
			</div>




      {
				(
				 () => {
					switch ( currentTab ) {
						case TAB_ABOUT:
              
							return <About pokemon={ pokemon } />;

						case TAB_STATS:
              
							return <BaseStatus stats={ pokemon.stats } />;

						case TAB_EVOLUTION:
              
							return <Evolution pokemon={ pokemon } onPokemonChange={ onPokemonChange } />;

						default:
							return null;
					}
				} )()
			}


 
 
    </div>




  )
}

export default memo(Details);
