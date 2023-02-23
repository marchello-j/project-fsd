import { configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from 'entities/Counter';
import { StateShema } from './StateShema';

export function createReduxStore(initialState?: StateShema) {
    return configureStore<StateShema>({
        reducer: {
            counter: CounterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}