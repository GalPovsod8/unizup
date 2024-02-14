import type { RouteParams } from '../$types';
import type { PageLoad } from '../../../$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const FetchNovica = async (id: RouteParams) => {
		const nRes = await fetch(`http://localhost:1337/api/novicas/${id}`);
		const novicaData = await nRes.json();
		return novicaData;
	};

	return {
		novica: FetchNovica(params.novicaId)
	};
};
