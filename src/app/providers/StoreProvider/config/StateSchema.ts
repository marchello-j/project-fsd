import { CounterShema } from 'entities/Counter/Modal/types/CounterShema';
import { UserSchema } from 'entities/User';

export interface StateSchema {
	counter: CounterShema;
	user: UserSchema;
}
