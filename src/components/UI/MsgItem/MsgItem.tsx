import './msgItem.css';
import Title from "../Title/Title";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useSystemMsg } from '../../../context/useSystemMsg';
import { SystemMsgIcons } from "../../../consts/SystemObj/Icons";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import type { SystemMsgObj } from '../../../models/SystemElems/SystemMsg';

type Props = {
    index: number
} & SystemMsgObj

const MsgItem = ({ id, text, type, index }: Props) => {
    const { removeMsg } = useSystemMsg();
    const [isDelayed, setIsDelayed] = useState(0);
    useEffect(() => {
        const resetingTimeout1 = setTimeout(() => { setIsDelayed(1) }, index * 100)
        const resetingTimeout2 = setTimeout(() => { setIsDelayed(0) }, 5000 - (index * 100))
        const resetingTimeout3 = setTimeout(() => { removeMsg(id) }, 5300)
        return () => {
            clearTimeout(resetingTimeout1)
            clearTimeout(resetingTimeout2)
            clearTimeout(resetingTimeout3)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <SwitchTransition mode="out-in">
            <CSSTransition key={isDelayed} timeout={300} classNames="transition-system-msg">
                {isDelayed === 1 ?
                    <li className={classNames('system-msg-content', type)}>
                        <aside className="icon">{SystemMsgIcons[type]}</aside>
                        <Title
                            text={text}
                            headingLevel={5}
                            fontWeight={500}
                        />
                    </li>
                    : <></>}
            </CSSTransition>
        </SwitchTransition>
    )
};

export default MsgItem;
