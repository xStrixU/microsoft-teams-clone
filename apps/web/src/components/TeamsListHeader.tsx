import Link from 'next/link';

import { Button } from './ui/Button/Button';

import CreateTeamIcon from '~/icons/create-team.svg';

export const TeamsListHeader = () => (
	<header className="flex justify-between py-4 px-6">
		<h1 className="text-xl font-bold text-neutral-foreground">Teams</h1>
		<Button as={Link} href="/teams/join-or-create" className="flex items-center font-bold">
			<CreateTeamIcon className="-ml-2" />
			Join or create team
		</Button>
	</header>
);
