import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

import rootConfig from '../vitest.config';

export default defineConfig({
	...rootConfig,
	test: {
		include: ['**/*.e2e-spec.ts'],
		threads: false,
	},
	plugins: [swc.vite()],
});
