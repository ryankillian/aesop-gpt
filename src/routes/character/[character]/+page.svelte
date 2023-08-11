<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.character} - Aesop's Fables</title>
	<meta name="description" content="List of Aesop's Fables with {data.character}" />
</svelte:head>

<h2>{data.character}</h2>

{#if data.fablesByCharacter.length}
	<div class="items">
		{#each data.fablesByCharacter as fable}
			<a href="/fable/{fable.slug}" role="button" class="contrast outline">
				{fable.metadata.title}
			</a>
		{/each}
	</div>
{/if}
