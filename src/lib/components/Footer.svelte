<script lang="ts">
	import { navItems } from '$lib/config';
</script>

<footer>
	<nav>
		<ul>
			{#each navItems as navItem}
				<li>
					<a href={navItem.route}>{navItem.title}</a>
				</li>
			{/each}
		</ul>
	</nav>
</footer>

<style>
	footer {
		padding: 1rem;
		background: lightskyblue;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	ul {
		margin: 0;
		list-style-type: none;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
</style>
