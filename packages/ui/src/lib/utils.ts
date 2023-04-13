export const getInitials = (fullName: string) =>
	fullName
		.split(' ')
		.map(name => name[0])
		.join('');
