import type { ReactNode } from 'react';

type ButtonGroupProps = Readonly<{
	children: ReactNode;
}>;

export const ButtonGroup = ({ children }: ButtonGroupProps) => (
	<div className="ui-flex [&>*:first-of-type:not(:last-of-type)]:ui-rounded-r-none [&>*:not(:first-of-type):last-of-type]:ui-rounded-l-none [&>*:not(:first-of-type):not(:last-of-type)]:ui-rounded-none">
		{children}
	</div>
);
