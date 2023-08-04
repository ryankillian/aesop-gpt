import type { FableData } from '$lib/types';

export const load = async ({ fetch, params }) => {
	const character = params.character.replace(/-/g, ' ');
	const response = await fetch(`/api/fables`);
	const fableData: FableData[] = await response.json();

	const fablesByCharacter = fableData.filter((fable) =>
		fable.metadata.characters.map((c) => c.toLowerCase()).includes(character.toLowerCase())
	);

	return {
		character,
		fablesByCharacter
	};
};
