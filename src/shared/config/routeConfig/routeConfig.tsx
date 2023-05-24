import { RouteProps } from 'react-router-dom';
import React from 'react';
import { TemplateEditorPage } from 'pages/TemplateEditorPage';

export enum AppRoute { // Список роутов приложения
    EDITOR = 'editor',
    MAIN = 'main'
}

export const routePath: Record<AppRoute, string> = { // Список путей роутов приложения
    [AppRoute.EDITOR]: '/editor',
    [AppRoute.MAIN]: '/*',
};

export const routeConfig: Record<AppRoute, RouteProps> = { // Список конфигураций роутов приложения
    [AppRoute.EDITOR]: {
        path: routePath.editor,
        element: <TemplateEditorPage />,
    },
    [AppRoute.MAIN]: {
        path: routePath.main,
        element: <TemplateEditorPage />,
    },
};
