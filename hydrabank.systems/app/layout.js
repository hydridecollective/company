import { BiInfoCircle } from 'react-icons/bi';
import { Footer } from './Footer';
import { Navigation } from './Navigation';
import './globals.css'
import { Golos_Text, Rubik, Space_Mono, Inter } from 'next/font/google'
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });
const rubik = Rubik({ subsets: ['latin'], variable: "--font-rubik" });
const spacemono = Space_Mono({ subsets: ['latin'], variable: "--font-spacemono", weight: ["400", "700"] });
const golos = Golos_Text({ subsets: ['cyrillic'], variable: "--font-golos" });

export const metadata = {
  title: 'Hydrabank',
  description: 'Offering competitive cloud system consultation services. Part of the Hydride Collective.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${inter.variable} ${golos.variable} ${rubik.variable} ${spacemono.variable} font-sans flex flex-col `}>
            <div className="sticky top-0 left-0 z-[5]">
                <div className="flex items-center md:justify-center gap-x-4 w-full p-4 bg-gray-900">
                    <span className="">
                        <BiInfoCircle className="text-2xl inline-block text-white mr-2" />
                        Hydrabank&apos;s consultation services are now under the <b>Hydride</b> brand. Infrastructure services remain at Hydrabank at this time.
                        {" "}
                        <Link href="https://hydride.dev" target="_blank" rel="noreferrer noopener" className="inline-flex font-bold text-white hover:text-gray-300 hover:underline underline-offset-1 flex-row items-center gap-x-2">
                            Learn more
                            <FaExternalLinkAlt className="text-xs" />
                        </Link>
                    </span>
                </div>
                <Navigation />
            </div>
            <main className="min-h-screen z-[1]">
                {children}
            </main>
            <Footer />
        </body>
    </html>
  )
};
