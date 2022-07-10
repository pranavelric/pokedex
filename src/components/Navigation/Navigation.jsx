import React from 'react';
import './navigation.scss';
import generations from '../../data/generations';
import CustomNavLink from './CustomNavLink';

export default function Navigation() {
  return (
    
    <div className='navigation_container'>
        <h3 className="navigation_title">Select generation</h3>
        <div className="links_container">
            {
                generations.map(({id,link,text,exact=false})=>(
                    <CustomNavLink  exact={`${exact}`} key={id} to={link}>
                            {text}
                    </CustomNavLink>
                ))

            }
        </div>
    </div>
  )
}
