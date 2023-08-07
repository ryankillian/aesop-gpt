import { getFablesAndSlugs } from '$lib/utils';

export const load = async () => {
	const fableData = await getFablesAndSlugs();

	fableData.sort((a, b) => {
		return a.metadata.title.localeCompare(b.metadata.title);
	});

	return {
		fableData
	};
};
