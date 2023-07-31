"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNavigation } from "./Navigation.mobile";

export const Items = [
    {
        href: "/",
        name: "Home",
        isExternal: false
    },
    {
        href: "/pricing",
        name: "Pricing",
        isExternal: false
    },
    {
        href: "/about",
        name: "About",
        isExternal: false
    },
    {
        href: "https://hydride.dev/contact",
        name: "Contact us",
        isExternal: true
    },
];

import { FaExternalLinkAlt } from "react-icons/fa";

export const Navigation = ({ params }) => {
    const pathname = usePathname();
    return (
        <div className={`fixed flex flex-row items-center justify-between gap-x-2 w-full p-4 py-2 md:px-24 2xl:px-96 z-[1] ${pathname === "/" ? "bg-black bg-opacity-[0.75]" : "bg-transparent"}`}>
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