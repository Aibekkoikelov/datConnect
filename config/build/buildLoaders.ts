import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoader = { // babel-loader - позволяет работать с современным синтаксисом js
        test: /\.(js|jsx|tsx)$/, // test - регулярное выражение, которое ищет все файлы с расширением .js или .jsx
        exclude: /node_modules/, // exclude - исключаем папку node_modules из обработки
        use: {
            loader: 'babel-loader',
            // use - указываем, какой лоадер мы будем использовать для обработки файлов с расширением .js или .jsx
            options: {
                presets: ['@babel/preset-env'],
                // presets - настройки для babel, в данном случае - пресет для совместимости со старыми браузерами
                plugins: [
                    ['i18next-extract', // плагин для извлечения строк для перевода
                        {
                            locales: ['en', 'ru'], // указываем, какие языки будем поддерживать
                            keyAsDefaultValue: true,
                            // указываем, что ключи будут использоваться в качестве значений по умолчанию
                        }], // плагин для извлечения строк для перевода (это был пример)
                ],
            },
        },
    };

    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/, // test - регулярное выражение, которое ищет все файлы с расширением .TemplateEditorPage.tsx или .ts
        use: 'ts-loader', // use - указываем, какой лоадер мы будем использовать для обработки файлов с расширением .TemplateEditorPage.tsx или .ts
        exclude: /node_modules/, // exclude - исключаем папку node_modules из обработки
    };
    const cssLoader: webpack.RuleSetRule = {
        test: /\.s?[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // в зависимости от режима сборки используем либо style-loader, либо MiniCssExtractPlugin.loader
            // style-loader - добавляет стили в DOM-дерево при помощи тега <style>
            // MiniCssExtractPlugin.loader - создает отдельный css файл
            {
                loader: 'css-loader', // данная настройка позволяет работать с css модулями
                options: {
                    modules: { // включаем css модули
                        auto: (resourcePath: string) => Boolean(resourcePath.includes('.modules.')),
                        // включаем css модули только для файлов, в названии которых есть .modules.
                        localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64]', // здесь мы генерируем название селекторов
                        // в Dev режиме в названии класса будет такой путь к файлу и название класса
                        // например: src_components_App_App__title__2xQrj
                        // в Prod режиме будет хэш
                    },

                },

            },
            'sass-loader', // данный loader позволяет работать с sass/scss файлами
        ],
    };
    return [ // Порядок важен! Сначала обрабатывается последний лоадер, потом предпоследний и т.д.
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,

    ];
}
