import Image from 'next/image'
import { BiBugAlt, BiSolidNews } from 'react-icons/bi';

export default function Home() {
    return (
        <>
            <div className="flex flex-col gap-y-4 w-full items-start md:items-center mt-8 md:mt-16">
                <div>
                    <div class="h-fit w-fit rounded-md bg-green-500 p-1">
                        <div class="flex flex-row gap-x-2 h-full w-full items-center justify-center bg-hydride-dark p-2 text-sm rounded-md">
                            <BiSolidNews className="text-2xl" />
                            <span className="uppercase tracking-widest"><b className="tracking-[0.2em] hidden">Notice</b> New Hydride, now in alpha</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2 md:items-center md:text-center">
                    <h1 className="text-4xl font-medium">
                        Usually, we 
                        <b className="bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 gradient-fade-between bg-clip-text text-transparent"> don&apos;t know </b> 
                        what we&apos;re doing.
                    </h1>
                    <h2 className="text-xl max-w-[600px] md:max-w-xl">
                        But if you let our acorn brains think for a bit, we&apos;ll make some of the 
                        <b className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent"> best freaking stuff you&apos;ve ever seen. </b>
                    </h2>
                </div>
            </div>
        </>
    );
}
