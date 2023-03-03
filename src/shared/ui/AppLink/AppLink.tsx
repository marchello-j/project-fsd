import {Link, type LinkProps} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import {memo, ReactNode} from 'react';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
  RED ='red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
  const {to, className, theme = AppLinkTheme.PRIMARY, children} = props;

  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
      {children}
    </Link>
  );
});
