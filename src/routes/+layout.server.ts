import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const consentCookie = cookies.get('consent');
	let consent: boolean | null = null;
	if (consentCookie === 'true') {
		consent = true;
	} else if (consentCookie === 'false') {
		consent = false;
	}
	return { consent };
};
