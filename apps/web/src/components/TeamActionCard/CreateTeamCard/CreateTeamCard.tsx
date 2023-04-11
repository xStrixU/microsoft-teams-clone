'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from 'ui';

import { TeamActionCard } from '../TeamActionCard';
import { CreateTeamModal } from './CreateTeamModal';

import CreateTeamIcon from '@/assets/icons/create-team.svg';
import CreateTeamCardIcon from '@/assets/icons/create-team-card.svg';
import Avatar1 from '@/assets/images/avatars/avatar1.png';
import Avatar2 from '@/assets/images/avatars/avatar2.png';
import Avatar3 from '@/assets/images/avatars/avatar3.png';

export const CreateTeamCard = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<CreateTeamModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
			<TeamActionCard title="Create a team" icon={CreateTeamCardIcon}>
				<div className="mb-5 flex items-center gap-2">
					<Image src={Avatar1} alt="first avatar" className="rounded-full" />
					<Image src={Avatar2} alt="second avatar" className="rounded-full" />
					<Image src={Avatar3} alt="third avatar" className="rounded-full" />
				</div>
				<Button appearance="primary" onClick={() => setIsModalOpen(true)}>
					<CreateTeamIcon className="-ml-2" />
					Create team
				</Button>
			</TeamActionCard>
		</>
	);
};
