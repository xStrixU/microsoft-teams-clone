import path from 'node:path';
import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '..', 'src'),
		},
	},
	test: {
		include: ['**/*.e2e-spec.ts'],
	},
	plugins: [swc.vite()],
});
