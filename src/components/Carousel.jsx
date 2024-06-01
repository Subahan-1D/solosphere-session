
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';

import carousel1 from '../assets/images/carousel1.jpg'
import carousel2 from '../assets/images/carousel2.jpg'
import carousel3 from '../assets/images/carousel3.jpg'

export default function Carousel() {

    return (
        <div className='container px-6 py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slider image={carousel1}
                    text='Get Your Web Development Projects Done in minutes'
                    ></Slider>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider image={carousel2}
                    text='Get Your Graphic Design Projects Done in minutes'
                    ></Slider>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider image={carousel3}
                    text='Get Your Digital Marketing Projects Done in minutes'
                    ></Slider>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}
