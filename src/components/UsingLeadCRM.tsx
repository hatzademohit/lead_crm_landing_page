import { ArrowRight } from 'lucide-react'
import ProductBanner from '../assets/img/Product hunt banner image.png'

function UsingLeadCRM() {
    return (
        <section className="bg-[#eaeffa] lg:p-10 md:p-7 p-4 z-10 relative max-w-[1500px] mx-auto">
            <div>
                <h2 className="text-[#090F4E] lg:text-4xl md:text-2xl text-xl font-semibold lg:mb-7 mb-4">Join Thousands of Professionals Using LeadCRM</h2>
                <div className='mb-4 lg:mb-10 md:mb-7'>
                    <img src={ProductBanner} alt='product-banner' className='object-cover w-full' />
                </div>
                <button className="flex items-center justify-center gap-2 px-6 py-3 mx-auto font-semibold text-black transition duration-200 rounded-lg shadow-md lg:mt-10 md:lt-8 lt-5 bg-lime-300 hover:bg-lime-400">
                    Get Started Today <ArrowRight />
                </button>
            </div>
        </section>
    )
}

export default UsingLeadCRM