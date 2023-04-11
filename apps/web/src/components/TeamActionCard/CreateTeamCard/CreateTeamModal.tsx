import { useRouter } from 'next/navigation';
import { Button, Textarea, TextInput } from 'ui';
import { z } from 'zod';

import { Modal } from '@/components/Modal';

import { useTeams } from '@/hooks/useTeams';
import { useZodForm } from '@/hooks/useZodForm';
import { SCHEMA_REQUIRED_MESSAGE } from '@/lib/constants';

import type { ComponentProps } from 'react';

type CreateTeamModalProps = Omit<ComponentProps<typeof Modal>, 'title' | 'children'>;

const schema = z.object({
	name: z.string().nonempty(SCHEMA_REQUIRED_MESSAGE),
	description: z.string().default(''),
});

export const CreateTeamModal = (props: CreateTeamModalProps) => {
	const { createTeam } = useTeams();
	const router = useRouter();
	const {
		onSubmit,
		register,
		formState: { errors },
	} = useZodForm(schema, data => {
		createTeam.mutate(data, {
			onSuccess: () => {
				router.push('/teams');
			},
		});
	});

	return (
		<Modal title="Some quick details about your team" {...props}>
			<form onSubmit={onSubmit} className="flex flex-col gap-4">
				<TextInput label="Team name" error={errors.name?.message} {...register('name')} />
				<Textarea
					label="Description"
					error={errors.description?.message}
					{...register('description')}
				/>
				<Button appearance="primary" type="submit">
					Create
				</Button>
			</form>
		</Modal>
	);
};
