<script lang="ts">
	export let data;
	let { characters } = data;
</script>

{#if characters.length}
	<ul>
		{#each data.characters as character}
			<li>
				<a href="/character/{character}">
					{character}
				</a>
			</li>
		{/each}
	</ul>
{/if}
