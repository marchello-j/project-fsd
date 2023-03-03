import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from 'shared/ui/Input/Input';

export default {
	title: 'shared/Input',
	component: Input,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = () => <Input />;

export const Primary = Template.bind({});
Primary.args = {
	placeholder: 'Type text',
	value: '123123',
};
