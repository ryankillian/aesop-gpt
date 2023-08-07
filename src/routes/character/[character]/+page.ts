import type { FableData } from '$lib/types';
import { getFablesAndSlugs } from '$lib/utils/index.js';

export const load = async ({ params }) => {
	const character = params.character.replace(/_/g, ' ');
	const fableData: FableData[] = await getFablesAndSlugs();

	const fablesByCharacter = fableData.filter((fable) =>
		fable.metadata.characters.map((c) => c.toLowerCase()).includes(character.toLowerCase())
	);

	return {
		character,
		fablesByCharacter
	};
};
