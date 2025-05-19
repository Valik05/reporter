import { axiosService } from "../axios/axios";
import { ErrorHandler } from "../helpers/ErrorHandler";
import type { AuthRequestBody, AuthSuccessResponce } from "../models/API/AuthAPI";

export const loginAPI = async (dates: AuthRequestBody) => {
    try {
        const { data } = await axiosService.post<AuthSuccessResponce>('/users/auth/', dates);
        console.log(data);
        return data;
    } catch (error: unknown) {
        console.log(ErrorHandler(error));
        throw ErrorHandler(error)
    }
};