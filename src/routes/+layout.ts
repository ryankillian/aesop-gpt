export const prerender = true;

export const load = async ({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
};
