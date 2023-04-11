const defaultTheme = require('tailwindcss/defaultTheme');
const uiTailwindTheme = require('ui/tailwindTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				...uiTailwindTheme.extend.colors,
			},
			fontFamily: {
				sans: ['var(--font-noto-sans)', ...defaultTheme.fontFamily.sans],
			},
			height: {
				header: 'var(--header-height)',
				content: 'calc(100vh - var(--header-height))',
				'chat-header': 'var(--chat-header-height)',
				'chat-content': 'calc(100% - var(--chat-header-height))',
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar')({
			nocompatible: true,
		}),
	],
};
