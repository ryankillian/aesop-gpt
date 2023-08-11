<script lang="ts">
	import { charactersTitle, seoDescription } from '$lib/config.js';

	export let data;
	let { characters } = data;
</script>

<svelte:head>
	<title>{charactersTitle}</title>
	<meta name="description" content={seoDescription} />
</svelte:head>

{#if characters.length}
	<div class="items">
		{#each characters as character}
			<a href="/character/{character}" role="button" class="contrast outline">
				{character}
			</a>
		{/each}
	</div>
{/if}
