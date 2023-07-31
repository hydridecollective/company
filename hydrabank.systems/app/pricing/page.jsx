import { MdCheck, MdNotInterested } from "react-icons/md";
import { CardHelper_List, CardHelper_ListItem } from "../Card";
import { BsFillChatFill } from "react-icons/bs";

export const PricingCard = async ({ CustomIcon, key, amt, title, subtitle, children: description, header: Header, options, highlighted }) => {
    return (
        <div key={key} className={`flex flex-col gap-y-2 rounded-xl h-full w-full ${highlighted ? "border-orange-500 border-4" : "border-gray-600 border-2"}`}>
            <div className={`flex flex-col gap-y-2 ${highlighted ? "border-orange-500 border-b-4" : "border-gray-600 border-b-2"} p-8`}>
                {
                    Header && <Header />
                }
                <div className="flex flex-row items-center gap-x-2 text-white">
                    {
                        CustomIcon ? <CustomIcon className="text-xl" /> : null
                    }
                    <div className="flex flex-col gap-y-6 font-header w-full">
                        <div>
                            {
                                ((!options?.repository?.bearer && !options?.repository?.repository) || options?.showTitle) && (
                                    <h2 className={`${highlighted ? "bg-orange-400 bg-clip-text text-transparent font-bold" : "text-gray-300 font-medium"} text-2xl`}>{title}</h2>
                                )
                            }
                            {
                                subtitle && (
                                    <h3 className="font-medium text-gray-300">{subtitle}</h3>
                                )
                            }
                        </div>
                        {
                            amt && (
                                <span className={`font-medium d:hover:text-gray-300 text-5xl ${highlighted ? "bg-gradient-brand bg-clip-text text-transparent font-bold" : "text-white"}`}>
                                    {amt}
                                    <span className={`text-xl text-white`}>/mo</span>
                                </span>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-4 p-4 pt-2 gap-y-2 justify-start h-full">
                <span>
                    {
                        description || "No description provided."
                    }
                </span>
            </div>
        </div>
    );
};

export const ListCheck = ({ children }) => (
    <li>
        <span className="inline-flex flex-row items-center py-2 gap-x-2 text-white">
            <MdCheck className="text-xl text-white" />
            {children}
        </span>
    </li>
);

export const ListX = ({ children }) => (
    <li>
        <span className="inline-flex flex-row items-center py-2 gap-x-2">
            <MdNotInterested className="text-xl" />
            {children}
        </span>
    </li>
);

const Page = () => {
    return (
        <main className="flex flex-col items-center justify-center w-full p-16 gap-y-16">
            <h1 className="font-bold font-header d:hover:text-gray-300 text-4xl md:text-5xl text-white">Pricing</h1>
            <section className="flex flex-col gap-y-8 md:grid md:grid-cols-3 md:gap-y-0 gap-x-16 md:px-16">
                <PricingCard title="Halfdome" subtitle="A good cushion for unmanaged setups" amt="$11.99">
                    <section className="flex flex-col gap-y-4">
                        <div>
                            <h1 className="font-bold font-header d:hover:text-gray-300 text-xl">Setup, Security, &amp; Access</h1>
                            <ul className="list-none pt-2">
                                <ListCheck>
                                    <span>
                                        SSH daemon setup
                                        <br />(SSH keys, rate limits)
                                    </span>
                                </ListCheck>
                                <ListCheck>
                                    <span>
                                        <b>Basic</b> firewall setup 
                                        <br />(mitigation of common attacks)
                                    </span>
                                </ListCheck>
                                <ListCheck>
                                    Brute-force protection
                                </ListCheck>
                                <ListX>
                                    <span>
                                        <b>Advanced</b> firewall setup 
                                        <br />(IP whitelists, custom rules on request)
                                    </span>
                                </ListX>
                                <ListX>Included application installation</ListX>
                                <ListX>Included stack rollout</ListX>
                                <ListX>Configuration of access control and/or SSO</ListX>
                                <ListX>
                                    Overlay network setup
                                </ListX>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold font-header d:hover:text-gray-300 text-xl">Monitoring &amp; Convenience</h1>
                            <ul className="list-none pt-2">
                                <ListCheck>Cloud system monitoring &amp; alerts</ListCheck>
                                <ListCheck>
                                    <span>
                                        <b>2</b> backups per month 
                                        <br />(bi-weekly or otherwise)
                                    </span>
                                </ListCheck>
                                <ListX>Managed updates</ListX>

                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold font-header d:hover:text-gray-300 text-xl">Support</h1>
                            <ul className="list-none pt-2">
                                <ListCheck>
                                    <span>
                                        <b>Limited</b> support (48hr, limited support)<sup className="font-bold text-white">&#43; <BsFillChatFill className="inline-block" /></sup>
                                    </span>
                                </ListCheck>
                                <ListX>Routine management and maintenance</ListX>
                                <ListX>On-demand disaster recovery response</ListX>
                                <ListX>SLA on request</ListX>
                            </ul>
                        </div>
                    </section>
                </PricingCard>
                <PricingCard title="Whitney" subtitle="Hydrabank's flagship managed plan" amt="$24.99" highlighted>
                <section className="flex flex-col gap-y-4">
                        <div>
                            <h1 className="font-bold font-header d:hover:text-gray-300 text-xl">Setup, Security, &amp; Access</h1>
                            <ul className="list-none pt-2">
                                <ListCheck>
                                    <span>
                                        SSH daemon setup
                                        <br />(SSH keys, rate limits)
                                    </span>
                                </ListCheck>
                                <ListCheck>
                                    <span>
                                        <b>Basic</b> firewall setup 
                                        <br />(mitigation of common attacks)
                                    </span>
                                </ListCheck>
                                <ListCheck>
                                    Brute-force protection
                                </ListCheck>
                                <ListCheck>
                                    <span>
                                        <b>Advanced</b> firewall setup 
                                        <br />(IP whitelists, custom rules on request)
                                    </span>
                                </ListCheck>
                                <ListCheck>Included application installation</ListCheck>
                                <ListX>Included stack rollout</ListX>
                                <ListX>Configuration of access control and/or SSO</ListX>
                                <ListX>
                                    Included overlay network setup
                                </ListX>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold font-header d:hover:text-gray-300 text-xl">Monitoring &amp; Convenience</h1>
                            <ul className="list-none pt-2">
                                <ListCheck>Cloud system monitoring &amp; alerts</ListCheck>
                                <ListCheck>
                                    <span>
                                        <b>4</b> backups per month 
                                        <br />(weekly or otherwise)
                                    </span>
                                </ListCheck>
                                <ListCheck>Managed updates</ListCheck>

                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold font-header d:hover:text-gray-300 text-xl">Support</h1>
                            <ul className="list-none pt-2">
                                <ListCheck>
                                    <span>
                                        <b>Standard</b> support (24hr)<sup className="font-bold text-white"><BsFillChatFill className="inline-block" /></sup>
                                    </span>
                                </ListCheck>
                                <ListCheck>Routine management and maintenance</ListCheck>
                                <ListX>On-demand disaster recovery response</ListX>
                                <ListX>SLA on request</ListX>
                            </ul>
                        </div>
                    </section>
                </PricingCard>
                <PricingCard title="Denali" subtitle="Our premier managed solution, with full access control" amt="$32.99">
                    <section className="flex flex-col gap-y-4">
                        <div>
                            <h1 className="font-bold font-header d:hover:text-gray-300 text-xl">Setup, Security, &amp; Access</h1>
                            <ul className="list-none pt-2">
                                <ListCheck>
                                    <span>
                                        SSH daemon setup
                                        <br />(SSH keys, rate limits)
                                    </span>
                                </ListCheck>
                                <ListCheck>
                                    <span>
                                        <b>Basic</b> firewall setup 
                                        <br />(mitigation of common attacks)
                                    </span>
                                </ListCheck>
                                <ListCheck>
                                    Brute-force protection
                                </ListCheck>
                                <ListCheck>
                                    <span>
                                        <b>Advanced</b> firewall setup 
                                        <br />(IP whitelists, custom rules on request)
                                    </span>
                                </ListCheck>
                                <ListCheck>Included application installation</ListCheck>
                                <ListCheck>Included stack rollout</ListCheck>
                                <ListCheck>Configuration of access control and/or SSO</ListCheck>
                                <ListCheck>
                                    Overlay network setup
                                </ListCheck>
                            </ul>
                        </div>
                        <div>
                            <h1 className="font-bold font-header d:hover:text-gray-300 text-xl">Monitoring &amp; Convenience</h1>
                            <ul className="list-none pt-2">
                                <ListCheck>Cloud system monitoring &amp; alerts</ListCheck>
                                <ListCheck>
                                    <span>
                                        <b>2</b> backups per month 
                                        <br />(bi-weekly or otherwise)
                                    </span>
                                </ListCheck>
                                <ListCheck>Managed updates</ListCheck>

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
                                <ListX>SLA on request</ListX>
                            </ul>
                        </div>
                    </section>
                </PricingCard>
            </section>
            <section className="flex flex-col px-16 py-8 w-full gap-y-2 text-sm">
                <span>
                    <sup className="font-bold text-white">&#43;</sup> We may not be able to assist with certain issues depending on your setup due to Halfdome&apos;s unmanaged nature.
                    <br />
                    We will do our best to assist with any issues you may have, but we cannot guarantee that we will be able to resolve them.
                </span>
                <span>
                    <sup className="font-bold text-white">
                        <BsFillChatFill className="inline-block" />
                    </sup> We can&apos;t guarantee response times for support, but we will do our best to respond within the given time frame.
                </span>
            </section>
        </main>
    )
};

export default Page;