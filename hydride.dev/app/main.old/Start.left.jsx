import { Page } from "../Fullpage.client";
import Link from "next/link";
import { BiDownArrowAlt, BiSolidNews } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export const Start = () => {
    const [ active, setActive ] = useState(false);
    useEffect(() => {
        if (window) {
            if (window.fpPage === 0) {
                setActive(true);
            } else {
                setActive(false);
            };
        }
    }, []);
    return (
        <Page page={1}>
            <section className="flex flex-col gap-y-4 w-full h-full p-8 pt-32 md:pl-12">
                <div className="h-fit w-fit rounded-md bg-gradient-to-tr from-[#0b7ec1] to-[#6ebeed] p-1">
                    <Link href="https://new.hydride.space" target="_blank" rel="noreferrer noopener" className="flex flex-row gap-x-2 h-full w-full items-center font-header justify-center bg-hydride-dark p-2 text-sm rounded-md">
                        <BiSolidNews className="text-2xl text-[#6ebeed]" />
                        <span className="uppercase tracking-widest"><b className="tracking-[0.2em] hidden">Notice</b> New Hydride, now in alpha</span>
                    </Link>
                </div>
                <div className="flex flex-col gap-y-2 w-full justify-end">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-header max-w-[48rem] lg:max-w-[60rem]">
                        Sometimes, we
                        <b className="bg-gradient-muted bg-clip-text text-transparent"> don&apos;t know </b> 
                        what we&apos;re doing.
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl max-w-[48rem] md:max-w-[64rem]">
                        But if you let our acorn brains think for a bit, we&apos;ll make some of the 
                        <b className="bg-gradient-brand gradient-fade-between bg-clip-text text-transparent"> best freaking stuff you&apos;ve ever seen. </b>
                    </h2>
                </div>
                <Transition
                    show={active}
                    enter="transition-opacity duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <span className="flex w-full absolute gap-x-2 bottom-4 left-0 justify-center items-center tracking-widest uppercase font-bold">
                        <BiDownArrowAlt className="text-4xl" /> Scroll To Continue
                    </span>
                </Transition>
            </section>
        </Page>
    )
};