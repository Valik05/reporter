import './button.css';
import classNames from 'classnames';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text?: string,
    children?: React.ReactNode | string | number,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    color?: "black" | "blue" | "red"
    classes?: ("fullWidth" | "icon")[]
}

const Button = ({ text, children, color = 'blue', classes, endIcon, startIcon, ...btnProps }: Props) => {
    return (
        <button className={classNames('btn', classes, [color])} {...btnProps}>
            {startIcon}
            {text}
            {children}
            {endIcon}
        </button>
    )
};

export default Button;
