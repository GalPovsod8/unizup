import { error } from '@sveltejs/kit';
import type { RouteParams } from './$types';
import type { PageLoad } from './$types';
import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';

export const load: PageLoad = async ({ fetch, params }) => {
	const FetchNovica = async (id: RouteParams) => {
		const nRes = await fetch(`${PUBLIC_BASE_STRAPI_URL}/api/novicas/${id}?populate=*`);
		if (!nRes.ok) {
			error(404, 'Novica ne obstja!');
		}
		const novicaData = await nRes.json();
		return novicaData.data;
	};

	const FetchDrugeNovice = async () => {
		const dnRes = await fetch(
			`${PUBLIC_BASE_STRAPI_URL}/api/novicas?populate=*&sort=Datum:desc&pagination[limit]=8`
		);
		if (!dnRes.ok) {
			error(404, 'Novica ne obstja!');
		}
		const drugeNovicaData = await dnRes.json();
		return drugeNovicaData.data;
	};

	return {
		novica: FetchNovica(params.novicaId),
		drugeNovice: FetchDrugeNovice()
	};
};
