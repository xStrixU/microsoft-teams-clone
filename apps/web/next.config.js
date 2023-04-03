/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		typedRoutes: true,
		fontLoaders: [
			{
				loader: 'next/font/google',
				options: { subsets: ['latin'] },
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
		config.externals.push({
			bufferutil: 'commonjs bufferutil',
			'utf-8-validate': 'commonjs utf-8-validate',
		});

		return config;
	},
};

module.exports = nextConfig;
