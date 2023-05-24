import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode, // имеется разные виды сборки, в данном случае - разработка (production - для продакшена) в продакшн сборка будет минифицирована
        entry: paths.entry, // entry - точка входа, в данном случае - файл index.TemplateEditorPage.tsx (можем также указывать именнованный вход)  например entry: {main: path.resolve(__dirname, 'src', 'index.TemplateEditorPage.tsx'),analytics: path.resolve(__dirname, 'src', 'analytics.js')}, - в данном случае мы указываем две точки входа
        module: { // module - модули, которые мы используем в сборке
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: { // output - точка выхода, в данном случае - папка dist, в которой будет файл main.js
            filename: '[name].[contenthash].js', // [name] - имя файла, [contenthash] - хэш файла, чтобы браузер не кешировал старые версии файлов (при изменении файла - меняется хэш)
            path: paths.build, // path - путь к папке, в которой будет файл main.js (в данном случае - папка dist)
            clean: true, // clean - очищает папку dist перед каждой сборкой

        },
        plugins: buildPlugins(options), // plugins - плагины, которые мы используем в сборке
        devtool: isDev ? 'inline-source-map' : undefined, // devtool - позволяет указать, как будет отображаться код в браузере (в данном случае - в виде исходного кода)
        devServer: isDev ? buildDevServer(options) : undefined, // devServer - позволяет указать настройки для webpack-dev-server чтобы мы могли увидеть все изменения во время разработки
    };
}
