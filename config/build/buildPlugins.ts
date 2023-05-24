import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [ // plugins - плагины, которые мы используем в сборке
        new webpack.ProgressPlugin(), // плагин для отображения прогресса сборки
        new HtmlWebpackPlugin( // плагин для работы с html файлами (имеет настройки внутри себя)
            // этот плагин позволяет собрать html файл из шаблона и добавить в него собранный js файл и отправить в папку dist
            // примеры настройки плагина:
            // title: 'Hello World', - добавляет в html файл тег <title>Hello World</title>
            // filename: 'subfolder/custom_filename.html', - позволяет указать имя файла, в который будет собран html
            // template: path.resolve(__dirname, 'public', 'index.html') - позволяет указать шаблон html файла,
            // который будет использоваться при сборке
            // inject: 'body' - позволяет указать, куда будет вставляться собранный js файл (в данном случае - в конец body)
            // minify: { - позволяет минифицировать html файл (в данном случае - удаляет все пробелы) значением принимает объект с настройками
            //     collapseWhitespace: true // удаляет все пробелы
            // }
            {
                template: paths.html, // указываем шаблон html файла, который будет использоваться при сборке
            },
        ),
        new MiniCssExtractPlugin({ // данный плагин необходим чтобы css файлы не попадали в js файл, а собирались отдельно
            // также нужно указать настройки в лоадерах (см. buildLoaders.ts) там вместо style-loader используется MiniCssExtractPlugin.loader
            filename: 'css/[name].[contenthash:8].css',
            // [name] - имя файла, [contenthash] - хэш файла, чтобы браузер не кешировал
            // старые версии файлов (при изменении файла - меняется хэш)
            chunkFilename: 'css/[name].[contenthash:8].chunk.css',
            // [name] - имя файла, [contenthash] - хэш файла,
            // чтобы браузер не кешировал старые версии файлов (при изменении файла - меняется хэш)
        }),
        new webpack.DefinePlugin({ // данный плагин позволяет добавлять глобальные переменные в проект
            __IS_DEV__: JSON.stringify(isDev), // добавляем переменную isDev со значением true или false
        }),
        new webpack.HotModuleReplacementPlugin(), // данный плагин позволяет обновлять страницу без перезагрузки

    ];
}
