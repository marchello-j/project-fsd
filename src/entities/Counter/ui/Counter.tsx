import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../Modal/selectors/getCounterValue/getCounterValue';
import { CounterActions as counterActions } from '../Modal/slice/counterSlice';

export const Counter = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const counterValue = useSelector(getCounterValue);
	const increment = () => {
		dispatch(counterActions.increment());
	};

	const decrement = () => {
		dispatch(counterActions.decrement());
	};
	return (
		<div className=''>
			<h1 data-testid='value-title'>{counterValue}</h1>
			<Button data-testid='increment-btn' onClick={increment}>
				{t('increment')}
			</Button>
			<Button data-testid='decrement-btn' onClick={decrement}>
				{t('decrement')}
			</Button>
		</div>
	);
};
