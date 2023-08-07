<script lang="ts">
	import type { NavItem } from '$lib/types';

	export let navItems: NavItem[];
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
