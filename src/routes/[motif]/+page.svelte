<script lang="ts">
	import { seoDescription } from '$lib/config.js';

	export let data;

	let { fablesByMotif } = data;
</script>

<svelte:head>
	<title>{data.motif}</title>
	<meta name="description" content="List of Aesop's Fables which includes {data.motif} theme" />
</svelte:head>

<h2>{data.motif}</h2>

{#if fablesByMotif.length}
	<div class="items">
		{#each fablesByMotif as fable}
			<a href="/fable/{fable.slug}" role="button" class="contrast outline">
				{fable.metadata.title}
			</a>
		{/each}
	</div>
{/if}
