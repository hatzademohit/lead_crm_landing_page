import Badge from './Badge';
import WorksWith from './WorksWith';
import Rating from './Rating';
import halfCrome from '../assets/img/half-crome.png'
import playstore from '../assets/img/playstore.png'
import crome from '../assets/img/crome.png'
import { Image } from 'react-bootstrap';

export default function HeroSection() {
  return (
    <section className="min-h-[600px] bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-9 hero-section">
      <div className="max-w-[1360px] mx-auto lg:px-6 md:px-4 px-2 text-center">
        <div className="flex justify-center mb-4">
          <Badge text="Thousands of Professional using LeadCRM" />
        </div>

        <h1 className="sm:text-3xl text-xl md:text-[58px] md:leading-[58px] font-semibold text-gray-900 mb-6 lg:leading-[69px]">
          LinkedIn CRM Integration
          <br />
          Capture, Sync and Enrich in{' '}
          <span className="font-semibold text-blue-500 text_bg">Both Ways</span>
        </h1>

        <p className="text-[#363636] font-semibold lg:text-[19px] mb-4 lg:mb-10 md:mb-6 max-w-[860px] mx-auto leading-relaxed">
          Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on
          LinkedIn profiles. Complete bi-directional integration with HubSpot, Salesforce, and
          Pipedrive.
        </p>

        <div className="flex justify-center mb-4 lg:mb-10 md:mb-6">
          <WorksWith />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-4 lg:mb-10 md:mb-6 lg:gap-8 md:gap-6">
          <Rating rating={5} total={5} icon={halfCrome} />
          <div className="hidden w-px h-8 bg-gray-300 md:block"></div>
          <Rating rating={5} total={5} icon={playstore} />
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          <button className="p-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg flex justify-between items-center gap-2 transition-colors lg:w-[225px]">
            <div className='flex flex-col items-start'>
              <span className='text-[12px] font-[200] leading-[12px]'>Available in</span>
              <p>Chrome Web Store</p>
            </div>
            <Image src={crome} alt='crome-icon' />
          </button>
          <button className="px-[21px] py-[17px] bg-lime-300 hover:bg-lime-400 text-gray-900 font-bold rounded-lg transition-colors lg:w-[225px]">
            Get a Free Trial Now!
          </button>
        </div>
      </div>
    </section>
  );
}
