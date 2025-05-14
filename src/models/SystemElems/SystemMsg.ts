export type SystemMsgObj = {
    id: string,
    type: string,
    text: string,
};

export type SystemMsgObjWithOutId = {
    type: string,
    text: string,
};

export type Icons = {
    [key: string]: React.ReactNode
};

