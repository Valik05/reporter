import { axiosService } from "../axios/axios";
import { ErrorHandler } from "../helpers/ErrorHandler";
import type { TaskRequestBody, TaskRequestQueries, TaskRetrieveRequestBody, TaskSuccessResponceBody, TaskUpdateRequestBody } from "../models/API/TaskAPI";

export const getReportListAPI = async (props: TaskRequestQueries) => {
    try {
        const { data } = await axiosService.get<TaskSuccessResponceBody[]>('/tasks/reports', { params: props });
        console.log(data);
        return data;
    } catch (error: unknown) {
        console.log(ErrorHandler(error));
        throw ErrorHandler(error)
    }
};

export const getReportAPI = async ({ id }: TaskRetrieveRequestBody) => {
    try {
        const { data } = await axiosService.get<TaskSuccessResponceBody>(`/tasks/reports/${id}`);
        console.log(data);
        return data;
    } catch (error: unknown) {
        console.log(ErrorHandler(error));
        throw ErrorHandler(error)
    }
};

export const updateReportAPI = async ({ id, ...dates }: TaskUpdateRequestBody) => {
    try {
        const { data } = await axiosService.patch<TaskSuccessResponceBody>(`/tasks/reports/${id}`, dates);
        console.log(data);
        return data;
    } catch (error: unknown) {
        console.log(ErrorHandler(error));
        throw ErrorHandler(error)
    }
};

export const createReportAPI = async (dates: TaskRequestBody) => {
    try {
        const { data } = await axiosService.post<TaskSuccessResponceBody>('/tasks/submit/', dates);
        console.log(data);
        return data;
    } catch (error: unknown) {
        console.log(ErrorHandler(error));
        throw ErrorHandler(error)
    }
};

