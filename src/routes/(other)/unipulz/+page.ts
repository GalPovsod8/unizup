import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';

export const load: PageLoad = async ({ fetch }) => {
	const DobiNovice = async () => {
		const vseNoviceRes = await fetch(
			`${PUBLIC_BASE_STRAPI_URL}/novicas?populate=*&sort=Datum:desc`
		);

		if (!vseNoviceRes.ok) {
			error(404, 'Napaka pri nalaganju novic');
		}

		const vseNoviceResData = await vseNoviceRes.json();
		return vseNoviceResData.data;
	};

	return {
		vseNovice: DobiNovice()
	};
};
