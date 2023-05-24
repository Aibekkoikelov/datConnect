// Описание: файл конфигурации webpack
import webpack from 'webpack';
import path from 'path';
import { BuildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/types/config';

export default (env: BuildEnv) => { // чтобы вытащить env файл нужно обернуть в функцию и передать в нее env
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const port = env.port || 3000;

    const config: webpack.Configuration = BuildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
    });
    return config; // возвращаем конфигурацию
};
// экспортируем конфигурацию
