import Link from "next/link";
import { TeamCard } from "./page";
import { BiLink, BiLogoGithub, BiSolidEnvelope } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ConsultantBadge, HydrideManagementBadge, HydrabankManagementBadge, LeadBadge, DeveloperBadge } from "./Badges";

export const Management = () => {
    return (
        <>
            <TeamCard
                title="Emily"
                subtitle="IT Director"
                badges={[HydrabankManagementBadge, ConsultantBadge, LeadBadge, DeveloperBadge]}
                img="/team/emily.png"
                socialSection={<>
                    <Link href="https://bunni.me" className="hover:text-gray-300" target="_blank" rel="noreferrer noopener">
                        <BiLink className="text-3xl" />
                    </Link>
                    <Link href="https://github.com/egirldevs" className="hover:text-gray-300" target="_blank" rel="noreferrer noopener">
                        <BiLogoGithub className="text-3xl" />
                    </Link>
                    <Link href="mailto:emily@bunni.me" className="hover:text-gray-300" target="_blank" rel="noreferrer noopener">
                        <BiSolidEnvelope className="text-3xl" />
                    </Link>
                </>}
            >
                Hey there! I&apos;m Emily, a passionate Systems Administrator and Network Security Specialist with 6&#43; years of experience. I specialize in Linux, ensuring system stability, security, and performance.
                <br /> <br />
                At 22, I bring fresh perspectives, innovation, and inclusivity as a transfem individual to the tech community.
            </TeamCard>
            <TeamCard
                title="Val"
                subtitle={<>
                    Cloud Architect
                    <br />
                    (Certified Nerd&trade;)
                </>}
                badges={[HydrideManagementBadge, ConsultantBadge, LeadBadge]}
                img="/team/val.jpg"
                socialSection={<>
                    <Link href="/#" className="hover:text-gray-300" target="_blank" rel="noreferrer noopener">
                        <BiLogoGithub className="text-3xl" />
                    </Link>
                    <Link href="mailto:val@hydride.dev" className="hover:text-gray-300" target="_blank" rel="noreferrer noopener">
                        <BiSolidEnvelope className="text-3xl" />
                    </Link>
                </>}
            >
                Hi. My name is Valerie, but you can call me Val!
                My official mission is to represent Hydride, but I am actually a floating figure and help every division.
                My job here is to procure servers and help clients.
                <br /> <br />
                I am a certified GCP Cloud Architect and recurring RCHSA as of 2022 and will be testing for CCSP certification in 2024.
            </TeamCard>
            <TeamCard
                title="Aurora"
                subtitle="Infrastructure Manager"
                badges={[HydrabankManagementBadge, ConsultantBadge]}
                img="/team/alpha.webp"
                socialSection={<>
                    <Link href="https://github.com/AlphieAlph" className="hover:text-gray-300" target="_blank" rel="noreferrer noopener">
                        <BiLogoGithub className="text-3xl" />
                    </Link>
                </>}
            >
                I&apos;m Alpha, also known as Aurora, and I oversee Hydrabank&apos;s infrastructure and systems. I&apos;m enthusiastic about hardware and have a strong inclination towards managing UNIX systems, including Servers and Desktops, as well as system administration.
            </TeamCard>
            <TeamCard
                title="Dani"
                subtitle="Hydride Founder"
                badges={[HydrideManagementBadge, DeveloperBadge]}
                img="/team/kermit.webp"
                socialSection={<>
                    <Link href="https://danny.works" className="hover:text-gray-300" target="_blank" rel="noreferrer noopener">
                        <BiLink className="text-3xl" />
                    </Link>
                    <Link href="https://github.com/hydronatron" className="hover:text-gray-300" target="_blank" rel="noreferrer noopener">
                        <BiLogoGithub className="text-3xl" />
                    </Link>
                    <Link href="mailto:dani@hydride.dev" className="hover:text-gray-300" target="_blank" rel="noreferrer noopener">
                        <BiSolidEnvelope className="text-3xl" />
                    </Link>
                </>}
            >
                howdy, y&apos;all! the name&apos;s dani. 
                i ain&apos;t really involved with things here at hydrabank and mostly let emily/alpha/val do their thing, but i&apos;m the founder of the 
                {" "}
                <Link href="https://hydride.dev" target="_blank" rel="noreferrer noopener" className="inline-flex font-bold text-purple-300 hover:text-purple-400 hover:underline underline-offset-1 flex-row items-center gap-x-2">
                    hydride collective
                    <FaExternalLinkAlt className="text-xs" />
                </Link>.
                over there, i manage general operations, infrastructure, and oversee web development and UI design.
            </TeamCard>
        </>
    );
};