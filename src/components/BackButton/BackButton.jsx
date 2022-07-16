import './backButton.scss';
import React from 'react'

import { memo } from 'react';

function BackButton( { onClick } ) {
	return <div className="back-button" onClick={ onClick } />;
}

export default memo( BackButton );
