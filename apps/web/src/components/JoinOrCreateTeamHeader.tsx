import Link from 'next/link';

export const JoinOrCreateTeamHeader = () => (
	<header className="flex flex-col gap-2">
		<Link href="/teams" className="text-neutral-foreground hover:text-link-hover">
			Back
		</Link>
		<h1 className="text-2xl font-semibold text-neutral-foreground">Join or create a team</h1>
	</header>
);
