import { useMemo } from 'react';
import { normalizeEvolutionChain } from '../utils/normalizeEvolutionChain';

import React from 'react'

// Hook to normalize an evolution chain into an array.
const useNormalizeEvolutionChain = ( { chain, id } ) => {
	return useMemo( () => {
		return { evolutionChain: chain ? normalizeEvolutionChain( chain ) : [] };
	}, [ id ] );
};

export default useNormalizeEvolutionChain;