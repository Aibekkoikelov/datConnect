import { classNames } from 'shared/lib/classNames/classNames';
import { InputHTMLAttributes } from 'react';
import cls from './Input.modules.scss';

export enum InputTheme {
    ClEAR = 'clear',
    OUTLINE = 'outline',
}
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
        className?: string;
        theme?: InputTheme;

}

export const Input = (props: InputProps) => {
    const { className, theme, ...otherProps } = props;
    return (
        <input id="input" className={classNames(cls.Input, {}, [className, cls[theme]])} {...otherProps} />
    );
};
