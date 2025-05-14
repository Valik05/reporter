import Title from "../Title/Title";
import classNames from "classnames";
import Button from "../Button/Button";
import NextIcon from "../../../assets/icons/datepicker/next-icon.svg?react";
import LastIcon from "../../../assets/icons/datepicker/last-icon.svg?react";
import type { ReactDatePickerCustomHeaderProps } from "react-datepicker";

const CustomHeader = ({ date, decreaseMonth, increaseMonth }: ReactDatePickerCustomHeaderProps) => {
    return (
        <article className={classNames('custom-header-container')}>
            <Button
                onClick={decreaseMonth}
                style={{ padding: 0, background: "transparent" }}
            >
                <LastIcon />
            </Button>
            <Title
                headingLevel={6}
                fontWeight={400}
                style={{ textTransform: "capitalize" }}
                text={`${date.toLocaleString('default', { month: 'long' }) + " "}${date.getFullYear()}`}
            />
            <Button
                onClick={increaseMonth}
                style={{ padding: 0, background: "transparent" }}
            >
                <NextIcon />
            </Button>
        </article>
    )
};

export default CustomHeader;
