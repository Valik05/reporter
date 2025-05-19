export type AuthRequestBody = {
    initData: string
}

export type AuthSuccessResponce = {
    access_token: string,
    user: {
        user_id: string,
        chat_id: number,
        username: string,
        full_name: string,
        iat: Date,
        exp: Date
    }
}