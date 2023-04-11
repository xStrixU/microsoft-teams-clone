import svgr from 'esbuild-plugin-svgr';
import { defineConfig } from 'tsup';

import { relocateUseClientPlugin } from './plugins/relocateUseClient';

export default defineConfig(() => ({
	clean: true,
	dts: true,
	entry: ['src/index.ts', 'src/**/*.tsx', '!src/**/*.stories.@(ts|tsx)'],
	esbuildPlugins: [relocateUseClientPlugin, svgr()],
	external: ['react'],
	format: ['esm'],
	minifyWhitespace: true,
	splitting: true,
}));
