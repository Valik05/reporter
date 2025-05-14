import './customLink.css';
import classNames from 'classnames';
import { Link } from "react-router-dom";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    path: string,
    text?: string,
    children?: React.ReactNode
    classes?: string[]
}

const CustomLink = ({ path, text, children, classes, ...props }: LinkProps) => {
    return (
        <Link to={path} className={classNames('link', classes)} {...props}>
            {text}
            {children}
        </Link>
    )
};

export default CustomLink;
