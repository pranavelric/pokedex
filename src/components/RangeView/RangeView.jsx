import './RangeView.scss';
import React from 'react'

export default function RangeView({value=50,max=100}) {
  const percent = parseInt( value ) / parseInt( max ) * 100;
	const colorClass = percent >= 50 ? 'range_view_positive' : 'range_view_negative';

  return (
      <div className={ `range_view ${ colorClass }` } style={ { '--percent': `${ percent }%` } } />
    );
}
