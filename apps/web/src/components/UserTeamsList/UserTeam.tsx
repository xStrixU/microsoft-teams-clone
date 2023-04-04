import type { Team } from '@/types';

type UserTeamProps = Readonly<{
	team: Team;
}>;

export const UserTeam = ({ team: { name } }: UserTeamProps) => (
	<article className="flex h-56 w-72 select-none flex-col items-center rounded border border-neutral-stroke-default bg-neutral-background-default p-4 shadow-md hover:cursor-pointer hover:bg-neutral-background-hover">
		<div className="mt-8 flex h-20 w-20 shrink-0 items-center justify-center rounded bg-blue-500 text-xl text-white">
			{name.slice(0, 2)}
		</div>
		<p className="mt-6 text-center font-bold text-neutral-foreground">{name}</p>
	</article>
);
