import { MdAlternateEmail, MdMicNone } from 'react-icons/md';

import { Input } from './Input';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	component: Input,
	args: {
		label: 'Lorem ipsum',
	},
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Required: Story = {
	args: {
		required: true,
	},
};

export const WithError: Story = {
	args: {
		error: {
			type: 'custom',
			message: 'This is an example error',
		},
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
