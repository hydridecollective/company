"use client";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Items } from "./Navigation";

import { BiMenuAltLeft, BiX } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";

export const MobileNavigation = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ isParentOpen, setIsParentOpen ] = useState(false);
    useEffect(() => {
        if (!isOpen && isParentOpen) {
            setTimeout(() => {
                setIsParentOpen(false);
            }, 500);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen && isParentOpen) {
            setTimeout(() => {
                setIsOpen(true);
            }, 500);
        };
    }, [isParentOpen]);
    return (
        <>
            <button className={`${isOpen && "hidden"} ${(!isOpen && !isParentOpen) && "md:hidden flex"} flex-row items-center gap-x-2 p-2 rounded-full hover:bg-neutral-800`} onClick={() => setIsParentOpen(true)}>
                <BiMenuAltLeft className="text-2xl" />
            </button>
            <Transition
                show={isParentOpen}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className={`flex-col fixed top-0 left-0 z-[50] bg-black bg-opacity-[0.35] w-full h-full`}
            >
                <CloseNavigationButton isOpen={isOpen} setIsOpen={setIsOpen} />

                <Transition
                    className="flex-col fixed top-0 left-0 z-[2] w-full h-full"
                    show={isOpen}
                    // swipe from left to open, swipe back left to close
                    enter="transition ease-in-out duration-500 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-500 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                    
                >
                    <div className="w-full h-full z-[2]" onClick={() => setIsOpen(false)} />
                    <InnerMobileNavigation setIsOpen={setIsOpen} />
                </Transition>
            </Transition>
        </>
    );
};

export const InnerMobileNavigation = ({ setIsOpen }) => {
    return (
        <div className="p-16 pl-8 fixed top-0 left-0 flex flex-col gap-y-2 z-[3] bg-black h-full">
            <span className="text-xl font-bold text-gray-300 font-header uppercase tracking-widest">Navigation</span>
            <section className="flex flex-col gap-y-2">
                {
                    Items.map((item, index) => (
                        <div key={index}>
                            <MobileItem href={item?.href || "/#"} setIsOpen={setIsOpen} isExternal={item?.isExternal}>
                                {item?.name || "Untitled"}
                                {
                                    item?.isExternal && (
                                        <FaExternalLinkAlt className="text-xs" />
                                    )
                                }
                            </MobileItem>
                        </div>
                    ))
                }
            </section>
        </div>
    );
};

export const CloseNavigationButton = ({ isOpen, setIsOpen }) => {
    return (
        <Transition
            show={isOpen}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="z-[5] fixed top-4 right-4"
        >
            <button className={`flex flex-row items-center gap-x-2 p-2 rounded-full hover:bg-neutral-800 z-[5]`} onClick={() => setIsOpen(false)}>
                <BiX className="text-3xl" />
            </button>
        </Transition>
    );
};

export const MobileItem = ({ href, children, isExternal, key: index, setIsOpen }) => {
    const pathname = usePathname();
    const className = {
        "default": "hover:text-white font-medium",
        "active": "font-bold text-white",
    };

    const targetAttributes = isExternal ? {
        target: "_blank",
        rel: "noopener noreferrer"
    } : {};

    if (pathname === href) {
        return (
            <button key={index} className={
                (pathname === href ? className.active : className.default)
                + " " +
                "group flex flex-row items-center gap-x-2 rounded-lg text-xl font-golos tracking-wider transition ease-in-out duration-500"
            } onClick={() => pathname === href && setIsOpen(false)}>
                <ItemBar isActive={pathname === href} />
                {children}
            </button>
        );
    }

    return (
        <Link 
            key={index} 
            className={
                (pathname === href ? className.active : className.default)
                + " " +
                "group flex flex-row items-center gap-x-2 rounded-lg text-xl font-golos tracking-wider transition ease-in-out duration-500"
            }
            {...{ ...targetAttributes, href }}
            onClick={() => setIsOpen(false)}
        >
            <ItemBar isActive={pathname === href} />
            {children}
        </Link>
    );
};

export const ItemBar = ({ isActive }) => (
    <div className={`w-[2px] py-4 h-full ${isActive ? "bg-white" : "bg-transparent group-hover:bg-gray-300 transition ease-in-out duration-500"} rounded-full`} />
);