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

export function cleanMarkdown(content: string): string {
	return content
		.replace(/([_*~`])/g, '')
		.replace(/\[(.*?)\]\(.*?\)/g, '$1')
		.replace(/!\[.*?\]\(.*?\)/g, '')
		.replace(/#+\s?/g, '');
}

export function truncateMetaDescription(description: string): string {
	const cleanDescription = cleanMarkdown(description);

	if (cleanDescription.length > 155) {
		return cleanDescription.substring(0, 130) + '...';
	}
	return cleanDescription;
}
