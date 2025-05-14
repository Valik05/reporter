import { useSystemMsg } from "./useSystemMsg";
import { LOCAL_STORAGE } from "../enums/localStorage";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { createReportAPI, deleteReportAPI, getReportAPI, getReportListAPI, updateReportAPI } from "../service/ReportService";
import type { TaskDeleteRequestBody, TaskRequestBody, TaskRequestQueries, TaskRetrieveRequestBody, TaskSuccessResponceBody, TaskUpdateRequestBody } from "../models/API/TaskAPI";

type ReportContextType = {
    isReady: boolean,
    reportList: TaskSuccessResponceBody[],
    report: TaskSuccessResponceBody | null,
    getReportList: (dates: TaskRequestQueries, isNotLoading?: boolean) => void,
    createReport: (dates: TaskRequestBody) => void,
    getReport: (dates: TaskRetrieveRequestBody) => void,
    updateReport: (dates: TaskUpdateRequestBody) => void,
    deleteReport: (dates: TaskDeleteRequestBody) => void,
};

type Props = { children: React.ReactNode };

const ReportContext = createContext<ReportContextType>({} as ReportContextType);

export const ReportProvider = ({ children }: Props) => {
    const { showSystemMsg } = useSystemMsg();
    const [isReady, setIsReady] = useState(true);
    const [reportList, setReportList] = useState<TaskSuccessResponceBody[]>([]);
    const [report, setReport] = useState<TaskSuccessResponceBody | null>(null);

    const getReportList = useCallback(async (dates: TaskRequestQueries, isNotLoading?: boolean) => {
        if (!isNotLoading) setIsReady(false)
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

    useEffect(() => {
        if (localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)) getReportList({})
    }, [getReportList])

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
                    showSystemMsg({ type: 'success', text: "Report successfully created" })
                }
            })
            .catch((error) => {
                if (typeof error === 'string') return showSystemMsg({ type: 'error', text: error })
            })
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
                    showSystemMsg({ type: 'success', text: "Report successfully updated" })
                }
            })
            .catch((error) => {
                if (typeof error === 'string') return showSystemMsg({ type: 'error', text: error })
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const deleteReport = useCallback(async (dates: TaskDeleteRequestBody) => {
        setIsReady(false)
        await deleteReportAPI(dates)
            .then((res) => {
                if (res) {
                    // console.log(res);
                    getReportList({})
                    setReportList(prev => {
                        const arr = [...prev];
                        arr.splice(arr.findIndex(el => el.id === dates.id), 1)
                        return arr
                    })
                    showSystemMsg({ type: 'success', text: "Report successfully deleted" })
                }
            })
            .catch((error) => {
                if (typeof error === 'string') return showSystemMsg({ type: 'error', text: error })
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ReportContext.Provider
            value={{ isReady, reportList, report, createReport, getReport, getReportList, updateReport, deleteReport }}
        >
            {children}
        </ReportContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useReport = () => useContext(ReportContext);