import { error } from '@sveltejs/kit';
import type { RouteParams } from './$types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const FetchNovica = async (id: RouteParams) => {
		const nRes = await fetch(`http://localhost:1337/api/novicas/${id}`);
		if (!nRes.ok) {
			error(404, 'Novica ne obstja!');
		}
		const novicaData = await nRes.json();
		return novicaData.data;
	};

	const FetchDrugeNovice = async () => {
		const dnRes = await fetch(
			`http://localhost:1337/api/novicas?populate=*&sort=Datum:desc&pagination[limit]=10`
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
