import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../ui/ThemeContext';

 interface UseThemeResult { // типизируем возврат хука
    theme: Theme; // саму тему
    toggleTheme: () => void; // и метод который ничего не принимает и ничего не возвращает
 }

export function useTheme(): UseThemeResult { // хук необходим чтобы в каждом компоеннте не вытаскивать context
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => { // метод для изменения темы
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT; // сохраняем в переменной тему
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme); // и не забываем в локальное хранилище записать
        setTheme(newTheme);
    };
    return {
        theme,
        toggleTheme,
    };
}
