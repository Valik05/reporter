import WebApp from "@twa-dev/sdk";
import { useSystemMsg } from "./useSystemMsg";
import { loginAPI } from "../service/AuthService";
import { LOCAL_STORAGE } from "../enums/localStorage";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type AuthContextType = {
    isAuth: boolean,
    isReady: boolean,
    login: () => void
};

type Props = { children: React.ReactNode };

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: Props) => {
    const { showSystemMsg } = useSystemMsg();
    const [isAuth, setIsAuth] = useState<boolean>(!!localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN));
    const [isReady, setIsReady] = useState<boolean>(!!localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN));

    const login = useCallback(async () => {
        setIsReady(false)
        await loginAPI({ initData: WebApp.initData })
            .then((res) => {
                if (res) {
                    // console.log(res);
                    setIsAuth(true)
                    localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, res.access_token)
                }
            })
            .catch((error) => {
                if (typeof error === 'string') return showSystemMsg({ type: 'error', text: error })
            })
            .finally(() => setIsReady(true))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => { login() }, [login])

    return (
        <AuthContext.Provider
            value={{ isAuth, isReady, login }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);