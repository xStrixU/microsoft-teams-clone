import { describe, expect, it } from 'vitest';

import { relocateUseClient } from './relocateUseClient';

describe('relocateUseClient', () => {
	it.each([
		{
			code: `import {jsx} from 'react/jsx-runtime';"use client";var t=()=>jsx("button",{children:"Foo"});export {t as a};`,
			result: `"use client";import {jsx} from 'react/jsx-runtime';var t=()=>jsx("button",{children:"Foo"});export {t as a};`,
		},
		{
			code: `import {jsx} from 'react/jsx-runtime';var t=()=>jsx("button",{children:"Foo"});'use client';export {t as a};`,
			result: `'use client';import {jsx} from 'react/jsx-runtime';var t=()=>jsx("button",{children:"Foo"});export {t as a};`,
		},
		{
			code: `import {jsx} from 'react/jsx-runtime';var t=()=>jsx("button",{children:"Foo"});"use client"export {t as a};`,
			result: `"use client"import {jsx} from 'react/jsx-runtime';var t=()=>jsx("button",{children:"Foo"});export {t as a};`,
		},
		{
			code: `import {jsx} from 'react/jsx-runtime';'use client'var t=()=>jsx("button",{children:"Foo"});export {t as a};`,
			result: `'use client'import {jsx} from 'react/jsx-runtime';var t=()=>jsx("button",{children:"Foo"});export {t as a};`,
		},
	])('relocateUseClient($code) returns $result', ({ code, result }) => {
		expect(relocateUseClient(code)).toBe(result);
	});
});
