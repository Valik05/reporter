import type { RegisterOptions } from "react-hook-form"

export type SelectProps = {
    id: string,
    name: string,
    label?: string,
    options?: RegisterOptions
    children?: React.ReactNode,
    classes?: ("fullwidth")[],
    select: SelectItemType[]
}

export type SelectItemType = {
    value: string | number,
    title: string | number
}