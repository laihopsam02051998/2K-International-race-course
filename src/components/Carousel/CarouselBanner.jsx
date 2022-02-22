import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  HexagonButtonNext,
  HexagonButtonPrev,
} from "./../Button/HexagonButtonNext";
// import SwiperCore, { Navigation } from "swiper";
import { NomalImage } from "../Card/styled";
import useStyleCarousel from "../Carousel/style.js";
// SwiperCore.use([Navigation]);

function CarouselBanner({ Slider }) {
  // input : image Array (props.imageArr)
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = React.useRef(null);
  const classes = useStyleCarousel();

  return (
    <div className={classes.containerCarousel}>
      <Swiper
        ref={swiperRef}
        tag="section"
        wrapperTag="div"
        slidesPerView={1}
        spaceBetween={0}
        freeMode={true}
        navigation={{
          prevEl: prevRef.current ? prevRef.current : null,
          nextEl: nextRef.current ? nextRef.current : null,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
        loop
        // pagination
        id="main"
      >
        {Slider.map((sp) => {
          return (
            <SwiperSlide tag="div">
              <NomalImage src={sp} height="35rem" />
            </SwiperSlide>
          );
        })}
        <div className={classes.navigationCustomize}>
          <div ref={prevRef} className="cursor-pointer">
            <HexagonButtonPrev />
          </div>
          <div ref={nextRef} className="cursor-pointer">
            <HexagonButtonNext />
          </div>
        </div>
      </Swiper>
    </div>
  );
}
export default CarouselBanner;
