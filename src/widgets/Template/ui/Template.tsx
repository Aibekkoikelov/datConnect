import { classNames } from 'shared/lib/classNames/classNames';
import { TemplateItem } from 'widgets/TemplateItem';
import { useEffect, useMemo, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Editor } from 'widgets/Editor';
import supabase from 'shared/lib/api/api';
import { useApi } from 'shared/lib/hooks/useApi';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './Template.modules.scss';

interface TemplateProps {
     className?: string;
}

export interface requestTemplate {
    body?: string;
    created_at: Date;
    id: number;
    subject?: string;
}

export const Template = ({ className }: TemplateProps) => {
    const [templates, setTemplates] = useState<Array<requestTemplate>>([]);
    const [body, setBody] = useState('');
    const [subject, setSubject] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [getAll, loading] = useApi(
        () => (supabase.from('Template').select('*')),
    );
    const [addNew, addLoading] = useApi(() => (supabase
        .from('Template')
        .insert([
            { body, subject },
        ])));
    const editTemplate = (id: number) => {
        console.log(id);
    };
    const deleteTemplate = (id: number) => {
        console.log(id);
    };

    const templateList = useMemo(() => {
        return templates.map((template, i) => (
            <TemplateItem editTemplate={editTemplate} deleteTemplate={deleteTemplate} {...template} key={i} />
        ));
    }, [templates]);

    async function getTemplate() {
        const { data, error } = await getAll();
        if (data) {
            setTemplates(data);
        }
    }
    const openEditor = async () => {
        setIsOpen(!isOpen);
    };
    const addNewTemplate = async () => {
        setIsOpen(false);
        await addNew();
        setBody('');
        setSubject('');
        getTemplate();
    };

    useEffect(() => {
        getTemplate();
    }, []);

    return (
        <div className={classNames(cls.Template, {}, [className])}>
            <Button disabled={templates.length >= 5} className={cls.btn} theme={ButtonTheme.OUTLINE} onClick={openEditor}>Add New Template</Button>
            <div className={cls.list}>
                {loading || addLoading ? <Loader /> : templateList}
            </div>
            <Editor save={addNewTemplate} body={body} setBody={setBody} subject={subject} setSubject={setSubject} isOpen={isOpen} />
        </div>
    );
};
