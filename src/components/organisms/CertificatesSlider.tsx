/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { SwiperSlide } from "swiper/react";
import { SliderControls } from "../molecules";
import ProjectsSlider from "../universal/ProjectsSlider";
import { Swiper as SwiperType } from "swiper/types";

const certificatesArray = Array.from({ length: 20 });

export const CertificatesSlider = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [swiper, setSwiper] = useState<SwiperType>();
  const t = useTranslations();

  const numberOfSlides = certificatesArray.length;

  const handleChangeSlide = (slideIndex: number) => {
    const newIndex = (slideIndex + numberOfSlides) % numberOfSlides;
    swiper?.slideToLoop(newIndex);
    setActiveSlide(newIndex);
  };

  const handlePrevious = () => handleChangeSlide(activeSlide - 1);
  const handleNext = () => handleChangeSlide(activeSlide + 1);

  useEffect(() => {
    if (swiper && certificatesArray.length > 0) {
      const newIndex = 0;
      swiper.slideToLoop(newIndex);
      setActiveSlide(newIndex);
    }
  }, [swiper]);

  return (
    <section className="container px-4 md:px-6 mx-auto">
      {/* Title and Controls */}
      <div className="flex flex-col md:flex-row justify-between gap-8 text-grayscale-black pb-10 mb-6 border-b border-b-grayscale-gray4">
        <div id="certificates" className="flex flex-col gap-4">
          <h2 className="text-headline-4 md:text-headline-3 lg:text-headline-3 max-w-3xl lg:max-w-4xl">
            {t("certificates.title")}
          </h2>

          <p className="text-body-2 md:text-body-1 max-w-2xl">
            {t("certificates.description")}
          </p>
        </div>

        <div className="hidden md:flex flex-col items-end gap-4 justify-end h-auto">
          <SliderControls
            onPrevious={handlePrevious}
            onNext={handleNext}
            className="bg-primary-light text-grayscale-white hover:bg-primary-medium hover:text-grayscale-white hover:border-primary-medium"
          />
        </div>
      </div>

      {/* Projects Slider */}
      <ProjectsSlider
        ssspw={1.5}
        activeSlide={activeSlide}
        swiper={swiper}
        setSwiper={setSwiper}
        setActiveSlide={setActiveSlide}
      >
        {certificatesArray.map((_, index) => (
          <SwiperSlide key={index}>
            <img
              src={`/certificates/${index + 1}.jpg`}
              alt={`Certificate ${index + 1}`}
              className=" object-contain h-auto mx-auto"
            />
          </SwiperSlide>
        ))}
      </ProjectsSlider>
    </section>
  );
};
