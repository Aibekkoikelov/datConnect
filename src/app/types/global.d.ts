declare module '*.scss' {
    interface IClassNames { // данный интерфейс позволяет нам работать с css модулями
        [className: string]: string // в качестве ключа мы указываем название класса, а в качестве значения - строку
    }
    const classNames: IClassNames;
    export = classNames;
}
// глобаные декларации позволяют нам работать с переменными, которые не имеют типа
declare module '*.svg' { // типизация SVG файлов
    import React from 'react';

   const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;

}// глобальная декларация позволяет нам работать с svg файлами как с модулями
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare const __IS_DEV__: boolean; // глобальная декларация позволяет нам работать с переменными, которые не имеют типа
declare const SUPABASE_KEY: string; // глобальная декларация позволяет нам работать с переменными, которые не имеют типа
