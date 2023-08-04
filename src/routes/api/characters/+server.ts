import { getCharacters } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const characters = await getCharacters();
	return json(characters.sort());
};
