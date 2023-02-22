import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Modal } from 'widgets/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';

type NavbarProps = {
	className?: string;
};

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
					{t('Войти')}
				</Button>
			</div>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				{t(
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.'
				)}
			</Modal>
		</div>
	);
};
