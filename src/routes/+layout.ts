export const prerender = true;

import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';

inject({ mode: dev ? 'development' : 'production' });

export const load = async ({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
};
