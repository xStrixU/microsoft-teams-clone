import { Button } from '../Button/Button/Button';
import { DropdownMenu as DropdownMenuComponent } from './DropdownMenu';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	component: DropdownMenuComponent,
} satisfies Meta<typeof DropdownMenuComponent>;

type Story = StoryObj<typeof DropdownMenuComponent>;

export const DropdownMenu: Story = {
	render: () => (
		<div className="ui-flex ui-justify-center">
			<DropdownMenuComponent>
				<DropdownMenuComponent.Button>
					<Button>Open</Button>
				</DropdownMenuComponent.Button>
				<DropdownMenuComponent.Items>
					<DropdownMenuComponent.Item>Foo</DropdownMenuComponent.Item>
					<DropdownMenuComponent.Item>Bar</DropdownMenuComponent.Item>
					<DropdownMenuComponent.Divider />
					<DropdownMenuComponent.Item>Baz</DropdownMenuComponent.Item>
				</DropdownMenuComponent.Items>
			</DropdownMenuComponent>
		</div>
	),
};
