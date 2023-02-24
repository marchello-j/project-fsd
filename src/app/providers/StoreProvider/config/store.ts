import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { CounterReducer as counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { StateSchema } from './StateSchema';


export function createReduxStore(initialState?: StateSchema) {
	const rootRedusers: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
		loginForm: loginReducer,
	};
	return configureStore<StateSchema>({
		reducer: rootRedusers,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}
