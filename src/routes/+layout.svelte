<script lang="ts">
	import '@picocss/pico';
	import './styles.css';

	import { fade } from 'svelte/transition';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	export let data;
</script>

<div class="header-content-footer">
	<Header />

	{#key data.currentRoute}
		<main
			class="expanding-content"
			in:fade={{ duration: 150, delay: 150 }}
			out:fade={{ duration: 150 }}
		>
			<slot />
		</main>
	{/key}

	<Footer />
</div>

<style>
	.header-content-footer {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.expanding-content {
		flex: 1;
	}

	@media screen and (min-width: 768px) {
		.header-content-footer {
			max-width: 40%;
			margin: auto;
		}
	}
</style>
