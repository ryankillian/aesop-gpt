<script lang="ts">
	export let data;
	let { metadata, content } = data;
</script>

<svelte:head>
	<title>{metadata.title} - Aesop's Fables</title>
	<meta property="og:title" content={metadata.title} />
	<meta name="description" content="Analysis of the fable: {metadata.title}" />
	<meta name="keywords" content="Aesop, Fables, {metadata.title}, {metadata.motifs.join(', ')}" />
</svelte:head>

<article>
	<header>
		<h1>{metadata.title}</h1>
	</header>
	<section>
		<svelte:component this={content} />
	</section>
	<footer>
		<p>
			Characters:
			{#each metadata.characters as character, i (character)}
				<a href={`/character/${character.replace(/\s+/g, '-').toLowerCase()}`}>{character}</a>{i <
				metadata.characters.length - 1
					? ', '
					: ''}
			{/each}
		</p>

		<p>
			Motifs:
			{#each metadata.motifs as motif, i (motif)}
				<a href={`/motif/${motif.replace(/\s+/g, '-').toLowerCase()}`}>{motif}</a>{i <
				metadata.motifs.length - 1
					? ', '
					: ''}
			{/each}
		</p>
	</footer>
</article>
