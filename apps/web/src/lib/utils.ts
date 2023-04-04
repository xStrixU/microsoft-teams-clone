export const getInitials = (text: string) =>
	text
		.split(' ')
		.map(word => word[0])
		.join('');
