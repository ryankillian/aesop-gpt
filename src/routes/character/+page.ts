import type { Fable } from '$lib/types.js';

export const load = async ({ fetch }) => {
	return {
		characters: await getCharacters()
	};
};

const getCharacters = async () => {
	const rawFables = import.meta.glob('$lib/fables/*.md');
	const characterLists = await Promise.all(
		Object.entries(rawFables).map(async ([path, resolver]) => {
			const fileContent = await resolver();
			const fableData = fileContent as Fable;
			return fableData.metadata.characters;
		})
	);

	let charactersSet = new Set<string>();

	characterLists.forEach((characterList) => {
		characterList.forEach((character) => {
			charactersSet.add(character);
		});
	});

	let characters = Array.from(charactersSet);

	characters.sort();

	return characters;
};
