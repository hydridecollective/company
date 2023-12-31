"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNavigation } from "./Navigation.mobile";

export const Items = [
    {
        href: "https://hydride.dev/contact",
        name: "Visit the Hydride Collective",
        isExternal: true
    },
];

import { FaExternalLinkAlt } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";

export const Navigation = ({ params }) => {
    const pathname = usePathname();
    return (
        <div className={`flex flex-row items-center justify-between gap-x-2 w-full p-4 py-2 md:px-24 2xl:px-96 z-[1]`}>
            <Link href="/" className="flex flex-row items-center gap-x-2 p-[1px] rounded-full md:rounded-xl hover:bg-neutral-800 transition ease-in-out duration-500">
                <Image src="/logos/hb.short.transparent.png" width={64} height={64} className="w-12" alt="Hydrabank" />
            </Link>
            <section className="hidden md:flex flex-row items-center gap-x-2">
                {
                    Items.map((item, index) => (
                        <div key={index}>
                            <NavigationItem href={item?.href || "/#"} isExternal={item?.isExternal}>
                                {item?.name || "Untitled"}
                                {
                                    item?.isExternal && (
                                        <FaExternalLinkAlt className="text-xs" />
                                    )
                                }
                            </NavigationItem>
                        </div>
                    ))
                }
            </section>
            <MobileNavigation />
        </div>
    )
};

export const NavigationItem = ({ href, children, isExternal, key: index }) => {
    const pathname = usePathname();
    const className = {
        "default": `${pathname === "/" ? "hover:bg-gray-400 hover:bg-opacity-[0.15]" : "hover:bg-neutral-800"} font-medium`,
        "active": `${pathname === "/" ? "bg-gray-400 bg-opacity-[0.15]" : "bg-neutral-800"} font-bold text-white`,
    };

    const targetAttributes = isExternal ? {
        target: "_blank",
        rel: "noopener noreferrer"
    } : {};

    return (
        <Link key={index} {...{ ...targetAttributes, href }} className={
            (pathname === href ? className.active : className.default)
            + " " +
            "flex flex-row items-center gap-x-2 px-4 py-2 rounded-xl font-medium font-golos transition ease-in-out duration-500"
        }>
            {children}
        </Link>
    );
};

export const Top = () => {
    const pathname = usePathname();
    return (
        <div className={`mb-4 md:mb-0 md:fixed top-0 left-0 w-full z-[5]`}>
            <div className="hidden s:flex items-center md:justify-center gap-x-4 w-full p-4 bg-yellow-600 text-white">
                <span className="">
                    <BiInfoCircle className="text-2xl inline-block text-white mr-2" />
                    The Hydride Collective no longer offers infrastructure consultation under the Hydrabank brand.
                    {" "}
                    <Link href="https://hydride.dev" target="_blank" rel="noreferrer noopener" className="inline-flex font-bold text-white hover:text-gray-300 hover:underline underline-offset-1 flex-row items-center gap-x-2">
                        Learn more
                        <FaExternalLinkAlt className="text-xs" />
                    </Link>
                </span>
            </div>
            <Navigation />
        </div>
    );
};