import { useAuth } from "./useAuth";
import { useSystemMsg } from "./useSystemMsg";
import { getFilterUsersAPI } from "../service/FilterService";
import type { FilterUsersSuccessResponce } from "../models/API/FilterAPI";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type FilterContextType = {
    isReady: boolean,
    usersList: FilterUsersSuccessResponce[],
};

type Props = { children: React.ReactNode };

const FilterContext = createContext<FilterContextType>({} as FilterContextType);

export const FilterProvider = ({ children }: Props) => {
    const { isAuth } = useAuth();
    const { showSystemMsg } = useSystemMsg();
    const [isReady, setIsReady] = useState(true);
    const [usersList, setUsersList] = useState<FilterUsersSuccessResponce[]>([]);

    const getUsersList = useCallback(async () => {
        setIsReady(false)
        await getFilterUsersAPI()
            .then((res) => {
                if (res) {
                    // console.log(res);
                    setUsersList(res)
                }
            })
            .catch((error) => {
                if (typeof error === 'string') return showSystemMsg({ type: 'error', text: error })
            })
            .finally(() => setIsReady(true))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => { if (isAuth) getUsersList() }, [getUsersList, isAuth])

    return (
        <FilterContext.Provider
            value={{ isReady, usersList }}
        >
            {children}
        </FilterContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilter = () => useContext(FilterContext);