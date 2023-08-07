import type { Fable } from '$lib/types';

export const getFablesAndSlugs = async () => {
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

export const getMotifsAndSlugs = async () => {
	const rawFables = import.meta.glob('$lib/fables/*.md');

	let slugMotifData: { slug: string; motif: string }[] = [];

	await Promise.all(
		Object.entries(rawFables).map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as Fable;
			const slug = path.split('/').pop()!.slice(0, -3);

			metadata.motifs.forEach((motif) => {
				slugMotifData.push({
					slug,
					motif
				});
			});
		})
	);

	return slugMotifData;
};

export const getMotifs = async () => {
	const rawFables = import.meta.glob('$lib/fables/*.md');
	const motifLists = await Promise.all(
		Object.entries(rawFables).map(async ([path, resolver]) => {
			const fileContent = await resolver();
			const fableData = fileContent as Fable;
			return fableData.metadata.motifs;
		})
	);

	let motifsSet = new Set<string>();

	motifLists.forEach((motifList) => {
		motifList.forEach((motif) => {
			motifsSet.add(motif);
		});
	});

	let motifs = Array.from(motifsSet);

	return motifs;
};

export const getCharacters = async () => {
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

	return characters;
};
