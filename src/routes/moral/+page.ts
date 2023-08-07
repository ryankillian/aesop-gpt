import { getFablesAndSlugs } from '$lib/utils';

export const load = async () => {
	const fableData = await getFablesAndSlugs();

	fableData.sort((a, b) => {
		return a.metadata.moral.localeCompare(b.metadata.moral);
	});

	return {
		fableData
	};
};
