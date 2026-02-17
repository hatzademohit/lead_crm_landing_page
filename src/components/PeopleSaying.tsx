import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { PeopleSayingData } from '../assets/json/PeopleSayingData';
import Ball from '../assets/img/Ball.png'

interface Feature {
    id: Number;
    icon: string;
    description: string;
    userImage: string;
    userName: string;
}

interface PeopleSayingProps {
    features?: Feature[];
}

export default function PeopleSaying({ features = PeopleSayingData }: PeopleSayingProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.clientWidth / 3;
            const scrollAmount = (cardWidth * 3) + 20;

            container.scrollTo({
                left: direction === 'left' ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="relative py-16 pt-0 bg-white">
            <img src={Ball} alt='ball' className='absolute left-auto lg:top-[-40px] top-[-30px] right-0 lg:w-[99px] md:w-[80px] w-[60px]' />
            <div className="px-4 lg:px-11 md:px-7 lg:pt-[100px] pt-14 max-w-[1500px] mx-auto">
                <div className="flex items-center justify-between mb-4 lg:mb-8 md:mb-6">
                    <h2 className="text-[#090F4E] lg:text-4xl md:text-2xl text-xl font-semibold">What people are saying about LeadCRM</h2>
                    <div className="flex gap-2">
                        {/* {showLeftArrow && ( */}
                        <button
                            onClick={() => scroll('left')}
                            className="p-2 text-black transition-all border border-black rounded-full shadow-sm hover:bg-gray-900 hover:shadow-md disabled:bg-white disabled:text-gray-500 disabled:border-gray-300 hover:text-white"
                            aria-label="Scroll left"
                            disabled={!showLeftArrow}
                        >
                            <ChevronLeft size={20} className="text-inherit" />
                        </button>
                        {/* )}
                        {showRightArrow && ( */}
                        <button
                            onClick={() => scroll('right')}
                            className="p-2 text-black transition-all border border-black rounded-full shadow-sm hover:bg-gray-900 hover:shadow-md disabled:bg-white disabled:text-gray-500 disabled:border-gray-300 hover:text-white"
                            disabled={!showRightArrow}
                        >
                            <ChevronRight size={20} className="text-inherit" />
                        </button>
                        {/* )} */}
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex gap-6 pb-4 overflow-hidden scrollbar-hide"
                >
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            description={feature.description}
                            userImage={feature.userImage}
                            userName={feature.userName}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
