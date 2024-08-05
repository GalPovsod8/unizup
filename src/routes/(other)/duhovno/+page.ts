import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';

export const load: PageLoad = async ({ fetch }) => {
	const koristnePovezave = async () => {
		const povezaveRes = await fetch(`${PUBLIC_BASE_STRAPI_URL}/api/koristna-povezavas`);
		if (!povezaveRes.ok) {
			error(404, 'Napaka pri nalaganju povezav');
		}
		const povezaveData = await povezaveRes.json();
		return povezaveData.data;
	};

	const duhovniClanki = async () => {
		const clankiRes = await fetch(
			`${PUBLIC_BASE_STRAPI_URL}/api/novicas?populate=*&sort=Datum:asc&filters[$and][0][duhovnaRast][$eq]=true`
		);
		if (!clankiRes.ok) {
			error(404, 'Napaka pri nalaganju clankov');
		}
		const clankiData = await clankiRes.json();
		return clankiData.data;
	};

	return {
		koristnePovezave: koristnePovezave(),
		duhovniClanki: duhovniClanki()
	};
};
