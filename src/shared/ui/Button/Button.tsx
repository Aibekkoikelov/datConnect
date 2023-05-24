import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, MouseEventHandler } from 'react';
import cls from './Button.modules.scss';

export enum ButtonTheme {
    ClEAR = 'clear',
    OUTLINE = 'outline',
    PRIMARY = 'primary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
     className?: string;
     theme?: ButtonTheme;
     disabled? : boolean;
     additional?: string;
     mods?: Record<string, boolean>;
}
export const Button:FC<ButtonProps> = (props) => {
    const {
        className, children, theme, disabled, additional, mods, ...otherProps
    } = props;
    return (
        <button disabled={disabled} type="button" className={classNames(cls.Button, { ...mods }, [className, cls[theme], additional])} {...otherProps}>
            {children}
        </button>
    );
};
