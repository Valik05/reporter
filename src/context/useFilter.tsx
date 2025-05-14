import { useSystemMsg } from "./useSystemMsg";
import { LOCAL_STORAGE } from "../enums/localStorage";
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
    const { showSystemMsg } = useSystemMsg();
    const [isReady, setIsReady] = useState(false);
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

    useEffect(() => { if (localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)) getUsersList() }, [getUsersList])

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