import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const FetchNews = async () => {
		const newsRes = await fetch('http://localhost:1337/api/novicas?populate=*&sort=Datum:desc');

		if (!newsRes.ok) {
			error(404, 'Napaka pri nalaganju novic');
		}

		const newsData = await newsRes.json();
		return newsData.data;
	};

	return {
		novice: FetchNews()
	};
};
