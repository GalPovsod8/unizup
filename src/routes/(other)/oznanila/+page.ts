import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';

export const load: PageLoad = async ({ fetch, url }) => {
	const limit = Number(url.searchParams.get('limit')) || 9;
	const skip = Number(url.searchParams.get('skip')) || 0;

	const fetchOznanila = async (limit: number = 9, skip: number = 0) => {
		const oznanilaRes = await fetch(
			`${PUBLIC_BASE_STRAPI_URL}/api/oznanilos?pagination[start]=${skip}&pagination[limit]=${limit}&populate=*&sort=Datum:desc`
		);

		if (!oznanilaRes.ok) {
			throw error(404, 'Napaka pri nalaganju oznanil');
		}

		const oznanilaResData = await oznanilaRes.json();
		return oznanilaResData;
	};

	const oznanila = await fetchOznanila(limit, skip);

	return {
		oznanila
	};
};
