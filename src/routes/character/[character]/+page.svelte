<script lang="ts">
	export let data;
</script>

<h1>{data.character}</h1>

<ul>
	{#each data.fablesByCharacter as fable}
		<li>
			<h2>
				<a href={`/${fable.slug}`}>
					{fable.metadata.title}
				</a>
			</h2>
		</li>
	{/each}
</ul>
