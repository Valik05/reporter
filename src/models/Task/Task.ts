import type { UseFieldArrayRemove, UseFieldArrayReturn } from "react-hook-form"
import type { TaskResponceBody } from "../API/TaskAPI"

export type TaskItemProps = {
    fieldName: string,
    index: number,
    remove: UseFieldArrayRemove
}

export type TaskSectionProps = {
    title: string,
    fieldName: string,
} & UseFieldArrayReturn<TaskResponceBody, ("yesterday" | "today" | "blockers")>