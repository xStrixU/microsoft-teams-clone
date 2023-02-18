'use client';

import Image from 'next/image';
import { useState } from 'react';

import { TeamActionCard } from '../TeamActionCard';
import { CreateTeamModal } from './CreateTeamModal';

import CreateTeamIcon from '~/icons/create-team.svg';
import CreateTeamCardIcon from '~/icons/create-team-card.svg';
import Avatar1 from '~/images/avatars/avatar1.png';
import Avatar2 from '~/images/avatars/avatar2.png';
import Avatar3 from '~/images/avatars/avatar3.png';

import { Button } from '@/components/ui/Button/Button';

export const CreateTeamCard = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<CreateTeamModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
			<TeamActionCard title="Create a team" icon={CreateTeamCardIcon}>
				<div className="flex items-center gap-2">
					<Image src={Avatar1} alt="first avatar" className="rounded-full" />
					<Image src={Avatar2} alt="second avatar" className="rounded-full" />
					<Image src={Avatar3} alt="third avatar" className="rounded-full" />
				</div>
				<Button
					appearance="primary"
					onClick={() => setIsModalOpen(true)}
					className="mt-5 flex items-center"
				>
					<CreateTeamIcon className="-ml-2" />
					Create team
				</Button>
			</TeamActionCard>
		</>
	);
};
