import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { FC } from 'react';

export enum AppLinkTheme {
	PIRMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const { to, className, theme = AppLinkTheme.PIRMARY, children } = props;

	return (
		<Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
			{children}
		</Link>
	);
};
