<script lang="ts">
	export let data;
</script>

<h2>{data.character}</h2>

{#if data.fablesByCharacter.length}
	<div class="items">
		{#each data.fablesByCharacter as fable}
			<a href="/{fable.slug}" role="button" class="contrast outline">
				{fable.metadata.title}
			</a>
		{/each}
	</div>
{/if}
