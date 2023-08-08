import type { Fable, FableData } from '$lib/types';

// export const prerender = false;

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
