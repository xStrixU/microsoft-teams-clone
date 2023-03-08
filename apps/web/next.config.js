/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		typedRoutes: true,
		fontLoaders: [
			{
				loader: 'next/font/google',
				options: { subsets: ['latin', 'latin-ext'] },
			},
		],
	},
	redirects: async () => [
		{
			source: '/',
			destination: '/teams',
			permanent: false,
		},
	],
	webpack: config => {
		config.module.rules.push({
			test: /\.svg$/,
			use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
		});

		return config;
	},
};

module.exports = nextConfig;
