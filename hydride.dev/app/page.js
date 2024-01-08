"use client";
import Link from "next/link";
import { BiAlarmExclamation, BiCheck, BiCommand, BiDownArrowAlt, BiSleepy, BiSolidNews, BiWrench } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

const Home = ({ fullpage }) => {
    const [ active, setActive ] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => {
            setActive(true);
        }, 250);
        return () => clearTimeout(t);
    }, []);
    return (
        <section className="flex flex-col gap-y-4 w-full h-full p-8 items-center text-center">
            <Transition
                show={active}
                enter="transition-opacity duration-[1250ms]"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-[750ms]"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="flex flex-col gap-y-6 w-full h-full items-center text-center"
            >
                <div className="h-fit w-fit rounded-md bg-gradient-to-tr from-[#0b7ec1] to-[#6ebeed] p-1">
                    <Link href="https://new.hydride.space" target="_blank" rel="noreferrer noopener" className="flex flex-row gap-x-2 h-full w-full items-center font-header justify-center bg-hydride-dark p-2 text-sm rounded-md">
                        <BiSolidNews className="text-2xl text-[#6ebeed]" />
                        <span className="uppercase tracking-widest"><b className="tracking-[0.2em] hidden">Notice</b> New Hydride, now in alpha</span>
                    </Link>
                </div>
                <div className="flex flex-col gap-y-4 w-full justify-end md:items-center">
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
                {
                    fullpage ? (
                        <span className="flex w-full absolute gap-x-2 bottom-16 left-0 justify-center items-center tracking-widest uppercase font-bold">
                            <BiDownArrowAlt className="text-4xl" /> Scroll To Continue
                        </span>
                    ) : (
                        <div className="flex flex-row items-center justify-center gap-x-4">
                            <Link href="/about" className="btn tracking-widest bg-purple-600 hover:bg-purple-700 text-white">Who we are</Link>
                            <Link href="/projects" className="btn tracking-widest bg-purple-600 hover:bg-purple-700 text-white">Our projects</Link>
                            <Link href="/contact" className="btn tracking-widest bg-purple-600 hover:bg-purple-700 text-white">Hire us</Link>
                        </div>
                    )
                }
                <div className="mockup-code bg-neutral-800 md:mt-8 mb-4 text-primary-content text-left max-w-[32rem] w-full drop-shadow-2xl">
                    <pre data-prefix="$"><code>
                        make me something please
                    </code></pre>
                    <pre data-prefix=">" className="text-warning"><code>
                        <BiSleepy className="inline-block text-2xl" /> we&apos;re building something for you [21&#37;]
                    </code></pre>
                    <pre data-prefix=">" className="text-neutral-400"><code>
                        <BiCommand className="inline-block text-2xl" /> testing out what we&apos;ve done.. [46&#37;]
                    </code></pre>
                    <pre data-prefix=">" className="text-error"><code>
                        <BiAlarmExclamation className="inline-block text-2xl" /> we found a mistake! [72&#37;]
                    </code></pre>
                    <pre data-prefix=">" className="text-fuchsia-500"><code>
                        <BiWrench className="inline-block text-2xl" /> 1 sec, polishing up our work [95&#37;]
                    </code></pre>
                    <pre data-prefix=">" className="text-success"><code>
                        <BiCheck className="inline-block text-2xl" /> success! an incredible design has been made.
                    </code></pre>
                    <pre data-prefix=">" className="text-success"><code>
                        check it out: <Link href="https://hydride.space" target="_blank" rel="noreferrer noopener" className="hover:underline">https://hydride.space</Link>
                    </code></pre>
                </div>
            </Transition>
        </section>
    )
};

export default Home;