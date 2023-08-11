<script lang="ts">
	import { motifsTitle, seoDescription } from '$lib/config.js';
	export let data;
	let { motifs } = data;
</script>

<svelte:head>
	<title>{motifsTitle}</title>
	<meta
		name="description"
		content="List of Motifs and Insights from Aesop's Fables from GPT-4 analysis"
	/>
</svelte:head>

<h1>Motifs</h1>

{#if motifs.length}
	<div class="items">
		{#each motifs as motif}
			<a
				href={`/${motif.replace(/\s+/g, '_').toLowerCase()}`}
				role="button"
				class="contrast outline"
			>
				{motif}
			</a>
		{/each}
	</div>
{/if}
