import type { components } from 'openapi-types';
import type React from 'react';

export type User = components['schemas']['UserDto'];
export type FoundUser = components['schemas']['FoundUserDto'];
export type Team = components['schemas']['TeamDto'];
export type Conversation = components['schemas']['ConversationDto'];

export type SVGComponent = React.ComponentType<React.ComponentProps<'svg'>>;

export type Params<T extends string> = {
	readonly [K in T]: string;
};

export type CatchAllParams<T extends string> = {
	readonly [K in T]: string[];
};

export type OptionalCatchAllParams<T extends string> = {
	readonly [K in T]?: string[];
};

export type QueryParam = string | readonly string[] | undefined;

export type SearchParams<T extends string> = {
	readonly [K in T]?: QueryParam;
};
