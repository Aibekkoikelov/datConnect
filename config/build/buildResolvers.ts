import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return { // resolve - нужно чтоюы webpack понимал какие файлы с каким расширением мы импортируем
        extensions: ['.tsx', '.ts', '.js'],
        // extensions -  указываем какие файлы с расширением не надо указывать
        // при импорте иначе необходимо будет указывать расширение файла например import {test} from './test.js'
        preferAbsolute: true,
        // preferAbsolute - указываем, что мы хотим использовать абсолютные
        // пути при импорте (эта настройка мы настраиваем в tsconfig раздел baseUrl и paths)
        modules: [options.paths.src, 'node_modules'], // modules - указываем в каких
        // папках искать файлы при импорте (в данном случае - в папке src и node_modules)
        mainFiles: ['index'], // mainFiles - указываем какой файл искать по умолчанию (в данном случае - index)
    };
}
