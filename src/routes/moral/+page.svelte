<script lang="ts">
	import { moralsTitle, seoDescription } from '$lib/config.js';
	export let data;
</script>

<svelte:head>
	<title>{moralsTitle}</title>
	<meta name="description" content={seoDescription} />
</svelte:head>

<h1>Morals</h1>

<div class="items">
	{#each data.fableData as fable}
		<a href="/fable/{fable.slug}" role="button" class="contrast outline">
			{fable.metadata.moral}
		</a>
	{/each}
</div>
