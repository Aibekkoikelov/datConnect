import { classNames } from './classNames';

// чтобы работать с jest необходимо произвести следующие шаги
// 1. установить jest в проект npm i jest -D
// 2. создать файл jest.config.js
// 3. добавить в package.json скрипт "unit": "jest --config ./config/jest/jest.config.ts"
// 4. создать файл с тестами
// 5. устанавливаем типы npm i --save-dev @types/jest иначе не понимает как работать с ts
// 6. в eslint добавляем в env jest: true иначе он не понимает что такое describe и it
// 7. npm install --save-dev @babel/preset-typescript  работа с ts в jest
// 8.  в babel конфиге добавляем в presets "@babel/preset-typescript"
describe('className', () => { // describe - группировка тестов
    test('`with only first param', () => { // test - тест
        expect(classNames('someClass')).toBe('someClass'); // expect - ожидание результата
    });
    test('`with additional class', () => { // test - тест
        expect(classNames('someClass', {}, ['hello', 'hi'])).toBe('someClass hello hi'); // expect - ожидание результата
    });
    test('`with mods', () => { // test - тест
        expect(classNames('someClass', { hovered: true })).toBe('someClass hovered'); // expect - ожидание результата
    });
    test('`with mods false', () => { // test - тест
        expect(classNames('someClass', { hovered: true, scrollable: false })).toBe('someClass hovered'); // expect - ожидание результата
    });
});
