import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import React, { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
};

export default App;
