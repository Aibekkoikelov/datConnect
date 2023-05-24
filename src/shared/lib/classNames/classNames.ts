type Mods = Record<string, boolean | string> // Record - это встроенный тип, который позволяет нам создавать объекты с определенной структурой
export function classNames(cls:string, mods: Mods = {}, additional:string[] = []): string { // Указываем дефолтные значения для аргументов
    const modsArr = Object.entries(mods).filter(([, value]) => value).map(([key]) => key);
    return [cls, ...additional.filter(Boolean), ...modsArr].join(' ');
    // в additional.filter(Boolean) мы фильтруем массив, чтобы убрать пустые строки и undefined
}
// данная функция принимает название класса, модификаторы и дополнительные классы
// и возвращает строку с классами которые мы передали
