export const getDay = (type: "yesterday" | "tomorrow"): Date => {
    const day = new Date();

    if (type === "yesterday") {
        day.setDate(day.getDate() - 1);
        day.setHours(0, 0, 0, 0);
    }
    if (type === "tomorrow") {
        day.setDate(day.getDate() + 1);
        day.setHours(23, 59, 59, 999);
    }

    return day
}