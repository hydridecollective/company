export const Card = async ({ CustomIcon, key, href, title, subtitle, children: description, footer: Footer, header: Header, options }) => {
    return (
        <div key={key} className="flex flex-col gap-y-2 rounded-xl border-gray-600 border-2 h-full w-full">
            <div className="flex flex-col gap-y-2 border-b-2 border-gray-600 p-4">
                {
                    Header && <Header />
                }
                <div className="flex flex-row items-center gap-x-2 text-white">
                    {
                        CustomIcon ? <CustomIcon className="text-xl" /> : null
                    }
                    <div className="flex flex-col gap-x-2 font-header">
                        {
                            ((!options?.repository?.bearer && !options?.repository?.repository) || options?.showTitle) && (
                                <h1 className="font-medium d:hover:text-gray-300 text-2xl">{title}</h1>
                            )
                        }
                        {
                            subtitle && (
                                <h2 className="font-medium">{subtitle}</h2>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-4 p-4 pt-2 gap-y-2 justify-start h-full">
                <span>
                    {
                        description || "No description provided."
                    }
                </span>
            </div>
        </div>
    );
};

export const CardHelper_List = ({ children }) => (
    <ul className="list-disc list-inside pt-2">
        {children}
    </ul>
);

export const CardHelper_ListItem = ({ children }) => (
    <li>
        <span className="inline-flex flex-row items-center py-2">
            {children}
        </span>
    </li>
);