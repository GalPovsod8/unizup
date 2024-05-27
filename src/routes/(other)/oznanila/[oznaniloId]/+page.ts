import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
import type { RouteParams } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const fetchOznanilo = async (id: RouteParams) => {
		const oRes = await fetch(`${PUBLIC_BASE_STRAPI_URL}/api/oznanilos/${id}?populate=*`);
		if (!oRes.ok) {
			error(404, 'Oznanilo ne obstja!');
		}
		const oznaniloData = await oRes.json();
		return oznaniloData.data;
	};

	return {
		oznanilo: fetchOznanilo(params.oznaniloId)
	};
};
