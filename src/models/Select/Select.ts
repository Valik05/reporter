import type { RegisterOptions } from "react-hook-form"

export type SelectProps = {
    id: string,
    name: string,
    label?: string,
    options?: RegisterOptions
    children?: React.ReactNode,
    classes?: ("fullwidth")[],
    selectItems: SelectItemType[],
    placeholder: string
}

export type SelectItemType = {
    value: string | number,
    title: string | number
}