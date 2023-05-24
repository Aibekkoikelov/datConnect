export type BuildMode = 'development' | 'production'
export interface BuildPath {
    entry: string,
    build: string,
    html: string,
    src: string

}

export interface BuildEnv {
    mode: BuildMode
    port: number

}
export interface BuildOptions {
    mode: BuildMode,
    // имеется разные виды сборки, в данном случае - разработка (production - для продакшена) в продакшн сборка будет минифицирована
    paths: BuildPath // пути к файлам
    isDev: boolean, // режим разработки
    port: number // порт, на котором будет запущен webpack-dev-server
}
