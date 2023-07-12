import { DateTime } from "luxon";
import Image from "next/image";
import { BiBarChart, BiSolidCloudUpload, BiSolidNews, BiSolidWatch, BiUser } from "react-icons/bi";

export const Projects = [
    {
        provider: "hd-space",
        href: "https://new.hydride.space",
        title: "hydride.space",
        subtitle: "New Hydride",
        description: "A fast, lightweight, and reliable image/file host. A JAMstack application, written using Next.js and Fastify. Now in invite-only alpha!",
        footer: () => {
            return (
                <div className="flex flex-row h-full items-center justify-end gap-x-4">
                    <div className="flex flex-row items-end gap-x-2 justify-end">
                        <p className="font-medium">(maybe user count here soon)</p>
                        <BiSolidCloudUpload className="text-2xl" />
                    </div>
                </div>
            );
        }
    },
    {
        provider: "github",
        href: "https://github.com/DanningtonSystems/images",
        title: "Hydride OCI Images",
        subtitle: "(and Pterodactyl eggs)",
        description: "A collection of Docker/OCI images, useful for various purposes. Also includes a few Pterodactyl eggs for your own convenience (:",
        options: {
            fetchMethod: "api.gh",
            showTitle: true,
            repository: {
                bearer: "DanningtonSystems",
                repository: "images",
            }
        }
    },
    {
        provider: "github",
        href: "https://github.com/hydrabank/songfish",
        title: "Songfish",
        subtitle: "A Discord music bot",
        description: "This Lavalink music bot was written in late 2021 following Groovy and Rythm's shutdowns for a few friends. Still partially maintained.",
        options: {
            fetchMethod: "api.gh",
            showTitle: true,
            repository: {
                bearer: "hydrabank",
                repository: "songfish",
            }
        }
    },
    {
        provider: "github",
        href: "https://github.com/hydrabank/setsuzoku",
        title: "setsuzoku",
        subtitle: "A clean SSH manager",
        description: "An electron/next.js application for managing SSH connections. Not feature-packed, but it stays close to OpenSSH.",
        options: {
            fetchMethod: "api.gh",
            showTitle: true,
            repository: {
                bearer: "hydrabank",
                repository: "setsuzoku",
            }
        }
    }
];

export const Clients = [
    {
        provider: "client",
        customIcon: () => {
            return (
                <Image src="/logos/clients/continuity.png" width={64} height={64} alt="Continuity logo" className="w-10 rounded-lg mx-2" />
            );
        },
        href: "https://kooleyy.com",
        title: "Continuity",
        subtitle: "YouTube content management",
        description: "Continuity is a content management team. They provide the resources necessary to assist creators interested in growing their brand, regardless of size.",
        footer: async () => {
            const stats = await fetch("https://kooleyyapi.hydrabank.world/api/getStatistics", {
                next: {
                    revalidate: 300
                }
            }).then(res => {
                if (!res.ok) return {
                    response: res.status,
                    clients: {},
                    videos: {
                        averageDuration: {}
                    },
                    views: {}
                };

                return res.json();
            }).catch((e) => {
                console.error(e);
                return {
                    response: 500,
                    clients: {},
                    videos: {
                        averageDuration: {}
                    },
                    views: {}
                };
            });
            return (
                <div className="flex flex-row h-full items-end justify-end">
                    <div className="flex flex-row h-full items-center justify-end gap-x-4">
                        <div className="flex flex-row items-end gap-x-2 justify-end">
                            <p className="font-medium"><b>{stats?.clients?.total}</b> clients</p>
                            <BiUser className="text-2xl" />
                        </div>
                        <div className="flex flex-row items-end gap-x-2 justify-end">
                            <p className="font-medium"><b>{stats?.views?.total}</b> views</p>
                            <BiBarChart className="text-2xl" />
                        </div>
                    </div>
                </div>
            );
        }
    },
    {
        provider: "client",
        customIcon: () => {
            return (
                <Image src="/logos/clients/rockinsiderpress.png" width={64} height={64} alt="Rock Insider Press logo" className="w-10 rounded-lg mx-2" />
            );
        },
        href: "https://rockinsiderpress.com",
        title: "Rock Insider Press",
        subtitle: "Rock music publication",
        description: "Rock Insider Press (RIP), is a music publication focused on rock music. RIP highlights female and nonbinary-identifying journalists and photographers who are passionate about music.",
        footer: async () => {
            const { posts } = await fetch("https://ghost.rockinsiderpress.com/ghost/api/content/posts/?key=936b98986a9e7caa6526c8a23b&limit=all&fields=title,created_at", {
                next: {
                    revalidate: 300
                }
            }).then(res => {
                if (!res.ok) return {
                    posts: []
                };

                return res.json();
            }).catch((e) => {
                console.error(e);
                return {
                    posts: []
                };
            });

            const newestPost = posts?.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            })[0];
            return (
                <div className="flex flex-row h-full items-end justify-end">
                    <div className="flex flex-row items-center justify-end gap-x-4">
                        <div className="flex flex-row items-center gap-x-2 justify-end">
                            <p className="font-medium">Updated <b>{DateTime.fromISO(newestPost?.created_at).toRelativeCalendar()}</b></p>
                            <BiSolidWatch className="text-2xl" />
                        </div>
                        <div className="flex flex-row items-center gap-x-2 justify-end">
                            <p className="font-medium"><b>{posts?.length}</b> posts</p>
                            <BiSolidNews className="text-2xl" />
                        </div>
                    </div>
                </div>
            );
        }
    },
];