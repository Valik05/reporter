import { axiosService } from "../axios/axios";
import { ErrorHandler } from "../helpers/ErrorHandler";
import type {
    TaskDeleteRequestBody,
    TaskDeleteSuccessResponce,
    TaskRequestBody,
    TaskRequestQueries,
    TaskRetrieveRequestBody,
    TaskSuccessResponceBody,
    TaskUpdateRequestBody
} from "../models/API/TaskAPI";

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

export const getReportAPI = async ({ _id }: TaskRetrieveRequestBody) => {
    try {
        const { data } = await axiosService.get<TaskSuccessResponceBody>(`/tasks/reports/${_id}`);
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

export const updateReportAPI = async ({ _id, ...dates }: TaskUpdateRequestBody) => {
    try {
        const { data } = await axiosService.patch<TaskSuccessResponceBody>(`/tasks/reports/${_id}`, dates);
        console.log(data);
        return data;
    } catch (error: unknown) {
        console.log(ErrorHandler(error));
        throw ErrorHandler(error)
    }
};

export const deleteReportAPI = async ({ _id }: TaskDeleteRequestBody) => {
    try {
        const { data } = await axiosService.delete<TaskDeleteSuccessResponce>(`/tasks/reports/${_id}`);
        console.log(data);
        return data;
    } catch (error: unknown) {
        console.log(ErrorHandler(error));
        throw ErrorHandler(error)
    }
};


