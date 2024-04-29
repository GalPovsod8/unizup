import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { RouteParams } from './$types';
import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';

export const load: PageLoad = async ({ fetch, params }) => {
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

	const fetchSkupine = async () => {
		const sRes = await fetch(`${PUBLIC_BASE_STRAPI_URL}/api/skupinas?populate=*`);
		if (!sRes.ok) {
			error(404, 'Skupina ne obstja!');
		}
		const skupinaData = await sRes.json();
		return skupinaData.data;
	};

	return {
		aktivnosti: fetchAktivnosti(),
		skupine: fetchSkupine()
	};
};
