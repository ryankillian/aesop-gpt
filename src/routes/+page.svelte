<script lang="ts">
	export let data;
	let { motifs } = data;
</script>

<h1>Motifs</h1>

{#if motifs.length}
	<div class="items">
		{#each motifs as motif}
			<a
				href={`/${motif.replace(/\s+/g, '_').toLowerCase()}`}
				role="button"
				class="contrast outline"
			>
				{motif}
			</a>
		{/each}
	</div>
{/if}
