<script lang="ts">
	import { fablesTitle, seoDescription } from '$lib/config.js';

	export let data;
</script>

<svelte:head>
	<title>{fablesTitle}</title>
	<meta name="description" content={seoDescription} />
</svelte:head>

<div class="items">
	{#each data.fableData as fable}
		<a href="/fable/{fable.slug}" role="button" class="contrast outline">
			{fable.metadata.title}
		</a>
	{/each}
</div>
