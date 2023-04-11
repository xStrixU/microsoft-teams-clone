export type OverridableProps<TTag extends React.ElementType> = { as?: TTag } & Omit<
	React.ComponentPropsWithRef<TTag>,
	'as'
>;
