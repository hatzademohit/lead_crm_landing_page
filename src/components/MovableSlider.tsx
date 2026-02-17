import Slider from 'react-slick';
import sliderUser from '../assets/img/slider-user.png'
import sliderHand from '../assets/img/slider-hand.png'
import sliderDots from '../assets/img/slider-dots.png'
import sliderWaterfall from '../assets/img/slider-waterfall.png'
import { Image } from 'react-bootstrap';

const slides = [
    { id: 1, img: sliderUser, title: 'Access to', description: '700M+ Contacts' },
    { id: 2, img: sliderHand, title: 'One click push', description: 'to CRM' },
    { id: 3, img: sliderDots, title: 'Custom Field', description: 'Mapping' },
    { id: 4, img: sliderWaterfall, title: 'Advanced', description: 'Waterfall Enrichment' },
    { id: 5, img: sliderUser, title: 'Access to', description: '700M+ Contacts' },
    { id: 6, img: sliderHand, title: 'One click push', description: 'to CRM' },
    { id: 7, img: sliderDots, title: 'Custom Field', description: 'Mapping' },
    { id: 8, img: sliderWaterfall, title: 'Advanced', description: 'Waterfall Enrichment' },
];

export default function MovableSlider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 5000,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="p-6 mx-auto lg:my-10 md:my-8 sm:my-6 my-4 max-w-[1360px]">
            <Slider {...settings}>
                {slides.map(({ id, img, title, description }) => (
                    <div key={id} className="flex items-center">
                        <Image className='w-[55px] h-[55px]' src={img} alt={title} />
                        <div className='flex gap-2 ml-2'>
                            <p className='lg:text-[18px] font-semibold'>{title}</p>
                            <span className='text-gray-600'>{description}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
