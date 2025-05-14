import type { RegisterOptions } from "react-hook-form"

export type TextareaProps = {
    id: string,
    name: string,
    label?: string,
    options?: RegisterOptions
    children?: React.ReactNode,
    classes?: ("fullwidth")[],
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>