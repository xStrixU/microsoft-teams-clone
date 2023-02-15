import { PasswordInput as PasswordInputComponent } from './PasswordInput';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	component: PasswordInputComponent,
} as Meta<typeof PasswordInputComponent>;

type Story = StoryObj<typeof PasswordInputComponent>;

export const PasswordInput: Story = {
	args: {
		label: 'Lorem ipsum',
	},
};
