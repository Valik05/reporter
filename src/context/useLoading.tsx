import Loader from "../components/UI/Loader/Loader";
import { useSdk } from "./useSdk";
import { useUser } from "./useUser";
import { useAuth } from "./useAuth";
import { useFilter } from "./useFilter";
import { useReport } from "./useReport";
import { createContext, useContext } from "react";

type Props = { children: React.ReactNode };

const LoadingContext = createContext({});

export const LoadingProvider = ({ children }: Props) => {
    const sdk = useSdk();
    const auth = useAuth();
    const user = useUser();
    const filter = useFilter();
    const report = useReport();

    const isReady = sdk.isReady && auth.isReady && user.isReady && filter.isReady && report.isReady
    return (
        <LoadingContext.Provider value={{}}>
            {isReady ? children : <Loader />}
        </LoadingContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLoading = () => useContext(LoadingContext);