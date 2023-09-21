import Link from "next/link";
import { TeamCard } from "./page";
import { BiLink, BiLogoDiscord, BiLogoGithub, BiSolidEnvelope } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ConsultantBadge, HydrideManagementBadge, HydrabankManagementBadge, LeadBadge, DeveloperBadge, ShieldBadge } from "./Badges";

export const Partners = () => {
    return (
        <>
            <TeamCard
                title="Refine Development"
                subtitle="Development Team"
                badges={[DeveloperBadge]}
                img="/partners/refine.png"
                socialSection={<>
                    <Link href="https://refinedev.xyz/" className="hover:text-gray-300" target="_blank" rel="noreferrer noopener">
                        <BiLink className="text-3xl" />
                    </Link>
                    <Link href="https://github.com/RefineDevelopment/" className="hover:text-gray-300" target="_blank" rel="noreferrer noopener">
                        <BiLogoGithub className="text-3xl" />
                    </Link>
                    <Link href="https://discord.gg/refinedev" className="hover:text-gray-300" target="_blank" rel="noreferrer noopener">
                        <BiLogoDiscord className="text-3xl" />
                    </Link>
                </>}
            >
                A Minecraft Development Team that aims to provide affordable and cheap plugins without downgrading on quality.
                <br /> <br />
            </TeamCard>

            <TeamCard
                title="Papyrus"
                subtitle="DDoS/Bot Attack Mitigation"
                badges={[ShieldBadge]}
                img="/partners/papyrus-vip.png"
                socialSection={<>
                    <Link href="https://papyrus.vip/" className="hover:text-gray-300" target="_blank" rel="noreferrer noopener">
                        <BiLink className="text-3xl" />
                    </Link>
                    <Link href="https://discord.gg/EP3WGzrE5Q" className="hover:text-gray-300" target="_blank" rel="noreferrer noopener">
                        <BiLogoDiscord className="text-3xl" />
                    </Link>
                </>}
            >
                Papyrus will defend your server from DDoS threats with their robust global network. Capable of halting 200+ million bots per second and withstanding 120Tbit/s attacks, they will provide peace of mind for your business, minecraft server, hosting company and more. Use code HYDRABANK for 15% off on your purchase!
                <br /> <br />
            </TeamCard>
        </>
    );
};