import './globals.css'
import { Inter, Golos_Text, Rubik } from 'next/font/google'
import { NavigationBranding, ResponsiveNavigationContainer } from './Navigation.client';
import Link from 'next/link';
import { BiHeart, BiLogoGithub, BiLogoTwitter, BiSolidEnvelope } from 'react-icons/bi';

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });
const rubik = Rubik({ subsets: ['latin'], variable: "--font-rubik" });
const golos = Golos_Text({ subsets: ['cyrillic'], variable: "--font-golos" });

export const metadata = {
  title: 'hydride',
  description: 'A collective of passionate developers, designers, and creators, building some of the coolest things you\'ve ever seen.',
};

export default function RootLayout({ children, params }) {
  return (
    <html lang="en" className="bg-hydride-dark">
        <head>

        </head>
        <body className={`${inter.variable} ${golos.variable} ${rubik.variable} font-sans flex flex-col gap-y-4`}>
            <nav className="w-full flex flex-row items-center justify-between p-8 pb-0">
                <NavigationBranding />
                <div className="flex flex-row items-center gap-x-2">
                    <ResponsiveNavigationContainer params={params} />
                </div>
            </nav>
            <main className="flex flex-col gap-y-2 w-full h-full min-h-screen pb-2">
                {children}
            </main>
            <Footer />
        </body>
    </html>
  )
}


export const Footer = () => {
    return (
        <footer className="w-full p-8 pt-12 flex items-center justify-evenly bg-black">
            <div className="flex flex-col gap-y-4 items-center">
                <div className="flex flex-row items-center gap-x-6 text-center">
                    <Link href="https://github.com/hydridecollective" target="_blank" rel="noreferrer noopener" className="hover:text-gray-300 text-white text-4xl">
                        <BiLogoGithub />
                    </Link>
                    <Link href="mailto:admin@hydride.space" target="_blank" rel="noreferrer noopener" className="hover:text-gray-300 text-white text-4xl">
                        <BiSolidEnvelope />
                    </Link>
                    <Link href="/#" target="_blank" rel="noreferrer noopener" className="hover:text-gray-300 text-white text-4xl">
                        <BiLogoTwitter />
                    </Link>
                </div>
                <div className="text-gray-300 text-base font-bold text-center">
                    <span>
                        2023, hydride collective
                    </span>
                    <span className="flex flex-row items-center gap-x-1">
                        made with <BiHeart className="inline-block text-red-500" /> in the EU &amp; the US
                    </span>
                </div>
            </div>
        </footer>
    );
}