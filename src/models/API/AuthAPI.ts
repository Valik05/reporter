export type ConnectSuccessResponce = {
    uuid?: string,
    bot_url?: URL
}

export type AuthSuccessResponce = {
    status?: string,
    access_token?: string
}

export type AuthMessages = ConnectSuccessResponce & AuthSuccessResponce