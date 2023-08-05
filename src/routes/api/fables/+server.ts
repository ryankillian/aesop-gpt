import { getFablesAndSlugs } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const fableData = await getFablesAndSlugs();

	const sortedFables = fableData.sort((a, b) => {
		return a.metadata.title.localeCompare(b.metadata.title);
	});

	return json(sortedFables);
};
