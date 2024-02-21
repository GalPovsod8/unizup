import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';

export const load: PageLoad = async ({ fetch }) => {
	const FetchOznanila = async () => {
		const oznanilaRes = await fetch(
			`${PUBLIC_BASE_STRAPI_URL}/api/oznanilos?populate=*&sort=Datum:desc&pagination[limit]=3`
		);

		if (!oznanilaRes.ok) {
			error(404, 'Napaka pri nalaganju oznanil');
		}

		const oznanilaData = await oznanilaRes.json();
		return oznanilaData.data;
	};

	const FetchNews = async () => {
		const newsRes = await fetch(
			`${PUBLIC_BASE_STRAPI_URL}/api/novicas?populate=*&sort=Datum:desc&pagination[limit]=6`
		);

		if (!newsRes.ok) {
			error(404, 'Napaka pri nalaganju novic');
		}

		const newsData = await newsRes.json();
		return newsData.data;
	};

	return {
		oznanila: FetchOznanila(),
		novice: FetchNews()
	};
};
