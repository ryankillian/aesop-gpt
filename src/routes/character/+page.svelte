<script lang="ts">
	export let data;
	let { characters } = data;
</script>

{#if characters.length}
	<div class="items">
		{#each characters as character}
			<a href="/character/{character}" role="button" class="secondary">
				{character}
			</a>
		{/each}
	</div>
{/if}
