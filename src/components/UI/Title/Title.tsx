import './title.css';
import classNames from "classnames";

interface Props extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
    text?: string,
    fontSize?: string
    color?: "black" | "red" | "gray" | "blue" | "light-blue" | "white"
    classes?: ('fullWidth')[]
    lineHeight?: number | string;
    headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
    children?: React.ReactNode | string | number;
    fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    fontFamily?: ("default")[]
}

const Title = ({ text, headingLevel, children, fontFamily = ['default'], fontWeight, fontSize, lineHeight, color = "black", classes, ...h2Props }: Props) => {
    const HeadingTag = `h${headingLevel}`;
    return (
        // @ts-expect-error unknown issue
        <HeadingTag className={classNames('title', [fontFamily, color], classes)} {...h2Props} style={{ fontWeight, fontSize, lineHeight, ...h2Props.style }}>
            {text}
            {children}
        </HeadingTag>
    )
};

export default Title;
