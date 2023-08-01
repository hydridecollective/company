import { Tooltip } from "@mui/joy";
import Link from "next/link";
import { BsClipboardFill, BsShieldFill, BsTools } from "react-icons/bs";
export const HydrideManagementBadge = () => (
    <Tooltip title="Management @ Hydride">
        <span className="font-header font-bold">
            <Link href="https://hydride.dev" target="_blank" rel="noreferrer noopener" className="bg-gradient-to-r from-violet-400 to-orange-400 lowercase text-transparent bg-clip-text">
                hd
            </Link>
        </span>
    </Tooltip>
);

export const HydrabankManagementBadge = () => (
    <Tooltip title="Management @ Hydrabank">
        <span className="font-header font-bold">
            <span className="bg-gradient-brand lowercase text-transparent bg-clip-text">
                hb
            </span>
        </span>
    </Tooltip>
);

export const ConsultantBadge = () => (
    <Tooltip title="Consultant">
        <span className="font-header font-bold">
            <span>
                <BsClipboardFill className="text-gray-300" />
            </span>
        </span>
    </Tooltip>
);

export const LeadBadge = () => (
    <Tooltip title="Lead">
        <span className="font-header font-bold">
            <span>
                <BsShieldFill className="text-gray-300" />
            </span>
        </span>
    </Tooltip>
);

export const DeveloperBadge = () => (
    <Tooltip title="Developer">
        <span className="font-header font-bold">
            <span>
                <BsTools className="text-gray-300" />
            </span>
        </span>
    </Tooltip>
);