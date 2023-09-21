import { Tooltip } from "@mui/joy";
import { BsClipboardFill, BsShieldFill, BsTools } from "react-icons/bs";

export const ShieldBadge = () => (
    <Tooltip title="Mitigation Solution">
        <span className="font-header font-bold">
            <span>
                <BsShieldFill className="text-gray-300" />
            </span>
        </span>
    </Tooltip>
);

export const DeveloperBadge = () => (
    <Tooltip title="Development">
        <span className="font-header font-bold">
            <span>
                <BsTools className="text-gray-300" />
            </span>
        </span>
    </Tooltip>
);