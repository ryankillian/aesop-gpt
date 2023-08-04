import { getMotifs } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const motifs = await getMotifs();
	return json(motifs.sort());
};
