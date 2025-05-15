import axios from "axios";

export const ErrorHandler = (error: unknown) => {
    // console.log(error);
    if (axios.isAxiosError(error)) {
        if (error?.response && 'data' in error.response) {
            const { data } = error.response
            if (typeof data === "string") return data.length < 256 ? data : error.message
            if ('detail' in data) return data.detail
            if ('email' in data) return Array.isArray(data.email) ? data.email[0] : data.email
            if ('username' in data) return Array.isArray(data.username) ? data.username[0] : data.username
            if ('password' in data) return Array.isArray(data.password) ? data.password[0] : data.password
            if ('non_field_errors' in data) return Array.isArray(data.non_field_errors) ? data.non_field_errors[0] : data.non_field_errors
        }
        return error.message.slice(0, 256)
    }
    return "Error"
};