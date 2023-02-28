import { CombinedState, EnhancedStore } from '@reduxjs/toolkit';
import { CounterShema } from 'entities/Counter/Modal/types/CounterShema';
import { UserSchema } from 'entities/User';
import { loginSchema } from 'features/AuthByUsername';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { AnyAction, Reducer } from '@reduxjs/toolkit';

export interface StateSchema {
	counter: CounterShema;
	user: UserSchema;
	loginForm?: loginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}
