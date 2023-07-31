import { BsFillChatFill } from "react-icons/bs";
import { ProjectPlans } from "./ProjectPlans";
import { EnterprisePlans } from "./EnterprisePlans";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";



const Page = () => {
    return (
        <main className="flex flex-col items-center justify-center w-full gap-y-8">
            <h1 className="font-bold font-header d:hover:text-gray-300 text-4xl md:text-5xl text-white py-16">Pricing</h1>
            <div className="flex flex-col gap-y-16 px-16">
                <ProjectPlans />
                <EnterprisePlans />
            </div>
            <section className="flex flex-col gap-y-4 items-center px-16 py-8 text-center w-full bg-neutral-800">
                <h1 className="text-3xl md:text-4xl font-bold text-white font-header">
                    Ready to take a test drive with us?
                </h1>
                <span className="text-xl md:text-2xl font-medium font-sans max-w-[75vw] md:max-w-[65vw] 2xl:max-w-[47vw]">
                    Get in touch to discuss your needs and determine if we&apos;re the right fit for you.
                </span>
                <Link href="https://hydride.dev/contact" target="_blank" rel="noreferrer noopener" className="inline-flex font-medium hover:font-bold text-gray-300 bg-amber-800 hover:bg-amber-900 px-4 py-2 items-center rounded-full gap-x-2">
                    Contact us to get started
                    <FaExternalLinkAlt className="text-xs" />
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
            <section className="flex flex-col px-16 pb-8 w-full gap-y-2 text-sm">
                <span>
                    <sup className="font-bold text-white">&#43;</sup> We may not be able to assist with certain issues depending on your setup due to Halfdome&apos;s unmanaged nature.
                    <br />
                    We will do our best to assist with any issues you may have, but we cannot guarantee that we will be able to resolve them.
                </span>
                <span>
                    <sup className="font-bold text-white">
                        <BsFillChatFill className="inline-block" />
                    </sup> We can&apos;t guarantee response times for support, but we will do our best to respond within the given time frame.
                </span>
            </section>
        </main>
    )
};

export default Page;