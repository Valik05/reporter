import { v4 as uuidv4 } from "uuid";
import { SYSTEM_MSG_LIMIT } from "../consts/SystemObj/SystemMsg";
import { createContext, useContext, useEffect, useState } from "react";
import type { SystemMsgObj, SystemMsgObjWithOutId } from "../models/SystemElems/SystemMsg";

type SystemContextType = {
    messages: SystemMsgObj[] | [],
    showSystemMsg: (msg: SystemMsgObjWithOutId) => void,
    removeMsg: (id: string) => void,
    clearMsg: () => void
}

const SystemMsgContext = createContext<SystemContextType>({} as SystemContextType);

type Props = { children: React.ReactNode };

export const SystemMsgProvider = ({ children }: Props) => {
    const [queue, setQueue] = useState<SystemMsgObj[] | []>([]);
    const [messages, setMessages] = useState<SystemMsgObj[] | []>([]);
    const showSystemMsg = (msg: SystemMsgObjWithOutId) => {
        const msgWithId = { ...msg, id: uuidv4() }
        if (messages.length === SYSTEM_MSG_LIMIT) {
            setQueue(prevQueue => [...prevQueue, msgWithId])
        } else {
            setMessages(prevMessages => [...prevMessages, msgWithId].slice(0, SYSTEM_MSG_LIMIT))
        }
    }
    useEffect(() => {
        if (messages.length === 0 && queue.length !== 0) {
            setMessages(prevMsg => [...prevMsg, ...queue.slice(0, SYSTEM_MSG_LIMIT)])
            setQueue(prevQueue => [...prevQueue.slice(SYSTEM_MSG_LIMIT)])
        }
    }, [messages, queue])

    const removeMsg = (id: string) => { setMessages(prevMessages => prevMessages.filter(item => item.id !== id)) }

    const clearMsg = () => { setMessages([]) }

    return (
        <SystemMsgContext.Provider value={{ messages, showSystemMsg, removeMsg, clearMsg }} >
            {children}
        </SystemMsgContext.Provider>
    )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSystemMsg = () => useContext(SystemMsgContext);

