import { Tooltip } from "@mui/joy";
import { MdCheck, MdNotInterested, MdQuestionMark } from "react-icons/md";
export const PricingCard = async ({ CustomIcon, key, amt, title, subtitle, children: description, options, highlighted, kSeries, productName }) => {
    return (
        <div key={key} className={`flex flex-col gap-y-2 rounded-xl h-full w-full ${highlighted ? "border-orange-500 border-4" : "border-gray-600 border-2"}`}>
            <div className={`flex flex-col gap-y-2 ${highlighted ? "border-orange-500 border-b-4" : "border-gray-600 border-b-2"} p-8`}>
                {
                    kSeries && (
                        <span className="font-medium text-orange-300">
                            {
                                productName || "No product name provided."
                            }
                        </span>
                    )
                }
                <div className="flex flex-row items-center gap-x-2 text-white">
                    {
                        CustomIcon ? <CustomIcon className="text-xl" /> : null
                    }
                    <div className="flex flex-col gap-y-6 font-header w-full">
                        <div>
                            {
                                ((!options?.repository?.bearer && !options?.repository?.repository) || options?.showTitle) && (
                                    <h2 className={`${highlighted ? "bg-orange-400 bg-clip-text text-transparent font-bold" : "text-gray-300 font-medium"} text-2xl`}>{title}</h2>
                                )
                            }
                            {
                                subtitle && (
                                    <h3 className="font-medium text-gray-300">{subtitle}</h3>
                                )
                            }
                        </div>
                        <div className="flex flex-col gap-y-2">
                            {
                                kSeries && (
                                    <span className="text-xl font-medium text-gray-300">Starts at</span>
                                )
                            }
                            {
                                amt && (
                                    <span className={`font-medium d:hover:text-gray-300 text-5xl ${highlighted ? "bg-gradient-brand bg-clip-text text-transparent font-bold" : "text-white"}`}>
                                        {amt}
                                        <span className={`text-xl text-white`}>/mo</span>
                                    </span>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-8 py-4 gap-y-2 justify-start h-full">
                <span>
                    {
                        description || "No description provided."
                    }
                </span>
            </div>
        </div>
    );
};

export const ListCheck = ({ children }) => (
    <li>
        <span className="inline-flex flex-row items-center py-2 gap-x-2 text-white">
            <MdCheck className="text-xl text-white" />
            {children}
        </span>
    </li>
);

export const ListX = ({ children, tooltip }) => (
    <li>
        <Tooltip title={tooltip} placement="top">
            <span className="inline-flex flex-row items-center py-2 gap-x-2">
                <MdNotInterested className="text-xl" />
                {children}
            </span>
        </Tooltip>
    </li>
);

export const ListUnknown = ({ children, tooltip }) => (
    <li>    
        <Tooltip title={tooltip} placement="top">
            <span className="inline-flex flex-row items-center py-2 gap-x-2">
                <MdQuestionMark className="text-xl" />
                {children}
            </span>
        </Tooltip>
    </li>
);

export const ListEntry = ({ children }) => (
    <li>
        <span className="inline-flex flex-row items-center py-2 gap-x-2">
            &bull;
            {" " + children}
        </span>
    </li>
);