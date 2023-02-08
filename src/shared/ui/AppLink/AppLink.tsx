import {Link, type LinkProps} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import {type FC} from 'react';

export enum AppLinkTheme {
	PIRMARY = 'primary',
	SECONDARY = 'secondary',
}

type AppLinkProps = {
	className?: string;
	theme?: AppLinkTheme;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = props => {
  const {to, className, theme = AppLinkTheme.PIRMARY, children} = props;

  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
      {children}
    </Link>
  );
};
