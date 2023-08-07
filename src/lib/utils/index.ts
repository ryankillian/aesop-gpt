import type { Fable } from '$lib/types';

export const getFable = async (slug: string) => {
	const fable: Fable = await import(`$lib/fables/${slug}.md`);
	const metadata = fable.metadata;
	const content = fable.default;

	return {
		metadata,
		content
	};
};

export const getFablesAndSlugs = async () => {
	const rawFables = import.meta.glob('$lib/fables/*.md');

	const fableData = await Promise.all(
		Object.entries(rawFables).map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as Fable;
			const slug = path.split('/').pop()!.slice(0, -3);

			return {
				slug,
				metadata
			};
		})
	);

	return fableData;
};

export const getMotifsAndSlugs = async () => {
	const rawFables = import.meta.glob('$lib/fables/*.md');

	let slugMotifData: { slug: string; motif: string }[] = [];

	await Promise.all(
		Object.entries(rawFables).map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as Fable;
			const slug = path.split('/').pop()!.slice(0, -3);

			metadata.motifs.forEach((motif) => {
				slugMotifData.push({
					slug,
					motif
				});
			});
		})
	);

	return slugMotifData;
};
