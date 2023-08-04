import type { FableData } from '$lib/types';

export const load = async ({ fetch, params }) => {
	const motif = params.motif.replace(/-/g, ' ');
	const response = await fetch(`/api/fables`);
	const fableData: FableData[] = await response.json();

	const fablesByMotif = fableData.filter((fable) =>
		fable.metadata.motifs.map((c) => c.toLowerCase()).includes(motif.toLowerCase())
	);

	return {
		motif,
		fablesByMotif
	};
};
