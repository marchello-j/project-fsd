import { CounterShema } from 'entities/Counter/Modal/types/CounterShema';
import { UserSchema } from 'entities/User';
import { loginSchema } from 'features/AuthByUsername';

export interface StateSchema {
	counter: CounterShema;
	user: UserSchema;
	loginForm?: loginSchema;
}
