import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';

export const load: PageLoad = async ({ fetch, url }) => {
	const limit = Number(url.searchParams.get('limit')) || 9;
	const skip = Number(url.searchParams.get('skip')) || 0;
	const tag = url.searchParams.get('tag');

	const vseNovice = async (tag: any, limit: number = 9, skip: number = 0) => {
		let apiUrl = `${PUBLIC_BASE_STRAPI_URL}/api/novicas?pagination[start]=${skip}&pagination[limit]=${limit}&populate=*&sort=Datum:desc`;

		if (tag) {
			apiUrl += `&filters[$and][0][Tag][$eq]=${tag}`;
		}

		const vseNoviceRes = await fetch(apiUrl);

		if (!vseNoviceRes.ok) {
			error(404, 'Napaka pri nalaganju novic');
		}

		const vseNoviceResData = await vseNoviceRes.json();
		return vseNoviceResData;
	};

	const vseNoviceData = await vseNovice(tag, limit, skip);

	return {
		vseNovice: vseNoviceData
	};
};
