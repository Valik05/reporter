import classNames from "classnames";
import MsgItem from "../UI/MsgItem/MsgItem";
import { useSystemMsg } from "../../context/useSystemMsg";

const SystemMsg = () => {
    const { messages } = useSystemMsg();
    return (
        <ul className={classNames('system-msg-container')}>
            {
                messages.map((item, index) => {
                    return <MsgItem {...item} index={index} key={index} />
                })
            }
        </ul>
    )
};

export default SystemMsg;
