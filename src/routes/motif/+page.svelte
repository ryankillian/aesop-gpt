<script lang="ts">
	export let data;
	let { motifs } = data;
</script>

{#if motifs.length}
	<div class="items">
		{#each motifs as motif}
			<a href="/motif/{motif}" role="button" class="secondary">
				{motif}
			</a>
		{/each}
	</div>
{/if}
