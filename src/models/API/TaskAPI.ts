export type TaskRequestBody = {
    date: Date,
    developer: string,
    yesterday: TaskType[],
    today: TaskType[],
    blockers: TaskType[],
}

export type TaskRequestQueries = {
    date?: Date,
    owner_id?: string
}

export type TaskType = {
    url: string,
    description: string
}

export type TaskDeleteSuccessResponce = { detail: string }

export type TaskRetrieveRequestBody = { _id: string }

export type TaskSuccessResponceBody = { _id: string } & TaskRequestBody

export type TaskUpdateRequestBody = TaskRetrieveRequestBody & TaskRequestBody

export type TaskDeleteRequestBody = TaskRetrieveRequestBody