import type { ElementType } from 'react';

import type { OverridableProps } from '@/types/components';

const DEFAULT_TAG = 'a';

export const Link = <TTag extends ElementType = typeof DEFAULT_TAG>({
	as,
	...props
}: OverridableProps<TTag>) => {
	const Tag = as ?? DEFAULT_TAG;

	return (
		<Tag
			className="ui-text-link-default hover:ui-text-link-hover hover:ui-underline active:ui-text-link-pressed"
			{...props}
		/>
	);
};
