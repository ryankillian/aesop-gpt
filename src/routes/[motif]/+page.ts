import type { FableData } from '$lib/types';
import { getFablesAndSlugs } from '$lib/utils/index.js';

export const load = async ({ params }) => {
	const motif = params.motif.replace(/_/g, ' ');
	const fableData: FableData[] = await getFablesAndSlugs();

	const fablesByMotif = fableData.filter((fable) =>
		fable.metadata.motifs.map((c) => c.toLowerCase()).includes(motif.toLowerCase())
	);

	return {
		motif,
		fablesByMotif
	};
};
