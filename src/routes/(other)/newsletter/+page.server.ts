import {
	PUBLIC_BASE_STRAPI_URL,
	PUBLIC_BASE_STRAPI_NEWSLETTER_API_TOKEN
} from '$env/static/public';
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
			const usersResponse = await axios.get(
				`${PUBLIC_BASE_STRAPI_URL}/strapi-newsletter/newsletter/users`,
				{
					headers: {
						Authorization: `Bearer ${PUBLIC_BASE_STRAPI_NEWSLETTER_API_TOKEN}`,
						'Content-Type': 'application/json'
					}
				}
			);

			const emailAlreadySubscribed = usersResponse.data.some(
				(user: { email: string }) => user.email === email
			);

			if (emailAlreadySubscribed) {
				return fail(400, { email, alreadySubscribed: true });
			}

			await axios.post(`${PUBLIC_BASE_STRAPI_URL}/strapi-newsletter/newsletter/subscribe`, {
				email
			});

			return {
				status: 200,
				body: { message: 'Prijava na novice uspešna!' }
			};
		} catch (error) {
			return fail(500, { email, success: false });
		}
	}
};
