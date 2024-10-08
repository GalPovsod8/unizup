import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { PUBLIC_BASE_STRAPI_URL } from '$env/static/public';

export const load: PageLoad = async ({ fetch }) => {
	const fetchSlike = async () => {
		const slikeONasRes = await fetch(`${PUBLIC_BASE_STRAPI_URL}/api/slike-o-nas?populate=*`);

		if (!slikeONasRes.ok) {
			error(404, 'Napaka pri nalaganju slik');
		}

		const slikeONasResData = await slikeONasRes.json();
		return slikeONasResData.data.slike;
	};

	const fetchAktivnosti = async () => {
		const aktivnostiRes = await fetch(
			`${PUBLIC_BASE_STRAPI_URL}/api/redna-aktivnosts?pagination[limit]=4`
		);

		if (!aktivnostiRes.ok) {
			error(404, 'Napaka pri nalaganju aktivnosti');
		}

		const aktivnostiData = await aktivnostiRes.json();
		return aktivnostiData.data;
	};

	const fetchSkupine = async () => {
		const sRes = await fetch(`${PUBLIC_BASE_STRAPI_URL}/api/skupinas?populate=*`);
		if (!sRes.ok) {
			error(404, 'Skupina ne obstja!');
		}
		const skupinaData = await sRes.json();
		return skupinaData.data;
	};

	const fetchOsebe = async () => {
		const oRes = await fetch(`${PUBLIC_BASE_STRAPI_URL}/api/osebas?populate=*`);
		if (!oRes.ok) {
			error(404, 'Oseba ne obstja!');
		}
		const osebaData = await oRes.json();
		return osebaData.data;
	};

	return {
		slikeONas: fetchSlike(),
		aktivnosti: fetchAktivnosti(),
		skupine: fetchSkupine(),
		osebe: fetchOsebe()
	};
};
