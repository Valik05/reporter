import type { RegisterOptions } from "react-hook-form"

export type DatepickerProps = {
    id: string,
    name: string,
    label?: string,
    options?: RegisterOptions
    children?: React.ReactNode,
    classes?: ("fullwidth")[],
    minDate?: Date,
    maxDate?: Date,
} & React.InputHTMLAttributes<HTMLInputElement>