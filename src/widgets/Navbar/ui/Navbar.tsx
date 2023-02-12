/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

type NavbarProps = {
	className?: string;
};

export const Navbar = ({ className }: NavbarProps) => (
	<div className={classNames(cls.navbar)}>
		<div className={classNames(cls.links)}></div>
		<AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
			Главная
		</AppLink>
		<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
			О сайте
		</AppLink>
	</div>
);
