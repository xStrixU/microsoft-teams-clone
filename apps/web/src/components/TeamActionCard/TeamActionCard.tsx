import type { ReactNode } from 'react';

import type { SVGComponent } from '@/types';

type TeamActionCardProps = Readonly<{
	title: string;
	icon: SVGComponent;
	children: ReactNode;
}>;

export const TeamActionCard = ({ title, icon: Icon, children }: TeamActionCardProps) => (
	<article className="flex h-64 w-72 flex-col items-center justify-center rounded bg-white shadow">
		<Icon className="rounded-md" />
		<p className="mt-2 mb-4 text-lg font-bold">{title}</p>
		{children}
	</article>
);
