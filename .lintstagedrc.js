module.exports = {
	'*.{ts,tsx}': [() => 'pnpm lint:fix'],
	'*.{json,css}': ['pnpm prettier -w'],
};
