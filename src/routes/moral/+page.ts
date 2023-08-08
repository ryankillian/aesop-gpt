import type { Fable, FableData } from '$lib/types';

export const load = async ({ fetch }) => {
	return {
		fableData: getFablesAndSlugs()
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
