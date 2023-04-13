import { forwardRef, useId } from 'react';

import { InputAppearance, ROOT_STYLES } from '../InputAppearance';

import { uiTwMerge } from '@/lib/uiTwMerge';

import type { ComponentProps, ReactNode } from 'react';

const sizes: Record<Exclude<InputProps['size'], undefined>, string> = {
	small: 'ui-h-7 ui-px-1.5',
	medium: 'ui-h-9 ui-px-2.5',
	large: 'ui-h-11 ui-px-3',
};

type InputProps = Readonly<{
	contentBefore?: ReactNode;
	contentAfter?: ReactNode;
}> &
	Omit<ComponentProps<typeof InputAppearance>, 'id' | 'children'> &
	Omit<JSX.IntrinsicElements['input'], 'size'>;

export const TextInput = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			label,
			required,
			fill,
			size = 'medium',
			error,
			contentBefore,
			contentAfter,
			placeholder,
			...props
		},
		ref
	) => {
		const id = useId();

		return (
			<InputAppearance
				id={id}
				label={label}
				required={required}
				fill={fill}
				size={size}
				error={error}
			>
				{contentBefore && (
					<div className="ui-ml-2 ui-flex ui-text-neutral-stroke-accessible-default">
						{contentBefore}
					</div>
				)}
				<input
					ref={ref}
					id={id}
					placeholder={placeholder || label}
					required={required}
					className={uiTwMerge(ROOT_STYLES, sizes[size])}
					{...props}
				/>
				{contentAfter && (
					<div className="ui-mr-2 ui-flex ui-text-neutral-stroke-accessible-default">
						{contentAfter}
					</div>
				)}
			</InputAppearance>
		);
	}
);

TextInput.displayName = 'Input';
