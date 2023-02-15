'use client';

import { cloneElement, Fragment } from 'react';

import { useDropdownMenuContext } from './DropdownMenu.context';

import type { ReactElement } from 'react';

type DropdownMenuTargetProps = Readonly<{
	children: ReactElement;
}>;

export const DropdownMenuTarget = ({ children }: DropdownMenuTargetProps) => {
	const { toggle } = useDropdownMenuContext();

	if (children.type === Fragment) {
		throw new Error('children cannot be React.Fragment');
	}

	return cloneElement(children, {
		onClick: toggle,
	});
};
