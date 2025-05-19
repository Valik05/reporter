export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text?: string,
    children?: React.ReactNode | string | number,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    color?: "black" | "blue" | "red"
    classes?: ("fullWidth" | "icon")[]
}