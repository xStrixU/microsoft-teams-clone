interface TypeMap {
	props?: unknown;
	defaultAs: React.ElementType;
}

export type OverridableProps<C extends React.ElementType, M extends TypeMap> =
	| (M['props'] & ({ as?: M['defaultAs'] } & React.ComponentPropsWithRef<M['defaultAs']>))
	| (M['props'] & ({ as: C } & Omit<React.ComponentPropsWithRef<C>, 'as'>));
