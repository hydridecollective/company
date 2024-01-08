import { Footer } from './Footer';
import { Top } from './Navigation';
import './globals.css';
import './discord.css';
import DiscordWidget from './DiscordWidget';
import { Golos_Text, Rubik, Space_Mono, Inter } from 'next/font/google';
import { ClientCssProvider } from './MUI';

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });
const rubik = Rubik({ subsets: ['latin'], variable: "--font-rubik" });
const spacemono = Space_Mono({ subsets: ['latin'], variable: "--font-spacemono", weight: ["400", "700"] });
const golos = Golos_Text({ subsets: ['cyrillic'], variable: "--font-golos" });

export const metadata = {
    title: 'Hydrabank',
    description: 'Offering competitive cloud system consultation services. Part of the Hydride Collective.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <ClientCssProvider>
                <body className={`${inter.variable} ${golos.variable} ${rubik.variable} ${spacemono.variable} font-sans flex flex-col`}>
                    <Top />
                    <main className="z-[1]">
                        {children}
                    </main>
                    <Footer />
                </body>
            </ClientCssProvider>
        </html>
    )
};
