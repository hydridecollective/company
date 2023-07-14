import Image from "next/image";
import { BiLink, BiLogoGithub, BiLogoGitlab, BiServer, BiUserCircle } from "react-icons/bi";

const globalOptions = {
    next: {
        revalidate: 120
    },
    headers: {}
};

export const Providers = [
    {
        type: "generic",
        name: "Link",
        id: "href",
        icon: BiLink,
        colour: "#000000",
        url: null,
    },
    {
        type: "generic",
        name: "Service",
        id: "service",
        icon: BiServer,
        colour: "#000000",
        url: null,
    },
    {
        type: "generic",
        name: "Client",
        id: "client",
        icon: BiUserCircle,
        colour: "#000000",
        url: null,
    },
    {
        type: "vcs",
        name: "GitHub",
        id: "github",
        icon: BiLogoGithub,
        colour: "#181717",
        url: "https://github.com",
    },
    {
        type: "vcs",
        name: "GitLab",
        id: "gitlab",
        icon: BiLogoGitlab,
        colour: "#FCA121",
        url: "https://gitlab.com",
    },
    {
        type: "hydride",
        name: "hydride.space",
        id: "hd-space",
        icon: () => (
            <Image src={"/logos/hd.blue_short.transparent.png"} width={64} height={64} className="w-8 mx-2" alt="hydride.space logo" />
        ),
        colour: "#000000",
        url: "https://hydride.space",
    },
    {
        type: "hydride",
        name: "hydrabank",
        id: "hd-hydrabank",
        icon: () => (
            <Image src={"/logos/hb.short.transparent.png"} width={64} height={64} className="w-8 mx-2" alt="hydrabank logo" />
        ),
        colour: "#000000",
        url: "https://hydrabank.systems",
    }
];