
import { useSystemMsg } from "./useSystemMsg";
import type { AuthMessages } from "../models/API/AuthAPI";
import { createContext, useContext, useEffect, useRef } from "react";
import { LOCAL_STORAGE } from "../enums/localStorage";

type AuthContextType = {
    openAuthWS: () => void,
};

type Props = { children: React.ReactNode };

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: Props) => {
    const { showSystemMsg } = useSystemMsg();
    const newWindow = useRef<Window | null>(null);
    const loginWSRef = useRef<WebSocket | null>(null);

    const openAuthWS = (): WebSocket => {
        if (loginWSRef.current) loginWSRef.current.close();

        const wbURL = new URL("/ws/login", import.meta.env.VITE_APP_BASE_SOCKET_API_URL);

        loginWSRef.current = new WebSocket(wbURL);

        loginWSRef.current.onopen = function (e: Event) {
            console.log("Соединение установлено", e);
        };

        loginWSRef.current.onmessage = function (event: MessageEvent) {
            const data: AuthMessages = JSON.parse(event.data);
            console.log("Получены данные:", data);


            if ("uuid" in data && "bot_url" in data) {
                newWindow.current = window.open(data.bot_url, "_blank", 'width=600,height=400');
            }

            if ("access_token" in data && data?.access_token && "status" in data && data.status === "success") {
                loginWSRef.current?.close();
                if (newWindow.current && !newWindow.current.closed) newWindow.current.close();
                showSystemMsg({ text: "Authentification successful", type: "success" })
                localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, data.access_token)
            }
        };

        loginWSRef.current.onclose = function (event: CloseEvent) {
            if (event.wasClean) {
                console.log(
                    `Соединение закрыто чисто, код=${event.code}, причина=${event.reason}`
                );
            } else {
                console.log("Соединение прервано");
            }
        };

        loginWSRef.current.onerror = function (error: Event) {
            console.error(`Ошибка:`, error);
            loginWSRef.current?.close();
            showSystemMsg({ text: "Something went wrong", type: "error" })
        };

        return loginWSRef.current;
    };

    // Cleanup function to close WebSocket when component unmounts
    useEffect(() => {
        return () => { if (loginWSRef.current) loginWSRef.current.close() };
    }, []);


    return (
        <AuthContext.Provider
            value={{ openAuthWS }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);