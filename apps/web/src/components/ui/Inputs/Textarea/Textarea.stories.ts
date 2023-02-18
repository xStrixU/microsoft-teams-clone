import { Textarea } from './Textarea';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	component: Textarea,
	args: {
		label: 'Lorem ipsum',
	},
} as Meta<typeof Textarea>;

type Story = StoryObj<typeof Textarea>;

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
