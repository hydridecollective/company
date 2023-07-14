import './globals.css'
import { Inter, Golos_Text, Rubik } from 'next/font/google'
import { NavigationBranding, ResponsiveNavigationContainer } from './Navigation.client';
import { Footer } from './Footer';

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });
const rubik = Rubik({ subsets: ['latin'], variable: "--font-rubik" });
const golos = Golos_Text({ subsets: ['cyrillic'], variable: "--font-golos" });

export const runtime = "edge";

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
};