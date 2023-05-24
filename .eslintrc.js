module.exports = {
    env: {
        es2021: true,
        jest: true,
        browser: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: { // правила 2 - ошибка, 1 - предупреждение, 0 - отключено
        'react/jsx-indent': [2, 4], // указываем отступ в 4 пробела
        indent: ['error', 4], // указываем отступ в 4 пробела
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], // разрешаем использовать расширения .js .jsx
        'import/no-unresolved': 'off', // отключаем проверку на неустановленные пакеты
        'import/prefer-default-export': 'off', // отключаем обязательный export default
        'max-len': ['error', { code: 190, ignoreComments: true }], // максимальная длина строки
        'no-unused-vars': 'warn', // неиспользуемые переменные - предупреждение
        'import/extensions': 'off', // отключаем проверку на расширения при импорте
        quotes: ['error', 'single'], // одинарные кавычки
        'import/no-extraneous-dependencies': ['warn', { devDependencies: true }], // отключаем проверку на зависимости в devDependencies
        'react/require-default-props': 'off', // отключаем обязательные props
        'react/react-in-jsx-scope': 'off', // отключаем обязательный импорт React в jsx можно с 17 версии React
        'react/jsx-indent-props': [2, 4], // отступы в 4 пробела для props
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }], // стрелочные функции для компонентов (не для хуков)
        'react/jsx-props-no-spreading': 'warn', // отключаем запрет на использование spread оператора
        'no-shadow': 'off', // отключаем запрет на использование одинаковых имен переменных
        'react/jsx-no-bind': 'off', // отключаем запрет на использование bind в jsx
        'no-underscore-dangle': 'off', // отключаем запрет на использование _ в именах переменных
        'i18next/no-literal-string': ['warn', { markupOnly: true }],
        'react/self-closing-comp': 'off', // отключаем запрет на использование self-closing тегов
        'arrow-body-style': 'off', // отключаем запрет на использование тела стрелочной функции
        'react/jsx-boolean-value': ['warn', 'always'], // отключаем запрет на использование boolean props без значения
        'react/no-array-index-key': 'off', // отключаем запрет на использование индекса массива в качестве key
        'jsx-a11y/no-static-element-interactions': 'off', // отключаем запрет на использование статических элементов
        camelcase: ['warn', { properties: 'never' }], // отключаем проверку на camelCase

    },
    globals: {
        __IS_DEV__: true, // глобальная переменная для проверки окружения
        SUPABASE_KEY: true, // глобальная переменная для подключения к базе данных
    },
};
