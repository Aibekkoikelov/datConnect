import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC } from 'react';
import { Preview } from 'widgets/Preview';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './TemplateItem.modules.scss';

interface TemplateItemProps {
     className?: string;
     subject?: string;
     body?: string;
     created_at?: Date;
     id?: number;
     deleteTemplate?: (id: number) => void;
     editTemplate?: (id: number) => void;
}

export const TemplateItem:FC<TemplateItemProps> = (props) => {
    const {
        className, created_at, id, body, subject,
        deleteTemplate, editTemplate,
    } = props;

    const editHandler = (id:number) => {
        editTemplate(id);
    };

    const deleteTemplateHandler = (id:number) => {
        deleteTemplate(id);
    };

    return (
        <div className={classNames(cls.TemplateItem, {}, [className])}>
            <Preview subject={subject} body={body} className={cls.TemplateItem_preview} />
            <div className={cls.btn_group}>
                <Button onClick={() => editHandler(id)} theme={ButtonTheme.PRIMARY}>Edit</Button>
                <Button onClick={() => deleteTemplateHandler(id)} theme={ButtonTheme.PRIMARY}>Delete</Button>
            </div>

        </div>
    );
};
