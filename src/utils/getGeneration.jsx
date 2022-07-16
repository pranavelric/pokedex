import generations from '../data/generations';
export const getGenerationByPokemonId = ( id ) => {
	return generations.find( ( { offset, limit } ) => {
		const firstId = offset + 1;
		const lastId = firstId + limit;

		return id >= firstId && id <= lastId;
	} );
};