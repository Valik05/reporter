export interface TitleProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
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