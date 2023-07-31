import { ListX, ListCheck, PricingCard } from "./PricingCard";
import { BsFillChatFill } from "react-icons/bs";
export const ProjectPlans = () => {
    return (
        <div className="flex flex-col gap-y-4 md:gap-y-8">
            <h1 className="font-bold font-header d:hover:text-gray-300 text-2xl md:text-3xl text-white text-left md:px-16">Project plans</h1>
            <section className="flex flex-col gap-y-8 md:grid lg:grid-cols-2 xl:grid-cols-3 gap-x-16 md:px-16">
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
                            </ul>
                        </div>
                    </section>
                </PricingCard>
                <PricingCard title="Denali" subtitle="Our premier managed solution, with full access control" amt="$35.99">
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
                                        <b>8</b> backups per month 
                                        <br />(twice weekly or otherwise)
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
                            </ul>
                        </div>
                    </section>
                </PricingCard>
            </section>
        </div>
    );
};