<script lang="ts">
	export let data;
	let { motifs } = data;
</script>

{#if motifs.length}
	<ul>
		{#each motifs as motif}
			<li>
				<a href="/motif/{motif}">
					{motif}
				</a>
			</li>
		{/each}
	</ul>
{/if}
