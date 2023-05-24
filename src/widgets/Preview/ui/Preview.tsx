import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Preview.modules.scss';

interface PreviewProps {
     className?: string;
     subject?: string;
     body?: string;
}
export const Preview = (props: PreviewProps) => {
    const { className, subject, body } = props;
    return (
        <div className={classNames(cls.Preview, {}, [className])}>
            <p className={classNames(cls.title, {}, [cls.flex, cls.center, cls.header])}>Receiver will get</p>
            <div className={classNames(cls.title)}>Subject:</div>
            <div className={cls.preview_subject}>{subject}</div>
            <div className={classNames(cls.title)}>Body</div>
            <div className={classNames(cls.preview, {}, ['ql-editor'])} dangerouslySetInnerHTML={{ __html: body }}></div>
        </div>
    );
};
