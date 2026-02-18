import Watch from '../assets/img/watch.png'
import Credit from '../assets/img/credits.png'
import Users from '../assets/img/users.png'
import { useEffect, useState } from 'react';

function FreeTrial() {
    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setShowDiv(true);
            } else {
                setShowDiv(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`max-w-fit fixed bottom-5 rounded-xl content-center md:block hidden m-auto left-0 right-0 shadow-[6px_13px_100px_3px_#110C2E2E] bg-white transition-all duration-1000 ease-in-out ${showDiv ? "opacity-100 z-50 " : "opacity-0 z-0 bottom-[-250px]"}`}>
            <div className='p-[18px]'>
                <div className='bg-[#FFEEFE] rounded-xl p-4 mb-3 flex items-center gap-2'>
                    <img src={Users} alt='users' width={93} />
                    <h3 className='font-semibold text-[20px] leading-[100%] text-[#121212]'>Join with our Thousands of professionals Now !</h3>
                    <button className='w-[214px] h-[60px] rounded-[13px] px-[13px] bg-[#B3FC6A] hover:bg-[#9af440]'>Get a Free Trial Now!</button>
                </div>
                <div className='flex items-center justify-center gap-20'>
                    <div className='flex items-center gap-1'>
                        <img src={Credit} alt='credit' className='h-7 w-7' />
                        <p className='font-semibold text-[#161616]'>No Credit Card <span className='font-normal text-[#6c6c6c]'>Required</span></p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={Watch} alt='watch' className='h-7 w-7' />
                        <p className='font-semibold text-[#161616]'>14 Days Free <span className='font-normal text-[#6c6c6c]'>Trial</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeTrial;