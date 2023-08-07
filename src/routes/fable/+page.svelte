<script lang="ts">
	export let data;
</script>

<div class="items">
	{#each data.fableData as fable}
		<a href="/fable/{fable.slug}" role="button" class="contrast outline">
			{fable.metadata.title}
		</a>
	{/each}
</div>
