import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

type NavbarProps = {
	className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.navbar)}>
			<div className={classNames(cls.links)}></div>/
		</div>
	);
};
