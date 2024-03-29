import Link from 'next/link';
import { Button } from 'ui';

import CreateTeamIcon from '@/assets/icons/create-team.svg';

export const TeamsListHeader = () => (
	<header className="flex justify-between py-4 px-6">
		<h1 className="text-xl font-bold text-neutral-foreground">Teams</h1>
		<Button as={Link} href="/teams/join-or-create">
			<CreateTeamIcon className="-ml-2" />
			Join or create team
		</Button>
	</header>
);
