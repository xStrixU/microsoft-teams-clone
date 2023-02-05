import nextIntlPlugin from 'next-intl/plugin';

const withNextIntl = nextIntlPlugin();

export default withNextIntl({
	experimental: {
		appDir: true,
		fontLoaders: [
			{
				loader: '@next/font/google',
				options: { subsets: ['latin', 'latin-ext'] },
			},
		],
	},
	webpack: config => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
});
