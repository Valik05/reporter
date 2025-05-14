import './input.css';
import Title from '../Title/Title';
import classNames from "classnames";
import { forwardRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import type { InputProps } from '../../../models/Input/Input';

const Input = forwardRef(({ name, id, label, options, children, classes, ...inputProps }: InputProps, ref: React.LegacyRef<HTMLLabelElement> | undefined) => {
    const { control, formState: { defaultValues } } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            rules={options}
            defaultValue={defaultValues && defaultValues[name]}
            render={({ field, fieldState: { error } }) => (
                <article className={classNames('input-content', { error }, classes)}>
                    {label && <label className={classNames('input-label')} htmlFor={id} ref={ref}>{label}</label>}
                    <input {...field} id={id} {...inputProps} />
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

export default Input;