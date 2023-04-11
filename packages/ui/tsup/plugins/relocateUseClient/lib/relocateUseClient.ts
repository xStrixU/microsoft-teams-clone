const USE_CLIENT_DIRECTIVE_REGEX = /('|")use client('|");?/;

export const relocateUseClient = (code: string) => {
	const useClientMatch = USE_CLIENT_DIRECTIVE_REGEX.exec(code);

	if (useClientMatch) {
		const useClientDirective = useClientMatch[0];
		const useClientLength = useClientDirective.length;
		const useClientIndex = useClientMatch.index;

		return (
			useClientDirective +
			code.slice(0, useClientIndex) +
			code.slice(useClientIndex + useClientLength)
		);
	}

	return code;
};
