import Image from 'next/image'
import Link from 'next/link';
import { BiBugAlt, BiLinkExternal, BiSolidNews } from 'react-icons/bi';

export default function Home() {
    return (
        <>
            <div className="flex flex-col gap-y-4 w-full items-start amd:items-center mt-8 md:mt-16">
                <div className="flex flex-col gap-y-2 amd:items-center amd:text-center">
                    <h1 className="text-5xl lg:text-6xl font-medium font-header max-w-[48rem] lg:max-w-[60rem]">
                        We make
                        <b className="bg-gradient-brand gradient-fade-between bg-clip-text text-transparent"> cool things.</b> 
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl max-w-[48rem] md:max-w-[64rem]">
                        Managing servers to creating incredibly unique web experiences, we do it all. (Only if we want to, of course.)
                    </h2>
                </div>
            </div>
        </>
    );
};