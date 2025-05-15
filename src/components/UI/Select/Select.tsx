import './select.css';
import Title from '../Title/Title';
import classNames from "classnames";
import useOutlineClick from '../../../hooks/useOutlineClick';
import { forwardRef, useRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import type { SelectProps } from '../../../models/Select/Select';

const Select = forwardRef(
    (
        { name, id, label, options, children, classes, selectItems, placeholder }: SelectProps,
        ref: React.LegacyRef<HTMLUListElement> | undefined
    ) => {
        const [active, setActive] = useState<boolean>(false);
        const selectionRef = useRef<HTMLDivElement | null>(null);
        const { control, formState: { defaultValues } } = useFormContext();
        useOutlineClick(selectionRef, () => setActive(false), active);
        return (
            <Controller
                name={name}
                control={control}
                rules={options}
                defaultValue={defaultValues && defaultValues[name]}
                render={({ field, fieldState: { error } }) => (
                    <article className={classNames('select-content', { error }, classes)} ref={ref}>
                        {label && <label className={classNames('select-label')} htmlFor={id} >{label}</label>}
                        <article className={classNames("select-box")} ref={selectionRef}>
                            <Title
                                fontSize="0.875rem"
                                headingLevel={6}
                                fontWeight={400}
                                onClick={() => setActive(!active)}
                                className={classNames("current-item")}
                                text={`${selectItems.find(el => el.value === field.value)?.title || placeholder}`}
                            />
                            <ul className={classNames("select-item-list", { active })}>
                                {selectItems.map(({ value, title }, index) =>
                                    <label
                                        htmlFor={name + id + index}
                                        className={classNames("select-item", { chosen: value === field.value })}
                                        onClick={() => setActive(false)}
                                        key={index}
                                    >
                                        <input
                                            name={name}
                                            type="radio"
                                            id={name + id + index}
                                            onChange={() => {
                                                field.onChange(value)
                                            }}
                                            defaultChecked={value === field.value}
                                        />
                                        <Title
                                            color="black"
                                            text={`${title}`}
                                            headingLevel={6}
                                            fontWeight={400}
                                        />
                                    </label>
                                )}
                            </ul>
                        </article >
                        {error && "message" in error &&
                            <Title
                                color="red"
                                headingLevel={6}
                                fontWeight={500}
                                text={error.message}
                            />}
                        {children}
                    </article >
                )
                }
            />
        )
    });

export default Select;
