export const load = async ({ fetch }) => {
	const response = await fetch(`/api/characters`);
	const characters: string[] = await response.json();
	return {
		characters
	};
};
