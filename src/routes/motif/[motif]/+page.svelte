<script lang="ts">
	export let data;

	let { fablesByMotif } = data;
</script>

<h2>{data.motif}</h2>

{#if fablesByMotif.length}
	<div class="items">
		{#each fablesByMotif as fable}
			<a href="/{fable.slug}" role="button" class="contrast outline">
				{fable.metadata.title}
			</a>
		{/each}
	</div>
{/if}
