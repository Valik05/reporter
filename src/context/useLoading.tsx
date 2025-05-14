import Loader from "../components/UI/Loader/Loader";
import { useFilter } from "./useFilter";
import { createContext, useContext } from "react";
import { useReport } from "./useReport";

type Props = { children: React.ReactNode };

const LoadingContext = createContext({});

export const LoadingProvider = ({ children }: Props) => {
    const filter = useFilter();
    const report = useReport();

    const isReady = filter.isReady && report.isReady
    return (
        <LoadingContext.Provider value={{}}>
            {isReady ? children : <Loader />}
        </LoadingContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLoading = () => useContext(LoadingContext);