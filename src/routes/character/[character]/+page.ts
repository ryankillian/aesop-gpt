import type { Fable, FableData } from '$lib/types';

export const prerender = false;

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

const getFablesAndSlugs = async () => {
	const rawFables = import.meta.glob('$lib/fables/*.md');

	const fableData = await Promise.all(
		Object.entries(rawFables).map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as Fable;
			const slug = path.split('/').pop()!.slice(0, -3);

			return {
				slug,
				metadata
			};
		})
	);

	return fableData;
};
