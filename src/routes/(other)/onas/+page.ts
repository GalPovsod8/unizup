import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';

export const load: PageLoad = async ({ fetch }) => {
	const fetchAktivnosti = async () => {
		const aktivnostiRes = await fetch(
			`${PUBLIC_BASE_STRAPI_URL}/api/redna-aktivnosts?pagination[limit]=4`
		);

		if (!aktivnostiRes.ok) {
			error(404, 'Napaka pri nalaganju aktivnosti');
		}

		const aktivnostiData = await aktivnostiRes.json();
		return aktivnostiData.data;
	};

	return {
		aktivnosti: fetchAktivnosti()
	};
};
