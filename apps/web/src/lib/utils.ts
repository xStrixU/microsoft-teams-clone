export const hellip = (text: string, maxLength: number) =>
	text.length > maxLength ? text.slice(0, maxLength - 1) + '…' : text;
