import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';
import 'shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ThemeProvider>
            {' '}
            {/* // провайдер для изменения темы */}
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
