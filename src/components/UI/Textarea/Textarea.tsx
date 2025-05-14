import './textarea.css';
import Title from '../Title/Title';
import classNames from "classnames";
import { forwardRef, useEffect, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import type { TextareaProps } from '../../../models/Textarea/Teaxtarea';

const Textarea = forwardRef(({ name, id, label, options, children, classes, ...inputProps }: TextareaProps, ref: React.LegacyRef<HTMLDivElement> | undefined) => {
    const { control, formState: { defaultValues }, watch } = useFormContext();
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 5 + 'px';
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch(name)]);
    return (
        <Controller
            name={name}
            control={control}
            rules={options}
            defaultValue={defaultValues && defaultValues[name]}
            render={({ field, fieldState: { error } }) => (
                <article className={classNames('textarea-content', { error }, classes)} ref={ref}>
                    {label && <label className={classNames('textarea-label')} htmlFor={id}>{label}</label>}
                    <textarea {...field} id={id} {...inputProps} ref={textareaRef} />
                    {error && "message" in error &&
                        <Title
                            color="red"
                            headingLevel={6}
                            fontWeight={500}
                            text={error.message}
                        />}
                    {children}
                </article>
            )
            }
        />
    )
});

export default Textarea;