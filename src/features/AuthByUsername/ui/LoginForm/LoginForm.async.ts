import { lazy } from 'react';
import { LoginFormProps } from './LoginForm';
import { FC } from 'react';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
	() =>
		new Promise((resolve) => {
			// ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
			setTimeout(() => resolve(import('./LoginForm')), 1500);
		})
);
