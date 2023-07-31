import { ListX, ListCheck, PricingCard, ListEntry, ListUnknown } from "./PricingCard";
import { BsFillChatFill } from "react-icons/bs";
export const EnterprisePlans = () => {
    return (
        <div className="flex flex-col gap-y-4 md:gap-y-8">
            <h1 className="font-bold font-header d:hover:text-gray-300 text-2xl md:text-3xl text-white text-left md:px-16 lg:px-32 xl:px-64">K-series plans</h1>
            <section className="flex flex-col gap-y-8 md:grid lg:grid-cols-2 gap-x-16 md:px-16 lg:px-32 xl:px-64">
                <PricingCard title="K1" subtitle="Build your own plan based on what you need" kSeries productName="Hydrabank for Business" amt="$19.99">
                    <section className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <h1 className="font-bold font-header d:hover:text-gray-300 text-xl">What's included</h1>
                            <span className="text-white">
                                Select features from our Project Plans to build a solution that&apos;s right for your business.
                            </span>
                        </div>
                        <div>
                            <h1 className="font-bold font-header d:hover:text-gray-300 text-xl">Perfect for</h1>
                            <ul className="list-none pt-2 text-white">
                                <ListEntry>Projects and businesses who only need a subset of our solutions</ListEntry>
                                <ListEntry>Businesses needing management on a budget</ListEntry>
                                <ListEntry>Clients who only need hardware without full management</ListEntry>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold font-header d:hover:text-gray-300 text-xl">Support</h1>
                            <ul className="list-none pt-2">
                                <ListCheck>
                                    <span>
                                        <b>Priority</b> support (&lt;12hr)<sup className="font-bold text-white"><BsFillChatFill className="inline-block" /></sup>
                                    </span>
                                </ListCheck>
                                <ListUnknown tooltip={"Depending on options chosen"}>Routine management and maintenance</ListUnknown>
                                <ListUnknown tooltip={"Depending on options chosen"}>On-demand disaster recovery response</ListUnknown>
                                <ListX>SLA on request</ListX>
                            </ul>
                        </div>
                    </section>
                </PricingCard>
                <PricingCard title="K2" subtitle="The highest tier, for big business" productName="Hydrabank for Enterprise" kSeries amt="$49.99">
                    <section className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-2">
                            <h1 className="font-bold font-header d:hover:text-gray-300 text-xl">What's included</h1>
                            <span className="text-white">
                                Need a custom solution, or something that isn&apos;t otherwise included in K1? 
                                K2 includes everything from K1 and our Project Plans, plus any other custom services from us that you may need.
                            </span>
                        </div>
                        <div>
                            <h1 className="font-bold font-header d:hover:text-gray-300 text-xl">Perfect for</h1>
                            <ul className="list-none pt-2 text-white">
                                <ListEntry>Clients in need of managed hardware or hosted solutions</ListEntry>
                                <ListEntry>Large businesses with advanced needs</ListEntry>
                                <ListEntry>Mission-critical operations</ListEntry>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold font-header d:hover:text-gray-300 text-xl">Support</h1>
                            <ul className="list-none pt-2">
                                <ListCheck>
                                    <span>
                                        <b>Priority</b> support (&lt;12hr)<sup className="font-bold text-white"><BsFillChatFill className="inline-block" /></sup>
                                    </span>
                                </ListCheck>
                                <ListCheck>Routine management and maintenance</ListCheck>
                                <ListCheck>On-demand disaster recovery response</ListCheck>
                                <ListCheck>SLA on request</ListCheck>
                            </ul>
                        </div>
                    </section>
                </PricingCard>
            </section>
        </div>
    );
};