import {type FC} from 'react';
import {type ButtonHTMLAttributes} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
  OUTLINE = 'outline',
}

type ButtonProps = {
	className?: string;
	theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = props => {
  const {className, children, theme, ...otherProps} = props;
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  );
};
