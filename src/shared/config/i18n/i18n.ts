import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n

    .use(Backend) // это плагин для загрузки языковых файлов с сервера
    .use(LanguageDetector) // это плагин для определения языка браузера
    .use(initReactI18next) // это плагин для реакта
    .init({
        fallbackLng: 'ru', // язык по умолчанию
        debug: __IS_DEV__, // включаем режим дебага для логов в консоли браузера

        interpolation: { // это опции для интерполяции строк
            escapeValue: false, // не надо экранировать строки для реакта, он это делает сам
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // это путь до папки с языковыми файлами
        },
    });

export default i18n;
