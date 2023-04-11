import { MdAlternateEmail, MdMicNone } from 'react-icons/md';

import { TextInput } from './TextInput';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	component: TextInput,
	args: {
		label: 'Lorem ipsum',
	},
} satisfies Meta<typeof TextInput>;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {};

export const Required: Story = {
	args: {
		required: true,
	},
};

export const WithError: Story = {
	args: {
		error: 'This is an example error',
	},
};

export const WithContentBefore: Story = {
	args: {
		label: 'Email',
		contentBefore: <MdAlternateEmail />,
	},
};

export const WithContentAfter: Story = {
	args: {
		label: 'Lorem ipsum',
		contentAfter: (
			<button type="button">
				<MdMicNone size={20} />
			</button>
		),
	},
};
