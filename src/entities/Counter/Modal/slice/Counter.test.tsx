import { CounterReducer, CounterActions } from './counterSlice';
import { CounterShema } from '../types/CounterShema';

describe('counterSlice.test', () => {
	test('decrement', () => {
		const state: CounterShema = { value: 10 };

		expect(CounterReducer(state, CounterActions.decrement())).toEqual({ value: 9 });
	});
	test('increment', () => {
		const state: CounterShema = { value: 10 };

		expect(CounterReducer(state, CounterActions.increment())).toEqual({ value: 11 });
	});

	test('should work with empty state', () => {
		expect(CounterReducer(undefined, CounterActions.increment())).toEqual({ value: 1 });
	});
});
