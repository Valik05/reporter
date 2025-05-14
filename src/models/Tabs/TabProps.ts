export type TabProps = {
    values: TabValueType[],
    currentValue: string,
    setCurrentValue: (value: string) => void,
}

export type TabValueType = { title: string, value: string, badge?: number }