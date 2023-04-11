import { Link as LinkComponent } from './Link';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	component: LinkComponent,
} satisfies Meta<typeof LinkComponent>;

type Story = StoryObj<typeof LinkComponent>;

export const Link: Story = {
	args: {
		children: 'Lorem ipsum',
	},
};
