"use client";
import Link from "next/link";
import { useState } from "react";
import { BiHeart, BiMenu, BiX } from "react-icons/bi";
import Image from 'next/image';
import { useEffect } from "react";
import { NavigationItem } from "./NavigationItem.client";
import { MobileNavigation } from "./Navigation.mobile";

export const NavigationBranding = () => {
    const [ source ] = useState("/logos/hd.multicolour_short.transparent.png");
    return (
        <Link
            href="/"
            className="group flex flex-row items-center gap-x-2"
        >
            <Image src={source} width="512" height="512" className="w-16 p-2" alt="hydride logo" />
            <span className={`bg-clip-text text-transparent bg-gradient-brand font-bold text-2xl`}>hydride</span>
        </Link>
    );
};

export const Links = {
    "/": {
        title: "home",
        mobileOnly: true,
    },
    "/projects": {
        title: "projects",
        section: true,   
    },
    "/about": {
        title: "about",
    },
    "/contact": {
        title: "contact",
    }
};

export const ResponsiveNavigationContainer = ({ params }) => {
    const className = {
        mobileRoot: "flex flex-col gap-y-4 fixed top-0 left-0 bg-black bg-opacity-50",
        mobileBackdrop: "md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 min-h-screen",
        mobileContainer: "flex flex-col gap-y-4 fixed top-0 left-0 bg-black p-8 pr-16 h-full",
        desktopRoot: "md:bg-transparent md:relative",
        desktopContainer: "hidden md:flex md:flex-row md:gap-x-4 md:items-center"
    };
    
    return (
        <div className={`${className.desktopRoot} text-2xl`}>
            <MobileNavigation />
            <div className={className.desktopContainer}>
                {
                    Object.entries(Links).map(([path, { title, description, mobileOnly }], i) => {
                        if (`${path}_mobile` === "unk_mobile") return null;
                        if (mobileOnly) return null;
                        return (
                            <div key={i}>
                                <NavigationItem i={i} path={path} title={title} description={description} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

