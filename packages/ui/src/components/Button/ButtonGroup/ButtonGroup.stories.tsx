import { Button } from '../Button/Button';
import { ButtonGroup as ButtonGroupComponent } from './ButtonGroup';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	component: ButtonGroupComponent,
} satisfies Meta<typeof ButtonGroupComponent>;

type Story = StoryObj<typeof ButtonGroupComponent>;

export const ButtonGroup: Story = {
	args: {
		children: (
			<>
				<Button>A</Button>
				<Button>B</Button>
				<Button>C</Button>
			</>
		),
	},
};
