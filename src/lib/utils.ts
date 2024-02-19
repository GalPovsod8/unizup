export function FormatDate(dateString: string): string {
	const dateObj = new Date(dateString);
	return `${dateObj.getDate()}.${dateObj.getMonth() + 1}.${dateObj.getFullYear()}`;
}

export function FormatTime(time: string): string {
	return time.substring(0, 5);
}

export function ShortenTag(tag: string): string {
	switch (tag) {
		case 'Duhovno':
			return 'Dh.';

		case 'Dogodek':
			return 'Dg.';

		case 'Novica':
			return 'Nv.';

		default:
			return 'Nv.';
	}
}
