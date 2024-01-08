import Image from 'next/image';
import Link from 'next/link';
import { ClosingFAQ } from './Closing';

export default function Home() {
    return (
        <>
            <div className="flex flex-col md:items-center md:justify-center w-full h-full min-h-screen text-white">
                <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-[0.35] backdrop-blur-sm z-[2]" />
                <div className="flex flex-col gap-y-2 px-12 py-4 md:p-4 rounded-xl bg-black bg-opacity-50 z-[3] font-bold max-w-3xl">
                    <span className="text-2xl">Thank you for choosing Hydrabank.</span>
                    <p className="text-lg font-medium">
                        On the 1st of November 2023, the Hydride Collective stopped accepting new clients under the Hydrabank brand.
                        Going into 2024, we will be doubling down on our commitment to our design and development consultancies.
                        <br />
                        <br />
                        While we are no longer accepting new clients under our IaaS (Infrastructure as a Service) and infrastructure consultation services,
                        we continue to support existing clients at Hydride Infrastructure.
                    </p>
                    <ClosingFAQ />
                </div>
                <Image alt="Earth from the ISS (credit NASA)" className="absolute top-0 left-0 object-cover w-full h-full z-[1]" src={`/bgs/nasa-Q1p7bh3SHj8-unsplash.jpg`} width="1920" height="1080" />
            </div>
        </>
    )
};