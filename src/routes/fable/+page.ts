import { getFablesAndSlugs } from '$lib/utils';

export const load = async () => {
	return {
		fableData: getFablesAndSlugs()
	};
};
