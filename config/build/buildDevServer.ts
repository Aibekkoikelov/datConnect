import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    // функция, которая возвращает конфигурацию для webpack-dev-server
    return {
        port: options.port, // порт, на котором будет запущен webpack-dev-server
        open: true, // открывает браузер при запуске webpack-dev-server
        historyApiFallback: true, // позволяет обрабатывать маршруты на стороне клиента (SPA)
        // иначе при переходе по маршруту /about будет ошибка 404 (так как на сервере нет такого маршрута)
        hot: true, // включает HMR (Hot Module Replacement) - позволяет обновлять модули без перезагрузки страницы
    };
}
