"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const NavigationItem = ({ path, title, description, section, i: key }) => {
    const pathname = usePathname();
    const active = section ? pathname.startsWith(path) : pathname === path;
    return (
        <Link key={key} href={path} className={`font-header flex flex-row items-center gap-x-2 ${active ? "text-white font-bold" : "hover:text-white hover:font-bold text-gray-300 font-medium"} transition ease-in-out duration-[750ms]`}>
            {title}
        </Link>
    )
};