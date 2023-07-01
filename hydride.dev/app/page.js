import Image from 'next/image'
import Link from 'next/link';
import { BiBugAlt, BiLinkExternal, BiSolidNews } from 'react-icons/bi';

export default function Home() {
    return (
        <>
            <div className="flex flex-col gap-y-4 w-full items-start amd:items-center mt-8 md:mt-16">
                <div>
                    <div className="h-fit w-fit rounded-md bg-gradient-to-tr from-[#0b7ec1] to-[#6ebeed] p-1">
                        <Link href="https://new.hydride.space" target="_blank" rel="noreferrer noopener" className="flex flex-row gap-x-2 h-full w-full items-center font-header justify-center bg-hydride-dark p-2 text-sm rounded-md">
                            <BiSolidNews className="text-2xl text-[#6ebeed]" />
                            <span className="uppercase tracking-widest"><b className="tracking-[0.2em] hidden">Notice</b> New Hydride, now in alpha</span>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2 amd:items-center amd:text-center">
                    <h1 className="text-5xl lg:text-6xl font-medium font-header max-w-[48rem] lg:max-w-[60rem]">
                        Usually, we
                        <b className="bg-gradient-muted bg-clip-text text-transparent"> don&apos;t know </b> 
                        what we&apos;re doing.
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl max-w-[48rem] md:max-w-[64rem]">
                        But if you let our acorn brains think for a bit, we&apos;ll make some of the 
                        <b className="bg-gradient-brand gradient-fade-between bg-clip-text text-transparent"> best freaking stuff you&apos;ve ever seen. </b>
                    </h2>
                </div>
            </div>
        </>
    );
};