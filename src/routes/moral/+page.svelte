<script lang="ts">
	export let data;
</script>

<h1>Morals</h1>

<div class="items">
	{#each data.fableData as fable}
		<a href="/fable/{fable.slug}" role="button" class="contrast outline">
			{fable.metadata.moral}
		</a>
	{/each}
</div>
