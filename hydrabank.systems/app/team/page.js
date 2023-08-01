import Image from "next/image";
import { Management } from "./Management";
import { Regulars } from "./Regulars";

export const TeamCard = ({ title, subtitle, img, children, socialSection, footer, badges, key }) => {
    return (
        <div key={key} className="flex flex-col gap-y-2 rounded-xl border-gray-600 border-2 h-full w-full">
            <div className="flex flex-col gap-y-2 border-b-2 border-gray-600 p-4 w-full">
                <div className="flex flex-row justify-between gap-x-4 w-full">
                    <div className="flex flex-col gap-x-2 font-header text-white w-full">
                        {
                            badges && (
                                <div className="flex flex-row items-center gap-x-2 w-full text-base py-2">
                                    {
                                        badges?.map((Badge, i) => (
                                            <span key={i}>
                                                {" "} <Badge /> {" "}
                                            </span>
                                        ))
                                    }
                                </div>
                            )
                        }
                        <h1 className="font-medium d:hover:text-gray-300 text-2xl">
                            {title}
                        </h1>
                        <h2 className="font-medium">{subtitle}</h2>
                    </div>
                    <Image src={img} width={512} height={512} className="w-16 h-16 rounded-full" alt={title} />
                </div>
                {
                    socialSection && (
                        <div className="flex flex-row items-center gap-x-2 text-xl">
                            {
                                socialSection
                            }
                        </div>
                    )
                }
            </div>
            <div className="flex flex-col py-4 p-4 pt-2 gap-y-2 justify-start h-full">
                <span>
                    {
                        children || "No description provided."
                    }
                </span>
            </div>
        </div>
    )
};


const Page = () => {
    return (
        <main className="flex flex-col items-center justify-center w-full gap-y-8 pb-16">
            <h1 className="font-bold font-header d:hover:text-gray-300 text-4xl md:text-5xl text-white pt-16 pb-8">Management</h1>
            <section className="flex flex-col gap-y-8 md:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-16 px-16">
                <Management />
                <Regulars />
            </section>
        </main>
    );
};

export default Page;