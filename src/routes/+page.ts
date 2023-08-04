import type { FableData } from '$lib/types';

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/fables`);
	const fableData: FableData[] = await response.json();

	return {
		fableData
	};
};
