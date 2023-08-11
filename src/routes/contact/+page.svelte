<script lang="ts">
	let formResponse: { success?: boolean; error?: string } = {};

	async function handleSubmit(event: Event) {
		event.preventDefault();

		const formData = new FormData(event.target as HTMLFormElement);
		const name = formData.get('username') as string;
		const email = formData.get('email') as string;
		const message = formData.get('message') as string;

		const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSfaxW_9kl36wfZp23GatRFUcK4gNHiP_jBpPbOYGTfJFq6FuA/formResponse?usp=pp_url&entry.1257029937=${encodeURIComponent(
			name
		)}&entry.1099373931=${encodeURIComponent(email)}&entry.1470659876=${encodeURIComponent(
			message
		)}&submit=Submit`;

		// Fire and forget
		const res = await fetch(prefilledLink, { mode: 'no-cors' });

		formResponse.success = true;
	}
</script>

<svelte:head>
	<title>Contact Form - Aesop's Fables</title>
	<meta name="description" content="Contact Form - Aesop's Fables" />
</svelte:head>

<h1>Contact Page</h1>
{#if formResponse.success}
	<h2 class="success">Message has been received. Thank you!!</h2>
{:else}
	<form on:submit={handleSubmit}>
		<label for="username">Name</label>
		<input type="text" id="username" name="username" required />

		<label for="email">Email</label>
		<input type="email" id="email" name="email" required />

		<label for="message">Message</label>
		<textarea id="message" name="message" rows="4" required />
		<button type="submit">Send Message</button>
	</form>
{/if}
