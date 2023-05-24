import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.modules.scss';

interface NavbarProps {
     className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return ( // обычные компоненты мы экспортируем именнованным вариантом(
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.CLEAR} to="/">{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.CLEAR} to="/editor">{t('Template')}</AppLink>
            </div>
        </div>
    );
};
