import './card.scss';
import React from 'react';
import { memo } from 'react';
import getImageURL from '../../utils/getImageURL';


export default function Card({pokemon,onClick}) {
  
    if(!pokemon){
        return null;
    }
    const { name, id, types } = pokemon;

    const imgUrl= getImageURL(id);
    const className = 	types.map( ( { type } ) =>'type_'+type.name).join(' ');
    const paddedId = '#'+id.toString().padStart(3,'000');



    return (
        <div className="card_container" onClick={onClick}>
                <div className={`card ${className}`}>

                <div className="bg_pokeball"></div>

                <span className='pokemon_id'>{paddedId}</span>

                <div className="card_title">
                    <h2>{name.replace(/-/g,'')}</h2>
              

                <div className="pokemon_types">
                    
                    {
                   	types.map( ( { type } ) => (
                        <span className="type" key={ type.name }>{ type.name }</span>
                    ) )
                    }
                  
                </div>

                </div>     

                <div className="pokemon_image">

                    <img src={imgUrl} alt={name} />     
                
                </div> 

            </div>
    

        </div>
  )
}
