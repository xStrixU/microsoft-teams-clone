import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	component: Button,
	args: {
		children: 'Button',
	},
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Rounded: Story = {
	args: {
		shape: 'rounded',
	},
};

export const Circular: Story = {
	args: {
		shape: 'circular',
	},
};

export const Square: Story = {
	args: {
		shape: 'square',
	},
};

export const Primary: Story = {
	args: {
		appearance: 'primary',
	},
};
