import './tabs.css';
import Title from '../Title/Title';
import classNames from "classnames";
import { useEffect, useRef, useState } from 'react';
import type { TabProps } from '../../../models/Tabs/TabProps';

const Tabs = ({ values, currentValue, setCurrentValue }: TabProps) => {
    const [styles, setStyles] = useState<React.CSSProperties>();
    const tabsListRef = useRef<HTMLUListElement | null>(null);
    useEffect(() => {
        if (tabsListRef.current) {
            const currentItem = tabsListRef.current.childNodes[
                values.findIndex(item => item.value === currentValue) + 1
            ] as HTMLElement
            setStyles({ left: currentItem.offsetLeft, width: currentItem.offsetWidth })
        }
    }, [values, currentValue])
    return (
        <article className={classNames('tabs-container')}>
            <ul className={classNames('tab-list')} ref={tabsListRef}>
                <article className={classNames("indicator")} style={styles}></article>
                {
                    values.map(({ title, value, badge }, index) =>
                        <li
                            className={classNames('tab-item-container')}
                            onClick={() => setCurrentValue(value)}
                            key={index}
                        >
                            <Title
                                text={title}
                                headingLevel={6}
                                fontWeight={600}
                                color={currentValue === value ? "light-blue" : "gray"}
                            />
                            <Title
                                text={`${badge}`}
                                headingLevel={6}
                                fontWeight={600}
                                color={"white"}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    background: "var(--light-blue)",
                                    borderRadius: "100%",
                                    width: "1.25rem",
                                    height: "1.25rem",
                                }}
                            />
                        </li>
                    )
                }
            </ul>
        </article>
    )
};

export default Tabs;
