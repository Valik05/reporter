import { useSystemMsg } from "./useSystemMsg";
import { createContext, useCallback, useContext, useState } from "react";
import { createReportAPI, getReportAPI, getReportListAPI, updateReportAPI } from "../service/ReportService";
import type { TaskRequestBody, TaskRequestQueries, TaskRetrieveRequestBody, TaskSuccessResponceBody, TaskUpdateRequestBody } from "../models/API/TaskAPI";

type ReportContextType = {
    isReady: boolean,
    reportList: TaskSuccessResponceBody[],
    report: TaskSuccessResponceBody | null,
    getReportList: (dates: TaskRequestQueries) => void,
    createReport: (dates: TaskRequestBody) => void,
    getReport: (dates: TaskRetrieveRequestBody) => void,
    updateReport: (dates: TaskUpdateRequestBody) => void,
};

type Props = { children: React.ReactNode };

const ReportContext = createContext<ReportContextType>({} as ReportContextType);

export const ReportProvider = ({ children }: Props) => {
    const { showSystemMsg } = useSystemMsg();
    const [isReady, setIsReady] = useState(true);
    const [reportList, setReportList] = useState<TaskSuccessResponceBody[]>([]);
    const [report, setReport] = useState<TaskSuccessResponceBody | null>(null);

    const getReportList = useCallback(async (dates: TaskRequestQueries) => {
        setIsReady(false)
        await getReportListAPI(dates)
            .then((res) => {
                if (res) {
                    // console.log(res);
                    setReportList(res)
                }
            })
            .catch((error) => {
                if (typeof error === 'string') return showSystemMsg({ type: 'error', text: error })
            })
            .finally(() => setIsReady(true))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getReport = useCallback(async (dates: TaskRetrieveRequestBody) => {
        setIsReady(false)
        await getReportAPI(dates)
            .then((res) => {
                if (res) {
                    // console.log(res);
                    setReport(res)
                }
            })
            .catch((error) => {
                if (typeof error === 'string') return showSystemMsg({ type: 'error', text: error })
            })
            .finally(() => setIsReady(true))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const createReport = useCallback(async (dates: TaskRequestBody) => {
        setIsReady(false)
        await createReportAPI(dates)
            .then((res) => {
                if (res) {
                    // console.log(res);
                    getReportList({})
                    setReportList(prev => [res, ...prev])
                }
            })
            .catch((error) => {
                if (typeof error === 'string') return showSystemMsg({ type: 'error', text: error })
            })
            .finally(() => setIsReady(true))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const updateReport = useCallback(async (dates: TaskUpdateRequestBody) => {
        setIsReady(false)
        await updateReportAPI(dates)
            .then((res) => {
                if (res) {
                    // console.log(res);
                    getReportList({})
                    setReportList(prev => {
                        const arr = [...prev];
                        arr.splice(arr.findIndex(el => el.id === dates.id), 1, res)
                        return arr
                    })
                }
            })
            .catch((error) => {
                if (typeof error === 'string') return showSystemMsg({ type: 'error', text: error })
            })
            .finally(() => setIsReady(true))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ReportContext.Provider
            value={{ isReady, reportList, report, createReport, getReport, getReportList, updateReport }}
        >
            {children}
        </ReportContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useReport = () => useContext(ReportContext);