import { axiosService } from "../axios/axios";
import { ErrorHandler } from "../helpers/ErrorHandler";
import type { FilterUsersSuccessResponce } from "../models/API/FilterAPI";

export const getFilterUsersAPI = async () => {
    try {
        const { data } = await axiosService.get<FilterUsersSuccessResponce[]>('/users/users');
        console.log(data);
        return data;
    } catch (error: unknown) {
        console.log(ErrorHandler(error));
        throw ErrorHandler(error)
    }
};