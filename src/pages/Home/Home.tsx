import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import './Home.scss';

const Home = () => {
  return (
    <main className="main">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className={"main__slider"}
      >
        <SwiperSlide><img src="https://swiperjs.com/images/sponsors/casinos-hunter.png" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/images/sponsors/casinosfest.png" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/images/sponsors/uusimmatkasinotcom.png" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/images/sponsors/automatenspieler.png" alt=""/></SwiperSlide>
      </Swiper>
    </main>
  )
}

export default Home