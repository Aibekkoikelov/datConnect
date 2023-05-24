import { useQuill } from 'react-quilljs';
import { formats } from 'shared/config/quill/formats';
import BlotFormatter from 'quill-blot-formatter';
import ReactQuill from 'react-quill';

const Font = ReactQuill.Quill.import('formats/font');
// We do not add Aref Ruqaa since it is the default
Font.whitelist = ['mirza', 'roboto', 'times-new-roman'];
ReactQuill.Quill.register(Font, true);
export const quillConfig = () => {
    const { quill, quillRef, Quill } = useQuill({
        modules: {
            clipboard: {
                matchVisual: false,
            },
            toolbar: [
                [{
                    size: [
                        'small', false, 'large', 'huge',
                    ],
                }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ align: 'center' }, { align: 'right' }, { align: 'justify' }],
                [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
                ['link', 'image', 'video'],
                [{
                    font: [
                        'mirza', 'roboto', 'times-new-roman',
                    ],
                }],
            ],
            blotFormatter: {
                debug: 'info',
                toggleOnLongClick: true,
            },
        },
        formats: [
            ...formats,
        ],
        theme: 'snow',
        placeholder: 'Write your text here...',
        bounds: '.app',
    });

    if (Quill && !quill) {
        Quill.register('modules/blotFormatter', BlotFormatter);
    }

    return { quill, quillRef, Quill };
};
