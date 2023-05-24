import { createContext } from 'react';

export enum Theme{
    LIGHT = 'light',
    DARK = 'dark'
}
export interface ThemeContextProps{ // типизировали чтобы было понятно что в контексте
    theme?: Theme; // здесь мы передали тему
    setTheme?: (theme: Theme) => void; // здесь мы передали функцию которая принимает тему и ничего не возвращает
}
export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme'; // ключ для локального хранилища чтобы не ошибится в написании
