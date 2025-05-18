import { useAuth } from "./useAuth";
import { useSystemMsg } from "./useSystemMsg";
import { getUserAPI } from "../service/UserService";
import type { UserSuccessResponce } from "../models/API/UserAPI";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type UserContextType = {
    isReady: boolean,
    setUser: React.Dispatch<React.SetStateAction<UserSuccessResponce | null>>
    user: UserSuccessResponce | null
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
    const { isAuth } = useAuth();
    const { showSystemMsg } = useSystemMsg();
    const [isReady, setIsReady] = useState(true);
    const [user, setUser] = useState<UserSuccessResponce | null>(null);

    const getUser = useCallback(async () => {
        setIsReady(false)
        await getUserAPI()
            .then((res) => {
                if (res) {
                    // console.log(res);
                    setUser(res)
                }
            })
            .catch((error) => {
                if (typeof error === 'string') return showSystemMsg({ type: 'error', text: error })
            })
            .finally(() => setIsReady(true))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (isAuth) getUser()
    }, [getUser, isAuth])

    return (
        <UserContext.Provider
            value={{ isReady, user, setUser }}
        >
            {children}
        </UserContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);