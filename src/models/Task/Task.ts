import type { TaskRequestBody } from "../API/TaskAPI"
import type { UseFieldArrayRemove, UseFieldArrayReturn } from "react-hook-form"

export type TaskItemProps = {
    fieldName: string,
    index: number,
    remove: UseFieldArrayRemove
}

export type TaskSectionProps = {
    title: string,
    fieldName: string,
} & UseFieldArrayReturn<TaskRequestBody, ("yesterday" | "today" | "blockers")>