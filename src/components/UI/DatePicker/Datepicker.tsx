import './datepicker.css';
import Title from '../Title/Title';
import classNames from 'classnames';
import CustomHeader from './CustomHeader';
import DatePicker from "react-datepicker";
import CalendarIcon from '../../../assets/icons/datepicker/calendar-icon.svg?react';
import { Controller, useFormContext } from 'react-hook-form';
import type { DatepickerProps } from '../../../models/Datepicker/Datepicker';

const Datepicker = ({ name, id, options, label, minDate, maxDate }: DatepickerProps) => {
    const { control, formState: { defaultValues } } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            rules={options}
            defaultValue={defaultValues && defaultValues[name]}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
                <article className={classNames('datepicker-container')}>
                    {label && <label className={classNames('datepicker-label')} htmlFor={id}>{label}</label>}
                    <DatePicker
                        id={id}
                        className="datepicker"
                        showIcon
                        minDate={minDate}
                        maxDate={maxDate}
                        showPopperArrow={false}
                        toggleCalendarOnIconClick
                        icon={<CalendarIcon style={{ "color": "#9DA6B5", width: "1rem", height: "1rem" }} />}
                        placeholderText='00.00.00'
                        dateFormat={"dd.MM.yy"}
                        renderCustomHeader={CustomHeader}
                        selected={value}
                        onChange={(data: Date | null) => onChange(data && data.toISOString())}
                        popperPlacement="bottom-start"
                    />
                    {error && "message" in error &&
                        <Title
                            headingLevel={6}
                            fontWeight={500}
                            text={error.message}
                        />}
                </article>
            )
            }
        />


    )
};

export { Datepicker };
