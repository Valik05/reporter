import { axiosService } from "../axios/axios";
import { ErrorHandler } from "../helpers/ErrorHandler";
import type { UserSuccessResponce } from "../models/API/UserAPI";

export const getUserAPI = async () => {
    try {
        const { data } = await axiosService.get<UserSuccessResponce>('/users/profile/');
        console.log(data);
        return data;
    } catch (error: unknown) {
        console.log(ErrorHandler(error));
        throw ErrorHandler(error)
    }
};