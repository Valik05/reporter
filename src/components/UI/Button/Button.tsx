import './button.css';
import classNames from 'classnames';
import type { ButtonProps } from '../../../models/Button/button';

const Button = ({ text, children, color = 'blue', classes, endIcon, startIcon, ...btnProps }: ButtonProps) => {
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
