import { CombinedState, EnhancedStore } from '@reduxjs/toolkit';
import { CounterShema } from 'entities/Counter/Modal/types/CounterShema';
import { UserSchema } from 'entities/User';
import { loginSchema } from 'features/AuthByUsername';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { AnyAction, Reducer } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions } from 'react-router-dom';
import { To } from 'history';

export interface StateSchema {
	counter: CounterShema;
	user: UserSchema;
	loginForm?: loginSchema;
	profile?: ProfileSchema;
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

export interface ThunkExtraArg {
	api: AxiosInstance;
	navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
}
