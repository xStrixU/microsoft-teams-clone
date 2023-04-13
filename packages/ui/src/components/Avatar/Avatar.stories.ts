import { Avatar } from './Avatar';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	component: Avatar,
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const WithName: Story = {
	args: {
		name: 'Alex Smith',
	},
};

export const WithImage: Story = {
	args: {
		image: 'https://bit.ly/ryan-florence',
		alt: 'Ryan Florence',
	},
};

export const WithBadge: Story = {
	args: {
		name: 'Alex Smith',
		badge: { status: 'available' },
	},
};

export const DifferentSize: Story = {
	args: {
		size: 64,
		name: 'Alex Smith',
		badge: { status: 'available' },
	},
};
