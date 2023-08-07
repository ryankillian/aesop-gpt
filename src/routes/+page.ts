import type { Fable } from '$lib/types.js';

export const load = async () => {
	let motifs = await getMotifs();
	motifs.sort();

	return {
		motifs
	};
};

const getMotifs = async () => {
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
