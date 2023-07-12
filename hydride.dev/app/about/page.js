import Content from "./Content.mdx";

export default async function Page() {
    return (
        <section className="flex flex-col gap-y-6 w-full h-full p-16 pt-8">
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-header lg:max-w-[72rem]">
                        <b className="bg-gradient-brand gradient-fade-between bg-clip-text text-transparent">Make cool things. Have more fun trying to break it.</b>
                    </h1>
                    <div className="flex flex-col md:gap-y-4">
                        <Content />
                    </div>
                </div>
        </section>
    )
};