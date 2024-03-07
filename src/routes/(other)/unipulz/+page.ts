import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';

export const load: PageLoad = async ({ fetch, url }) => {
	const vseNovice = async (tag: any) => {
		let apiUrl = `${PUBLIC_BASE_STRAPI_URL}/api/novicas?populate=*&sort=Datum:desc`;

		if (tag) {
			apiUrl += `&filters[$and][0][Tag][$eq]=${tag}`;
		}

		const vseNoviceRes = await fetch(apiUrl);

		if (!vseNoviceRes.ok) {
			error(404, 'Napaka pri nalaganju novic');
		}

		const vseNoviceResData = await vseNoviceRes.json();
		return vseNoviceResData.data;
	};

	return {
		vseNovice: vseNovice(url.searchParams.get('tag'))
	};
};
