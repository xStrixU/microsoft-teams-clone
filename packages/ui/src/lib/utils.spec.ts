import { describe, expect, it } from 'vitest';

import { getInitials } from './utils';

describe('utils', () => {
	describe('initials', () => {
		it.each([
			{ fullName: 'Foo', initials: 'F' },
			{ fullName: 'Foo bar', initials: 'Fb' },
			{ fullName: 'Foo bar Baz', initials: 'FbB' },
			{ fullName: 'Lorem Ipsum', initials: 'LI' },
			{ fullName: 'lorem Ipsum', initials: 'lI' },
		])('getInitials($fullName) returns $initials', ({ fullName, initials }) => {
			expect(getInitials(fullName)).toBe(initials);
		});
	});
});
