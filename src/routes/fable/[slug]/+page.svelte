<script lang="ts">
	export let data;
	let { metadata, content } = data;
</script>

<svelte:head>
	<title>{metadata.title} - Aesop's Fables</title>
	<meta name="description" content="Analysis of the fable: {metadata.title}" />
</svelte:head>

<article>
	<header>
		<h2>{metadata.title}</h2>
	</header>
	<section>
		<svelte:component this={content} />
	</section>
	<footer>
		<p>
			Characters:
			{#each metadata.characters as character, i (character)}
				<a href={`/character/${character.replace(/\s+/g, '_').toLowerCase()}`}>{character}</a>{i <
				metadata.characters.length - 1
					? ', '
					: ''}
			{/each}
		</p>

		<p>
			Motifs:
			{#each metadata.motifs as motif, i (motif)}
				<a href={`/${motif.replace(/\s+/g, '_').toLowerCase()}`}>{motif}</a>{i <
				metadata.motifs.length - 1
					? ', '
					: ''}
			{/each}
		</p>
	</footer>
</article>
