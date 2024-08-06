import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const { consent } = await request.json();
	cookies.set('consent', consent ? 'true' : 'false', {
		path: '/',
		maxAge: 60 * 60 * 24 * 365,
		secure: true,
		sameSite: 'lax'
	});
	return new Response();
};
