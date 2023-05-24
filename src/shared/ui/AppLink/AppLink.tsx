import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.modules.scss';

export enum AppLinkTheme { // мы указываем сколько вариантов у нас есть
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    CLEAR = 'clear'
}
interface AppLinkProps extends LinkProps { // указываем что можем передать тему ввиде строки типа primary или secondary
     className?: string;
     theme?: AppLinkTheme
}
export const AppLink:FC<AppLinkProps> = (props) => { // обычные компоненты мы экспортируем именнованным варианто
    const {
        children,
        className,
        theme = AppLinkTheme.PRIMARY,
        to,
        ...otherProps
    } = props; // здесь мы деструктуризируем пропсы в котором есть дефолтный className и тема и то что должно приходить для Link это "to"

    return (
        <Link
            to={to}
            className={classNames(
                cls.AppLink,
                {},
                [className, cls[theme]],
            )} // через cls[theme] мы просто добавляем класс в зависимости от темы который прописан в css модулях
            {...otherProps}
        >
            {children}
        </Link>
    );
};
