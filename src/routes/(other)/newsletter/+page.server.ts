import { BREVO_API_KEY } from '$env/static/private';
import { fail, type Actions } from '@sveltejs/kit';
import axios from 'axios';

export const actions: Actions = {
	subscribe: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;

		if (!email) {
			return fail(400, { email, missing: true });
		}

		try {
			const headers = {
				accept: 'application/json',
				'content-type': 'application/json',
				'api-key': `${BREVO_API_KEY}`
			};

			const data = {
				email: email,
				updateEnabled: false
			};

			await axios.post('https://api.brevo.com/v3/contacts', data, { headers });

			return {
				status: 200,
				body: { message: 'Prijava na novice uspešna!' }
			};
		} catch (err: any) {
			if (err.response && err.response.data && err.response.data.code === 'duplicate_parameter') {
				return fail(400, { email, error: 'S tem e-naslovom ste že prijavljeni.' });
			}

			return fail(500, { email, error: 'Internal Server Error.' });
		}
	}
};
