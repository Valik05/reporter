import './title.css';
import classNames from "classnames";
import type { TitleProps } from '../../../models/Title/Title';

const Title = ({
    text,
    headingLevel,
    children,
    fontFamily = ['default'],
    fontWeight,
    fontSize,
    lineHeight,
    color = "black",
    classes,
    className,
    ...h2Props
}: TitleProps) => {
    const HeadingTag = `h${headingLevel}`;
    return (
        // @ts-expect-error unknown issue
        <HeadingTag className={classNames('title', [fontFamily, color], classes, className)} {...h2Props} style={{ fontWeight, fontSize, lineHeight, ...h2Props.style }}>
            {text}
            {children}
        </HeadingTag>
    )
};

export default Title;
