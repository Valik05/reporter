import XIcon from "../../assets/icons/systemMsg/x-icon.svg?react";
import CheckmarkIcon from "../../assets/icons/systemMsg/check-mark-icon.svg?react";
import type { Icons } from "../../models/SystemElems/SystemMsg";

export const SystemMsgIcons: Icons = {
    "success": <CheckmarkIcon />,
    "error": <XIcon />
}