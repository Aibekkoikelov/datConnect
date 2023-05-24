import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, useEffect, useMemo,
} from 'react';
import 'quill/dist/quill.snow.css';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { quillConfig } from 'shared/config/quill/quill';
import { Preview } from 'widgets/Preview';
import cls from './Editor.modules.scss';

interface EditorProps {
     className?: string;
     isOpen?: boolean;
     onClose?: () => void;
     body?: string;
     setBody?: (body: string) => void;
    subject?: string;
    setSubject?: (subject: string) => void;
    save: () => void;
}
export const Editor = (props: EditorProps) => {
    const {
        className, isOpen, onClose, body, setBody, setSubject, subject, save,
    } = props;

    const mods = {
        [cls.opened]: isOpen,
    };
    const { quill, quillRef, Quill } = quillConfig();
    const defaultValue = useMemo(
        () => {
            return {
                subject: 'Load from {{origin}} to {{dest}}',
                body: '<p>Hello, team!</p><p><br></p><p>Can we get more info pls about the load by this ref</p>'
            + '<p>number&nbsp;{{ref}}&nbsp;and what is the best rate?</p><p><br></p><p>MC: 00000</p>'
            + '<p>Dispatch Team at&nbsp;<strong>Carrierify</strong></p><p>Alex Daniel</p><p>Number: +1234567890123</p>',
            };
        },
        [],
    );
    const loadDefault = () => {
        quill.root.innerHTML = defaultValue.body;
        setSubject(defaultValue.subject);
    };
    const subjectChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSubject(e.target.value);
    };

    useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                setBody(quill.root.innerHTML);
            });
            quill.on('editor-change', () => {
                setBody(quill.root.innerHTML);
            });
        }
    }, [quill, Quill]);
    const saveHandler = () => {
        save();
        quill.root.innerHTML = '';
    };

    return (
        <div className={classNames(cls.Editor, mods)}>
            <div className={classNames(cls.editor, {})}>
                <span className={cls.title}>Subject</span>
                <div className={classNames(cls.add_block)}>
                    <Input value={subject} onChange={subjectChangeHandler} className={cls.inputWidth} theme={InputTheme.OUTLINE} />
                    <Button onClick={loadDefault} className={classNames('', {}, ['hover'])} theme={ButtonTheme.PRIMARY}> Default Value</Button>
                </div>
                <span className={cls.title}>Body</span>
                <div ref={quillRef} />
            </div>
            <div className={classNames(cls.preview_wrapper, {}, [])}>
                <Preview subject={subject} body={body} />
                <Button onClick={saveHandler} className={cls.save_btn} theme={ButtonTheme.PRIMARY}>Save</Button>
            </div>

        </div>
    );
};
