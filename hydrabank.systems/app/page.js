import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHelper_List, CardHelper_ListItem } from './Card';
import { FaArrowDown, FaClipboardList, FaClock, FaCloudflare, FaExternalLinkAlt } from 'react-icons/fa';
import { BiMessageDots, BiMoneyWithdraw, BiNetworkChart, BiSolidHardHat } from 'react-icons/bi';
import { SiWireguard } from 'react-icons/si';
import { GiTeleport } from 'react-icons/gi';
import { BsBricks, BsFillPeopleFill, BsPaintBucket } from 'react-icons/bs';
import { Tooltip } from '@mui/joy';

export default function Home() {
  return (
    <>
        <div className="absolute top-0 left-0 block w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-[0.35] backdrop-blur-sm" />
            <Image alt="Earth from the ISS (credit NASA)" className="object-cover w-full h-full" layout="fixed" src={`/bgs/nasa-Q1p7bh3SHj8-unsplash.jpg`} width="1920" height="1080" />
        </div>
        <section className="relative flex flex-col gap-y-4 md:gap-y-2 justify-start pt-48 md:justify-center md:pt-0 items-center text-center w-full h-full min-h-[95vh] px-6 md:px-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white font-header">
                Focus on <span className="gradient-fade-between bg-gradient-brand bg-clip-text text-transparent">growth.</span>
            </h1>
            <span className="text-2xl md:text-3xl font-medium text-white font-header max-w-[75vw] md:max-w-[65vw] 2xl:max-w-[47vw]">
                Let our team of experts handle your cloud infrastructure, so you can focus on your project.
            </span>
            <div className="w-full absolute bottom-24 sm:bottom-16 left-0 flex flex-row items-center justify-center gap-x-4">
                <h1 className="text-xl font-medium tracking-widest uppercase text-white font-header">
                    More content
                </h1>
                <FaArrowDown className="text-xl text-white animate-bounce" />
            </div>
        </section>
        <section className="flex flex-col gap-y-8 items-center px-16 py-8 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-header">
                We offer..
            </h1>
            <div className="flex flex-col items-center gap-y-8 lg:gap-x-8 lg:grid lg:grid-cols-2 2xl:grid-cols-4 w-full max-w-[75vw] 2xl:max-w-[85vw]">
                <Card title="A diverse, expert team" CustomIcon={BsFillPeopleFill}>
                    We have a <b className="text-white">diverse team of experts with a wide range of experience</b> within the field of cloud infrastructure and systems administration. 
                    Our team is located <b className="text-white">across the globe</b>, allowing us to provide you with incredible response times <b className="text-white">around the clock</b>.
                    <br /> <br />
                    With <b className="text-white">rigorous</b> hiring standards, sweeping background checks, and incredibly thorough programmes for newcomers in training, you can <b className="text-white">rest assured that your infrastructure is in good hands</b>.
                </Card>
                <Card title="Digestible insights" CustomIcon={FaClipboardList}>
                    Our system monitoring and metric solution provides you with a digestible overview of your infrastructural health through webhooks, in addition to live alerts.<sup className="font-bold text-white">B1</sup> 
                    {" "}That way, we can assist you with responding to issues as they <b className="text-white">become apparent</b>.
                    <br /> <br />
                    In the future, we will be offering a secure dashboard for you to view and manage various aspects of your infrastructure from a single place.<sup className="font-bold text-white">B2</sup>
                </Card>
                <Card title="Industrial-grade security" CustomIcon={BiSolidHardHat}>
                    Our team takes security <b className="text-white">very seriously</b>. 
                    We always operate under the assumption of <b className="text-white">total compromise</b> at all times.
                    Steps are taken to ensure that service integrity is maintained.
                    <br /> <br />
                    <span className="inline-block">
                        We utilize many security measures including:<sup className="font-bold text-white">C1</sup>
                        <CardHelper_List>
                            <CardHelper_ListItem>
                                Authentication gates at L4/L7<sup className="font-bold text-white">&#43;</sup>
                                <div className="w-fit h-fit flex items-center justify-center ml-2 gap-x-4 px-2 py-[1.5px] rounded-full bg-gray-300">
                                    <BadgeItem title="Cloudflare Access" href="https://www.cloudflare.com/zero-trust/products/access/" target="_blank">
                                        <FaCloudflare className="inline-block text-black w-4 h-4" />
                                    </BadgeItem>
                                    <BadgeItem title="Tailscale" href="https://tailscale.com" target="_blank">
                                        <Image className="inline-block w-3 h-3" src="/logos/tailscale.png" width={64} height={64} alt="Tailscale" />
                                    </BadgeItem>
                                </div>
                            </CardHelper_ListItem>
                            <CardHelper_ListItem>
                                Overlaying internal traffic<sup className="font-bold text-white">&#43;</sup>
                                <div className="w-fit h-fit flex items-center justify-center ml-2 gap-x-4 px-2 py-[1.5px] rounded-full bg-gray-300">
                                    <BadgeItem title="Wireguard" href="https://www.wireguard.com/" target="_blank">
                                        <SiWireguard className="inline-block text-black w-4 h-4" />
                                    </BadgeItem>
                                    <BadgeItem title="Teleport" href="https://goteleport.com/" target="_blank">
                                        <GiTeleport className="inline-block text-black w-4 h-4" />
                                    </BadgeItem>
                                </div>
                            </CardHelper_ListItem>
                            <CardHelper_ListItem>
                                Remote access control (SSH keys)<sup className="font-bold text-white">C2</sup>
                            </CardHelper_ListItem>
                            <CardHelper_ListItem>
                                Brute-force protection<sup className="font-bold text-white">C3</sup>
                            </CardHelper_ListItem>
                        </CardHelper_List>
                    </span>
                </Card>
                <Card title="Much flexibility" CustomIcon={BsPaintBucket}>
                    While we offer <b className="text-white">a preset of packages to choose from</b>, we understand that some may require different specifications based on their project&apos;s needs.
                    If you require only a subset of our features<sup className="font-bold text-white">D1</sup> or need a custom solution entirely<sup className="font-bold text-white">D2</sup>, we can work with you to <b className="text-white">create a plan that fits your needs.</b>
                    <br /> <br />
                    If you&apos;re interested in a custom plan<sup className="font-bold text-white">D3</sup>, please
                    {" "}
                    <Link href="https://hydride.dev/contact" target="_blank" rel="noreferrer noopener" className="inline-flex font-bold text-white hover:text-gray-300 hover:underline underline-offset-1 flex-row items-center gap-x-2">
                        contact us
                        <FaExternalLinkAlt className="text-xs" />
                    </Link>
                    . 
                </Card>
            </div>
        </section>
        <section className="flex flex-col gap-y-4 items-center px-16 py-8 text-center w-full bg-neutral-800">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-header">
                Ready to take a test drive with us?
            </h1>
            <span className="text-xl md:text-2xl font-medium font-sans max-w-[75vw] md:max-w-[65vw] 2xl:max-w-[47vw]">
                Stop worrying about your cloud infrastructure. Let us do the heavy lifting for you, so you can focus on your project.
            </span>
            <Link href="/pricing" className="inline-flex font-medium hover:font-bold text-gray-300 bg-amber-800 hover:bg-amber-900 px-4 py-2 items-center rounded-full gap-x-2">
                View our plans &amp; pricing
            </Link>

            <span className="font-sans">
                <b className="text-white font-header">Notice</b> If you were looking for our web/UI design services, they&apos;ve moved over to 
                {" "}
                <Link href="https://hydride.dev" target="_blank" rel="noreferrer noopener" className="inline-flex font-bold text-purple-300 hover:text-purple-400 hover:underline underline-offset-1 flex-row items-center gap-x-2">
                    Hydride
                    <FaExternalLinkAlt className="text-xs" />
                </Link>.
            </span>
        </section>
        <section className="flex flex-col px-16 py-8 w-full gap-y-2 text-sm">
            <span>
                <sup className="font-bold text-white">&#43;</sup> Managed feature; Halfdome does not include our configuration of these services, due to the plan&apos;s unmanaged target.
                <br />
                We may provide assistance with these services on request, but cannot configure them for you.
            </span>
            {/* Card A: Insights */}
            <span>
                <sup className="font-bold text-white">B1</sup> Digestible insights (&ldquo;Half-hour Insights&rdquo;) and live alerts (updated by the minute) are included in all plans.
                <br />
                These metrics are sent to a Discord webhook by default, but can be configured to be sent to another URL on request.
            </span>
            <span>
                <sup className="font-bold text-white">B2</sup> Our dashboard is currently in development. We will be offering it to all customers at no additional cost.
                <br />
                It will also be used to manage monthly billing and backup management (if applicable).
            </span>
            {/* Card B: Security */}
            <span>
                <sup className="font-bold text-white">C1</sup> This list is NOT exhaustive.
            </span>
            <span>
                <sup className="font-bold text-white">C2</sup> In some mission-critical cases, we may also route all remote access through an overlay (Tailscale or Wireguard).
                <br />
                In most cases, we do not consider this necessary due to the secure-by-design nature of OpenSSH.
            </span>
            <span>
                <sup className="font-bold text-white">C3</sup> Brute-force protection and/or hardening is provided through either Fail2Ban or CrowdSec.
            </span>
            {/* Card D: Flexibility */}
            <span>
                <sup className="font-bold text-white">D1</sup> Custom plans needing subsets of our features fall under our K1 plan.
            </span>
            <span>
                <sup className="font-bold text-white">D2</sup> Fully-custom solutions or plans that otherwise require more than our top-tier Denali plan fall under K2, starting at $49.99/mo.
            </span>
            <span>
                <sup className="font-bold text-white">D3</sup> Our custom plans are priced on a case-by-case basis. Contact us for more information.
            </span>
        </section>
    </>
  )
};

export const BadgeItem = ({ children, title, href, target }) => {
    const tooltipItem = (
        <Tooltip title={title} placement="top">
            {children}
        </Tooltip>
    );

    if (href) return (
        <Link href={href} target={target} rel={ target ? "noreferrer noopener" : undefined }>
            {tooltipItem}
        </Link>
    );

    return tooltipItem;
};