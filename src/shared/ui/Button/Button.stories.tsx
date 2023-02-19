import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
	children: 'Text',
	theme: ButtonTheme.CLEAR,
};

export const Outlie = Template.bind({});
Outlie.args = {
	children: 'Text',
	theme: ButtonTheme.CLEAR,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
	children: 'Text',
	theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
	children: 'Text',
	theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
	children: 'Text',
	theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.L,
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.XL,
};
