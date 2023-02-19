import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('classNames', () => {
	test('Test render', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
		screen.debug();
	});
	test('Test clear theme', () => {
		render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('clear');
		screen.debug();
	});
});
