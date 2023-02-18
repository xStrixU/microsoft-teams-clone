import type { components } from 'openapi-types';
import type React from 'react';

export type User = components['schemas']['UserDto'];
export type Team = components['schemas']['TeamDto'];

export type SVGComponent = React.ComponentType<React.ComponentProps<'svg'>>;

export type Params<T extends string> = {
	readonly [K in T]: string;
};

export type QueryParam = string | readonly string[] | undefined;

export type SearchParams<T extends string> = {
	readonly [K in T]?: QueryParam;
};
