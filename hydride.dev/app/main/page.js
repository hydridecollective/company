import { redirect } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link';
import { BiBugAlt, BiLinkExternal, BiSolidNews } from 'react-icons/bi';

export default function Home() {
    return redirect("/");
};