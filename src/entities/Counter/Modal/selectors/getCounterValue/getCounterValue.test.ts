import { DeepPartial } from '@reduxjs/toolkit';
import { StateShema } from 'app/providers/StoreProvider/config/StateShema';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
	test('', () => {
		const state: DeepPartial<StateShema> = {
			counter: { value: 10 },
		};
		expect(getCounterValue(state as StateShema)).toEqual(10);
	});
});
