import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const DobiNovice = async () => {
		const vseNoviceRes = await fetch(
			'http://localhost:1337/api/novicas?populate=*&sort=Datum:desc'
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
