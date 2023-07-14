import { Project } from "./Project";
import { Clients, Projects, Repositories } from "./Projects";
import { Providers } from "./Providers";

export default async function Page() {
    return (
        <section className="flex flex-col gap-y-8 w-full h-full p-16 pt-8">
            <div className="flex flex-col gap-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-header max-w-[72rem] lg:max-w-[72rem]">
                    <b className="bg-gradient-brand gradient-fade-between bg-clip-text text-transparent">Projects</b>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl max-w-[48rem] font-medium">
                    At Hydride, we make things. <b>Many</b> things.
                    <br />
                    Most of our work&apos;s private, but here&apos;s the highlights.
                </h2>
            </div>
            <div className="flex flex-col gap-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
                    <b className="bg-gradient-to-tr from-purple-400 to-blue-500 bg-clip-text text-transparent">Collective projects &amp; recent clients</b>
                </h2>
                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-y-4 md:gap-8 w-full">           
                    {
                        Projects.concat(Clients).map(p => {
                            return (
                                <Project
                                    key={p.name}
                                    {
                                        ...p
                                    }
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
                    <b className="bg-gradient-to-tr from-purple-400 to-blue-500 bg-clip-text text-transparent">Other cool projects</b>
                </h2>
                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-y-4 md:gap-8 w-full">           
                    {
                        Repositories.map(p => {
                            return (
                                <Project
                                    key={p.name}
                                    {
                                        ...p
                                    }
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
};