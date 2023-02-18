import { useRouter } from 'next/navigation';
import * as yup from 'yup';

import { Modal } from '@/components/Modal';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Inputs/Input/Input';
import { Textarea } from '@/components/ui/Inputs/Textarea/Textarea';

import { useTeams } from '@/hooks/useTeams';
import { useYupForm } from '@/hooks/useYupForm';
import { SCHEMA_REQUIRED_MESSAGE } from '@/lib/constants';

import type { ComponentProps } from 'react';

type CreateTeamModalProps = Omit<ComponentProps<typeof Modal>, 'title' | 'children'>;

const schema = yup
	.object({
		name: yup.string().required(SCHEMA_REQUIRED_MESSAGE),
		description: yup.string().default(''),
	})
	.required();

export const CreateTeamModal = (props: CreateTeamModalProps) => {
	const { createTeam } = useTeams();
	const router = useRouter();
	const { onSubmit, register } = useYupForm(schema, data => {
		createTeam.mutate(data, {
			onSuccess: () => {
				router.push('/teams');
			},
		});
	});

	return (
		<Modal title="Some quick details about your team" {...props}>
			<form onSubmit={onSubmit} className="flex flex-col gap-4">
				<Input label="Team name" {...register('name')} />
				<Textarea label="Description" {...register('description')} />
				<Button appearance="primary" type="submit" className="w-fit">
					Create
				</Button>
			</form>
		</Modal>
	);
};
