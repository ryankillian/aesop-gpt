<script lang="ts">
	export let data;
	console.log(data);
</script>

<h1>{data.motif}</h1>

<ul>
	{#each data.fablesByMotif as fable}
		<li>
			<h2>
				<a href={`/${fable.slug}`}>
					{fable.metadata.title}
				</a>
			</h2>
		</li>
	{/each}
</ul>
