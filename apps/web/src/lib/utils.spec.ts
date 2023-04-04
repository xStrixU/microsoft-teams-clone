import { describe, expect, it } from 'vitest';

import { getInitials } from './utils';

describe('utils', () => {
	describe('initials', () => {
		it.each([
			{ text: 'Foo', initials: 'F' },
			{ text: 'Foo bar', initials: 'Fb' },
			{ text: 'Foo bar Baz', initials: 'FbB' },
			{ text: 'Lorem Ipsum', initials: 'LI' },
			{ text: 'lorem Ipsum', initials: 'lI' },
		])('getInitials($text) returns $initials', ({ text, initials }) => {
			expect(getInitials(text)).toBe(initials);
		});
	});
});
