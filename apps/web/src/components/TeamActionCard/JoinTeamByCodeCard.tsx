import { TeamActionCard } from './TeamActionCard';

import JoinCodeCardIcon from '~/icons/join-code-card.svg';

import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Inputs/Input/Input';

export const JoinTeamByCodeCard = () => (
	<TeamActionCard title="Join a team with a code" icon={JoinCodeCardIcon}>
		<Input placeholder="Enter code" />
		<Button className="mt-5 px-12 font-bold" disabled>
			Join team
		</Button>
	</TeamActionCard>
);
