import { relocateUseClient } from './lib/relocateUseClient';

import type { Plugin } from 'esbuild';

export const relocateUseClientPlugin: Plugin = {
	name: 'relocate use-client',
	setup(build) {
		build.onEnd(result => {
			result.outputFiles?.forEach(outputFile => {
				const relocatedUseClientCode = relocateUseClient(outputFile.text);

				outputFile.contents = Buffer.from(relocatedUseClientCode);
			});
		});
	},
};
