import { describe, expect, it } from 'vitest';

import { hellip } from './utils';

describe('utils', () => {
	describe('hellip', () => {
		it.each([
			{ text: 'Lorem ipsum', maxLength: 20, expected: 'Lorem ipsum' },
			{ text: 'Lorem ipsum', maxLength: 10, expected: 'Lorem ips…' },
		])('hellip($text, $maxLength) returns $expected', ({ text, maxLength, expected }) => {
			expect(hellip(text, maxLength)).toBe(expected);
		});
	});
});
