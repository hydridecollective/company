import { Page } from "../Fullpage.client";
import Link from "next/link";
import { BiDownArrowAlt, BiSolidNews } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export const Mission = () => {
    const [ active, setActive ] = useState(false);
    useEffect(() => {
        if (window) {
            if (window.fpPage === 1) {
                setActive(true);
            } else {
                setActive(false);
            };
        }
    }, [window.fpPage]);
    return (
        <Page page={1}>
            <section className="flex flex-col gap-y-4 w-full h-full p-8 pt-16 md:pl-12">
                <Transition
                    show={active}
                    enter="transition-opacity duration-[1250ms]"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-[750ms]"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="flex flex-col gap-y-4 w-full h-full"
                >
                    <div className="flex flex-col gap-y-2 w-full md:h-full md:pb-32 md:justify-end">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-header max-w-[72rem] lg:max-w-[72rem]">
                            We strive to be the best.
                            <br />
                            <b className="bg-gradient-brand gradient-fade-between bg-clip-text text-transparent">But it&apos;s not always about that.</b>
                        </h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl max-w-[48rem] md:max-w-[64rem]">
                            Hydride fosters an incredible community of developers, designers, and artists. We like to be the best, but we&apos;re mainly here to make cool stuff and <b>have fun</b>.
                        </h2>
                    </div>
                </Transition>
            </section>
        </Page>
    )
};