import { twMerge } from 'tailwind-merge';

const sizes = {
	small: 'h-7 min-w-[64px] text-xs font-normal',
	medium: 'h-9 min-w-[96px] text-sm',
	large: 'h-11 min-w-[96px] text-base',
} as const;

const shapes = {
	rounded: 'rounded',
	circular: 'rounded-full',
	square: 'rounded-none',
} as const;

const appearances = {
	default:
		'border border-neutral-stroke-default bg-neutral-background-default text-neutral-foreground hover:bg-neutral-background-hover hover:border-neutral-stroke-hover active:bg-neutral-background-pressed active:border-neutral-stroke-pressed',
	primary: 'text-white bg-brand-default hover:bg-brand-hover active:bg-brand-pressed',
} as const;

type ButtonProps = Readonly<{
	size?: keyof typeof sizes;
	shape?: keyof typeof shapes;
	appearance?: keyof typeof appearances;
	fill?: boolean;
}> &
	JSX.IntrinsicElements['button'];

export const Button = ({
	size = 'medium',
	shape = 'rounded',
	appearance = 'default',
	fill = false,
	className,
	...props
}: ButtonProps) => (
	<button
		type="button"
		className={twMerge(
			'font-semibold transition-colors',
			sizes[size],
			shapes[shape],
			appearances[appearance],
			fill && 'w-full',
			className
		)}
		{...props}
	/>
);
