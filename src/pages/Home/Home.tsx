import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

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
        modules={[Pagination]}
        className={"main__slider"}
      >
        <SwiperSlide>
          <div className="main__slider-content">
            <img src="/foods.png" alt="" />
            <div className="main__slider-content-info">
              <p className="green">Welcome to shopery</p>
              <h3>Fresh & Healthy<br />Organic Food</h3>
              <h4>Sale up to <span className="sale">30% OFF</span></h4>
              <span className="small_grey">Free shipping on all your order. we deliver, you enjoy</span>
              <Link to={'/shop'}>
                <Btn className="main__slider-content-info-btn" type={Types.button} size={Sizes.big}>
                  <span>Shop now <img src="/icons/whiteArrowRigth.svg" alt="" /></span>
                </Btn>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main__slider-content">
            <img src="/foods.png" alt="" />
            <div className="main__slider-content-info">
              <p className="green">Welcome to shopery</p>
              <h3>Fresh & Healthy<br />Organic Food</h3>
              <h4>Sale up to <span className="sale">30% OFF</span></h4>
              <span className="small_grey">Free shipping on all your order. we deliver, you enjoy</span>
              <Link to={'/shop'}>
                <Btn className="main__slider-content-info-btn" type={Types.button} size={Sizes.big}>
                  <span>Shop now <img src="/icons/whiteArrowRigth.svg" alt="" /></span>
                </Btn>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main__slider-content">
            <img src="/foods.png" alt="" />
            <div className="main__slider-content-info">
              <p className="green">Welcome to shopery</p>
              <h3>Fresh & Healthy<br />Organic Food</h3>
              <h4>Sale up to <span className="sale">30% OFF</span></h4>
              <span className="small_grey">Free shipping on all your order. we deliver, you enjoy</span>
              <Link to={'/shop'}>
                <Btn className="main__slider-content-info-btn" type={Types.button} size={Sizes.big}>
                  <span>Shop now <img src="/icons/whiteArrowRigth.svg" alt="" /></span>
                </Btn>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main__slider-content">
            <img src="/foods.png" alt="" />
            <div className="main__slider-content-info">
              <p className="green">Welcome to shopery</p>
              <h3>Fresh & Healthy<br />Organic Food</h3>
              <h4>Sale up to <span className="sale">30% OFF</span></h4>
              <span className="small_grey">Free shipping on all your order. we deliver, you enjoy</span>
              <Link to={'/shop'}>
                <Btn className="main__slider-content-info-btn" type={Types.button} size={Sizes.big}>
                  <span>Shop now <img src="/icons/whiteArrowRigth.svg" alt="" /></span>
                </Btn>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="main__grant-info">
        <div className="main__grant-info-item">
          <img src="/icons/deliveryTruck.svg" alt="delivery track icon"/>
          <div className="main__grant-info-item-text">
            <h3>Free Shipping</h3>
            <p>Free shipping on all your order</p>
          </div>
        </div>
        <div className="main__grant-info-item">
          <img src="/icons/headphones.svg" alt="headphone icon"/>
          <div className="main__grant-info-item-text">
            <h3>Customer Support 24/7</h3>
            <p>Instant access to Support</p>
          </div>
        </div>
        <div className="main__grant-info-item">
          <img src="/icons/shoppingBag.svg" alt="bag icon"/>
          <div className="main__grant-info-item-text">
            <h3>100% Secure Payment</h3>
            <p>We ensure your money is save</p>
          </div>
        </div>
        <div className="main__grant-info-item">
          <img src="/icons/package.svg" alt="box icon"/>
          <div className="main__grant-info-item-text">
            <h3>Money-Back Guarantee</h3>
            <p>30 Days Money-Back Guarantee</p>
          </div>
        </div>
      </div>
      <section className="main__feat_products container">

      </section>
    </main>
  )
}

export default Home