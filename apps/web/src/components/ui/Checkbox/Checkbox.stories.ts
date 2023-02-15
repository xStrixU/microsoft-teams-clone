import { Checkbox } from './Checkbox';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	component: Checkbox,
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const WithLabel: Story = {
	args: {
		label: 'Lorem ipsum',
	},
};
