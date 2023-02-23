import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider/config/StateShema';
import { getCounter } from './getCounter';

describe('getCounter', () => {
	test('should return counter value', () => {
		const state: DeepPartial<StateShema> = {
			counter: { value: 10 },
		};
		expect(getCounter(state as StateShema)).toEqual({ value: 10 });
	});
});
