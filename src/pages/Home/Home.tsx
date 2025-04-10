import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation} from "swiper/modules"

const Home = () => {
  return (
    <main className="main">
      <Swiper
        slidesPerView={1}
        autoplay
        navigation
        modules={[Navigation]}
      >
        <SwiperSlide>
          test 1
        </SwiperSlide>
        <SwiperSlide>
          test 2
        </SwiperSlide>
        <SwiperSlide>
          test 3
        </SwiperSlide>
        <SwiperSlide>
          test 4
        </SwiperSlide>
        <SwiperSlide>
          test 5
        </SwiperSlide>
      </Swiper>
    </main>
  )
}

export default Home