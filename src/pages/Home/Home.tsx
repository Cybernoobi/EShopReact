import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import './Home.scss';
import Btn, { Sizes, Types } from "../../components/UI/Btn";
import { Link } from "react-router";

const Home = () => {
  return (
    <main className="main">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
        className={"main__slider"}
        cssMode
      >
        <SwiperSlide>
          <div className="main__slider-content">
            <img src="/foods.png" alt=""/>
            <div className="main__slider-content-info">
              <p className="green">Welcome to shopery</p>
              <h3>Fresh & Healthy<br/>Organic Food</h3>
              <h4>Sale up to <span className="sale">30% OFF</span></h4>
              <span className="small_grey">Free shipping on all your order. we deliver, you enjoy</span>
              <Btn className="main__slider-content-info-btn" type={Types.button} size={Sizes.big}>
                <span>Shop now <img src="/icons/whiteArrowRigth.svg" alt="" /></span>
              </Btn>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main__slider-content">
            <img src="/foods.png" alt=""/>
            <div className="main__slider-content-info">
              <p className="green">Welcome to shopery</p>
              <h3>Fresh & Healthy<br/>Organic Food</h3>
              <h4>Sale up to <span className="sale">30% OFF</span></h4>
              <span className="small_grey">Free shipping on all your order. we deliver, you enjoy</span>
              <Link to="/shop">
                <Btn className="main__slider-content-info-btn" type={Types.button} size={Sizes.big}>
                  <span>Shop now <img src="/icons/whiteArrowRigth.svg" alt="" /></span>
                </Btn>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main__slider-content">
            <img src="/foods.png" alt=""/>
            <div className="main__slider-content-info">
              <p className="green">Welcome to shopery</p>
              <h3>Fresh & Healthy<br/>Organic Food</h3>
              <h4>Sale up to <span className="sale">30% OFF</span></h4>
              <span className="small_grey">Free shipping on all your order. we deliver, you enjoy</span>
              <Btn className="main__slider-content-info-btn" type={Types.button} size={Sizes.big}>
                <span>Shop now <img src="/icons/whiteArrowRigth.svg" alt="" /></span>
              </Btn>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main__slider-content">
            <img src="/foods.png" alt=""/>
            <div className="main__slider-content-info">
              <p className="green">Welcome to shopery</p>
              <h3>Fresh & Healthy<br/>Organic Food</h3>
              <h4>Sale up to <span className="sale">30% OFF</span></h4>
              <span className="small_grey">Free shipping on all your order. we deliver, you enjoy</span>
              <Btn className="main__slider-content-info-btn" type={Types.button} size={Sizes.big}>
                <span>Shop now <img src="/icons/whiteArrowRigth.svg" alt="" /></span>
              </Btn>
            </div>
          </div>
        </SwiperSlide>
        
        </Swiper>
    </main>
  )
}

export default Home