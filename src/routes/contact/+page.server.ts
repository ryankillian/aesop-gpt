export const prerender = false;

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('username');
		const email = formData.get('email');
		const message = formData.get('message');

		const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSfaxW_9kl36wfZp23GatRFUcK4gNHiP_jBpPbOYGTfJFq6FuA/formResponse?usp=pp_url&entry.1257029937=${name}&entry.1099373931=${email}&entry.1470659876=${message}&submit=Submit`;

		const response = await fetch(prefilledLink);

		return {
			success: true,
			status: 'Form is submitted'
		};
	}
};
