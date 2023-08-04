export const load = async ({ fetch }) => {
	const response = await fetch(`/api/motifs`);
	const motifs: string[] = await response.json();
	return {
		motifs
	};
};
