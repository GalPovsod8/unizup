import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { RouteParams } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const fetchSkupina = async (id: RouteParams) => {
		const skupinaRes = await fetch(`${PUBLIC_BASE_STRAPI_URL}/api/skupinas/${id}?populate=*`);
		if (!skupinaRes.ok) {
			error(404, 'Novica ne obstja!');
		}
		const skupinaData = await skupinaRes.json();
		return skupinaData.data;
	};

	return {
		skupina: fetchSkupina(params.skupinaId)
	};
};
