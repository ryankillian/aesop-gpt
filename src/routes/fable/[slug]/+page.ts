import type { Fable } from '$lib/types.js';

export const prerender = false;

export const load = async ({ params }) => {
	const fable: Fable = await import(`../../../lib/fables/${params.slug}.md`);
	const metadata = fable.metadata;
	const content = fable.default;

	return {
		metadata,
		content
	};
};
