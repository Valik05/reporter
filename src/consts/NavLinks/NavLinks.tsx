import FileIcon from "../../assets/icons/base/file-icon.svg?react";
import NewReportIcon from "../../assets/icons/nav/new-report-icon.svg?react";
import ReportHistoryIcon from "../../assets/icons/nav/report-history-icon.svg?react";
import type { NavLink } from "../../models/NavLinks/NavLinks";

export const NavigationLinks: NavLink[] = [
    {
        path: "/",
        text: "New Report",
        children: <NewReportIcon />,
    },
    {
        path: "/report-history",
        text: "Report History",
        children: <ReportHistoryIcon />,
    },
    {
        path: "/advertisement",
        text: "Advertisement",
        children: <FileIcon />,
    }
]