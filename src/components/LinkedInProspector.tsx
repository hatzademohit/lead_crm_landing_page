import { WithOutCRM, WithCRM } from '../assets/json/CRmCardsData.ts';
import CRMCards from "./CRMCards";

const LinkedInProspector = () => {
    return (
        <section>
            <div className="max-w-[1175px] mx-auto lg:px-6 md:px-4 px-2 lg:py-16 md:py-12 sm:py-8 py-4">
                <h2 className="text-[#090F4E] lg:text-4xl md:text-2xl text-xl font-semibold text-center lg:my-10 md:my-8 my-6">Every LinkedIn Prospector faces these daily challenges</h2>
                <div className="relative grid items-center grid-cols-1 gap-4 lg:gap-12 md:gap-8 md:grid-cols-2">
                    <div>
                        <CRMCards
                            image={WithOutCRM.image}
                            heading={WithOutCRM.heading}
                            description={WithOutCRM.description}
                            className='with-out-crm'
                        />
                    </div>
                    <div>
                        <CRMCards
                            image={WithCRM.image}
                            heading={WithCRM.heading}
                            headingIcon={WithCRM.headingIcon}
                            headingpill={WithCRM.headingpill}
                            description={WithCRM.description}
                            className='with-crm'
                        />
                    </div>
                    <div className="absolute inset-y-0 items-center justify-center hidden -translate-x-1/2 md:flex left-1/2">

                        {/* Vertical Line */}
                        <div className="absolute w-px h-[95%] bg-gray-300"></div>

                        {/* VS Badge */}
                        <div className="relative z-10 px-2 py-2 text-sm font-semibold text-gray-500 bg-white rounded-full">
                            VS
                        </div>
                    </div>
                </div>
                <div className='hidden text-center save-hours md:flex'>
                    <button className="relative px-6 mx-auto py-3 lg:mt-[70px] md:lt-10 lt-5 font-semibold text-black transition duration-200 rounded-lg shadow-md bg-lime-300 hover:bg-lime-400">
                        Start Using LeadCRM Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LinkedInProspector;
