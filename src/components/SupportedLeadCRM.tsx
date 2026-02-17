import BannerThumbImg from '../assets/img/banner-thumb.png'
import LeadCRmSupportedImg from '../assets/img/leadcrm-supported.png'
import CollaborationImg from '../assets/img/Collaboration.png'

function SupportedLeadCRM() {
    return (
        <section className="px-4 lg:px-11 md:px-7 lg:py-[150px] md:py-[100px] py-8 text-center max-w-[1500px] mx-auto relative">
            <div className="mb-8 text-center max-w-[960px] mx-auto relative">
                <img src={BannerThumbImg} alt='ball' className='absolute hidden md:flex right-[200px] top-[-100px]' />
                <h2 className="text-[#090F4E] lg:text-4xl md:text-2xl text-xl font-semibold md:mb-4 mb-2">Our Supported LeadCRM</h2>
                <p className="text-[#4D4D4D] lg:text-[18px] text-base">LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. We don’t want you to miss any revenue opportunity on the internet!</p>
            </div>
            <div>
                <img src={LeadCRmSupportedImg} alt='lead-crm-supported' />
            </div>
            <button className="relative px-6 py-3 mt-5 font-semibold text-black transition duration-200 rounded-lg shadow-md lg:mt-10 md:mt-8 bg-lime-300 hover:bg-lime-400">
                Lets Integrate your CRM Now!
            </button>
            <div className='absolute left-auto right-0 lg:bottom-[-36px] md:bottom-[-28px] bottom-[-15px]'>
                <img src={CollaborationImg} alt='collaboration-img' className='lg:w-[115px] md:w-[90px] w-12' />
            </div>
        </section>
    )
}

export default SupportedLeadCRM