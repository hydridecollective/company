import Link from "next/link";
import { BiGitRepoForked, BiSolidBinoculars, BiSolidStar } from "react-icons/bi";
import { Providers } from "./Providers";
import { TooltipClient } from "@std/app/ClientUtil";

export const Project = async ({ key, provider: providerId, customIcon: CustomIcon, href, title, subtitle, description, footer: Footer, options }) => {
    const provider = Providers.find(provider => provider.id === providerId);
    const { stars, forks, watches, description: ghDescription } = await getData(options?.fetchMethod, providerId, options?.repository?.bearer, options?.repository?.repository);
    return (
        <div key={key} className="flex flex-col gap-y-2 rounded-xl border-gray-600 border-2 h-full w-full">
            <div className="flex flex-row py-4 border-b-2 border-gray-600 p-4 items-center gap-x-2">
                {
                    CustomIcon ? <CustomIcon /> : <provider.icon className="text-4xl mx-2" />
                }
                <div className="flex flex-col gap-x-2 font-header">
                    {
                        (options?.repository?.bearer && !options?.showTitle) && (
                            <Link href={`https://${providerId}/${options?.repository?.bearer}`} target="_blank" rel="noreferrer noopener" className="font-medium hover:text-gray-300">{options?.repository?.bearer}</Link>
                        )
                    }
                    {
                        (options?.repository?.repository && !options?.showTitle) && (
                            <Link href={href} target="_blank" rel="noreferrer noopener" className="font-medium hover:text-gray-300 text-2xl">{options?.repository?.repository}</Link>
                        )
                    }
                    {
                        ((!options?.repository?.bearer && !options?.repository?.repository) || options?.showTitle) && (
                            <Link href={href} target="_blank" rel="noreferrer noopener" className="font-medium hover:text-gray-300 text-2xl">{title}</Link>
                        )
                    }
                    {
                        subtitle && (
                            <h2 className="font-medium">{subtitle}</h2>
                        )
                    }
                </div>
            </div>
            <div className="flex flex-col py-4 p-4 pt-2 gap-y-2 justify-start h-full">
                <p>
                    {
                        description || ghDescription || "No description provided."
                    }
                </p>
                {
                    Footer ? <Footer /> : (
                        <div className="flex flex-row h-full items-end justify-end gap-x-4">
                            {
                                stars !== null && (
                                    <TooltipClient title={`${stars} ${parseInt(stars) == 1 ? "stargazer" : "stargazers"}`} placement="top">
                                        <div className="flex flex-row items-end gap-x-2 justify-end">
                                            <p className="font-medium">{stars}</p>
                                            <BiSolidStar className="text-2xl" />
                                        </div>
                                    </TooltipClient>
                                )
                            }
                            {
                                forks !== null && (
                                    <TooltipClient title={`Forked ${forks} ${parseInt(forks) == 1 ? "time" : "times"}`} placement="top">
                                        <div className="flex flex-row items-end gap-x-2 justify-end">
                                            <p className="font-medium">{forks}</p>
                                            <BiGitRepoForked className="text-2xl" />
                                        </div>
                                    </TooltipClient>
                                )
                            }
                            {
                                watches !== null && (
                                    <TooltipClient title={`${watches} watching this repository`} placement="top">
                                        <div className="flex flex-row items-end gap-x-2 justify-end">
                                            <p className="font-medium">{watches}</p>
                                            <BiSolidBinoculars className="text-2xl" />
                                        </div>
                                    </TooltipClient>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export const getData = async (fetchMethod, providerId, bearer, repository) => {
    if (fetchMethod !== "api.gh") return { stars: null, forks: null, watches: null, description: null };
    const res = await fetch(`https://api.github.com/repos/${bearer}/${repository}`, {
        headers: {
            "Accept": "application/vnd.github+json"
        },
        next: {
            revalidate: 300
        }
    }).then(r => {
        if (r.status !== 200) return { stars: null, forks: null, watches: null, description: null };
        return r.json();
    }).catch((e) => {
        console.error(e);
        return { stars: null, forks: null, watches: null, description: null };
    });

    return {
        stars: res.stargazers_count,
        forks: res.forks_count,
        watches: res.subscribers_count,
        description: res.description
    };
};