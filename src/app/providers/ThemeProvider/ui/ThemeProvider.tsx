import React, { FC, useMemo } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const ThemeProvider: FC = ({ children }) => {
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT; // вытаскиеваем начальное из локал стораджа
    // или если там ничего нет то ставим по умолчанию светлую тему
    const [theme, setTheme] = React.useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => (// мы мемотзтровали потому что при каждом рендере будет создаваться новый объектё
            {
                theme, // передаем тему в контексте
                setTheme, // и метод который будет менять тему
            }),
        [theme],
    );
    return (
        <ThemeContext.Provider value={defaultProps}>
            {' '}
            {/* передаем в контекст объект с темой и методом */}
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
