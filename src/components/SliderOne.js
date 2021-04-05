// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  

const SliderOne = () => {
    return (
     
        <Swiper
        spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
                <img className="w-full"  src="https://i.ytimg.com/vi/0xe4H666drk/maxresdefault.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full"  src="https://i.ytimg.com/vi/dFnvYtPePRA/maxresdefault.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full"  src="https://i.ytimg.com/vi/0xe4H666drk/maxresdefault.jpg" />
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    )
}

export default SliderOne
