<script lang="ts">
	import { navItems } from '$lib/config';
</script>

<nav>
	{#each navItems as navItem}
		<ul>
			<li>
				<a href={navItem.route}>{navItem.title}</a>
			</li>
		</ul>
	{/each}
</nav>
