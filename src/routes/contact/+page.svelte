<script lang="ts">
	export let form;
</script>

<h1>contact page</h1>
{#if form?.success}
	<h2 class="success">Message has been received. Thank you!!</h2>
{:else}
	<form method="POST">
		<label for="username">Name</label>
		<input type="text" id="username" name="username" required />
		<label for="email">Email</label>
		<input type="email" id="email" name="email" required />

		<label for="message">Message</label>
		<textarea id="message" name="message" rows="4" required />
		<button>Send Message</button>
	</form>
{/if}
