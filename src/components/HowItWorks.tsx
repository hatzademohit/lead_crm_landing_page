import WordCard from "./WorkCard"
import { HowItWorksData } from '../assets/json/HowItWorksData.ts'
import { ArrowRight } from "lucide-react"

function HowItWorks() {
    return (
        <section className="bg-[#EAEFFA]">
            <div className="how-it-works lg:py-[44px] lg:p-6 md:p-4 pb-8 p-2 max-w-[1500px] mx-auto">
                <h2 className="text-[#090F4E] lg:text-4xl md:text-2xl text-xl font-semibold">How it Works</h2>
                <p className="md:mt-2.5 mt-1.5">From setup to success in <span className="font-semibold">4 simple steps</span></p>
                <div className="relative grid items-center grid-cols-1 gap-6 mt-4 lg:grid-cols-4 md:grid-cols-2 lg:mt-11 md:mt-7">
                    {HowItWorksData && HowItWorksData.map((item: any) => (
                        <WordCard
                            key={item?.step}
                            step={item?.step}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
                <button className="flex gap-2 mx-auto px-6 py-3 lg:mt-[60px] md:mt-10 mt-5 font-semibold text-black transition duration-200 rounded-lg shadow-md bg-lime-300 hover:bg-lime-400">
                    Try LeadCRM Now <ArrowRight />
                </button>
            </div>
        </section>
    )
}

export default HowItWorks