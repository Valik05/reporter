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

export type TaskRetrieveRequestBody = {
    id: string,
}

export type TaskType = {
    url: string,
    description: string
}

export type TaskSuccessResponceBody = { id: string } & TaskRequestBody

export type TaskUpdateRequestBody = TaskRetrieveRequestBody & TaskRequestBody