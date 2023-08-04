<script lang="ts">
	export let data;
</script>

<h1>Fables</h1>

<div class="items">
	{#each data.fableData as fable}
		<a href={fable.slug} role="button" class="contrast">
			{fable.metadata.title}
		</a>
	{/each}
</div>
