import { lazy } from 'react';

export const ProfilePageAsync = lazy(
	async () =>
		new Promise((resolve) => {
			// @ts-expect-error
			// ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
			setTimeout(() => resolve(import('./ProfilePage')), 1500);
		})
);
