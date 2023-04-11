import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-styling',
			options: {
				postCss: true,
			},
		},
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: config => {
		// TODO: remove ts-ignores

		// @ts-ignore
		const fileLoaderRule = config.module?.rules?.find(({ test }) => test.test('.svg'));

		if (fileLoaderRule) {
			// @ts-ignore
			fileLoaderRule.exclude = /\.svg$/;
		}

		config.module?.rules?.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		if (config.resolve) {
			config.resolve.plugins = [new TsconfigPathsPlugin()];
		}

		return config;
	},
};

export default config;
