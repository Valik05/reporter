export type adSelectorType = adSelectorItem[] | adSelectorItem

export type adSelectorItem = {
    selector: string,
    cssVariables?: Record<string, string>,
    checkActionCallback?: () => void
}