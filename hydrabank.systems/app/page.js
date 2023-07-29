import Image from 'next/image'

export default function Home() {
  return (
    <>
        <div className="absolute top-0 left-0 block w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-[0.35] backdrop-blur-sm" />
            <Image className="object-cover w-full h-full" layout="fixed" src={`/bgs/nasa-Q1p7bh3SHj8-unsplash.jpg`} width="1920" height="1080" />
        </div>
        <section className="relative flex flex-col gap-y-4 md:gap-y-2 justify-start pt-24 md:justify-center md:pt-0 items-start w-full h-full min-h-screen px-6 md:px-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white font-header">
                Let us do the <span className="gradient-fade-between bg-gradient-brand bg-clip-text text-transparent">heavy lifting.</span>
            </h1>
            <span className="text-2xl md:text-3xl font-medium text-white font-header max-w-[75vw] md:max-w-[65vw] 2xl:max-w-[47vw]">
                We offer top-notch system consultation services at competitive prices.
            </span>
        </section>
    </>
  )
}
