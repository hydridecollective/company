import Image from 'next/image'
import Link from 'next/link';
import { BiBugAlt, BiLinkExternal, BiSolidNews } from 'react-icons/bi';
import { Fullpage } from './Fullpage.client';

export default function Home() {
    return (
        <main className="mt-8">
            <Fullpage />
        </main>
    );
};