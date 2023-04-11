import { Button, TextInput } from 'ui';

import { TeamActionCard } from './TeamActionCard';

import JoinCodeCardIcon from '@/assets/icons/join-code-card.svg';

export const JoinTeamByCodeCard = () => (
	<TeamActionCard title="Join a team with a code" icon={JoinCodeCardIcon}>
		<div className="flex flex-col items-center gap-5">
			<TextInput placeholder="Enter code" />
			<Button fontBold disabled>
				Join team
			</Button>
		</div>
	</TeamActionCard>
);
