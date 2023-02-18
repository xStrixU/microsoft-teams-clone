const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				brand: {
					default: 'var(--color-brand)',
					hover: 'var(--color-brand-hover)',
					pressed: 'var(--color-brand-pressed)',
					selected: 'var(--color-brand-selected)',
				},
				link: {
					default: 'var(--color-link)',
					hover: 'var(--color-link-hover)',
					pressed: 'var(--color-link-pressed)',
					selected: 'var(--color-link-selected)',
				},
				neutral: {
					background: {
						default: 'var(--color-neutral-background)',
						hover: 'var(--color-neutral-background-hover)',
						pressed: 'var(--color-neutral-background-pressed)',
						selected: 'var(--color-neutral-background-selected)',
						disabled: 'var(--color-neutral-background-disabled)',
						5: 'var(--color-neutral-background-5)',
					},
					foreground: 'var(--color-neutral-foreground)',
					'foreground-disabled': 'var(--color-neutral-foreground-disabled)',
					'foreground-inverted': 'var(--color-neutral-foreground-inverted)',
					'foreground-2': {
						default: 'var(--color-neutral-foreground-2)',
						action: 'var(--color-neutral-foreground-2-action)',
					},
					stroke: {
						default: 'var(--color-neutral-stroke)',
						hover: 'var(--color-neutral-stroke-hover)',
						pressed: 'var(--color-neutral-stroke-pressed)',
						selected: 'var(--color-neutral-stroke-selected)',
						disabled: 'var(--color-neutral-stroke-disabled)',
						accessible: {
							default: 'var(--color-neutral-stroke-accessible)',
							hover: 'var(--color-neutral-stroke-accessible-hover)',
							pressed: 'var(--color-neutral-stroke-accessible-pressed)',
							selected: 'var(--color-neutral-stroke-accessible-selected)',
						},
					},
				},
				red: {
					foreground: 'var(--color-red-foreground)',
					border: 'var(--color-red-border)',
				},
			},
			fontFamily: {
				sans: ['var(--font-noto-sans)', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
