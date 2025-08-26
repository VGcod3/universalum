"use client";

import { Swiper } from "swiper/react";
import { Keyboard } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";

import "swiper/css";

const ProjectsSlider = ({
  children,
  activeSlide,
  setActiveSlide,
  setSwiper,
  swiper,
}: {
  children: React.ReactNode;
  activeSlide: number;
  setActiveSlide: (slideIndex: number) => void;
  swiper?: SwiperType;
  setSwiper: ((swiper: SwiperType) => void) | undefined;
}) => {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={1}
      initialSlide={activeSlide}
      onSlideChange={() => setActiveSlide(swiper?.realIndex as number)}
      onSwiper={setSwiper}
      loop={true}
      keyboard={true}
      grabCursor={true}
      breakpoints={{
        768: {
          slidesPerView: 2.2,
        },
        1024: {
          slidesPerView: 3.2,
        },
      }}
      modules={[Keyboard]}
    >
      {children}
    </Swiper>
  );
};

export default ProjectsSlider;
