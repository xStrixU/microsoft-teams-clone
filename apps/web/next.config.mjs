import nextIntlPlugin from 'next-intl/plugin';

const withNextIntl = nextIntlPlugin();

export default withNextIntl({
	experimental: {
		appDir: true,
	},
});
