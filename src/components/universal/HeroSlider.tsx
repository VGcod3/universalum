"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Slide component for rendering each background image
function SlideImage({ image, isActive }: { image: string; isActive: boolean }) {
  return (
    <div
      className={cn(
        "absolute inset-0 transition-all duration-1000",
        isActive
          ? "opacity-100 scale-100"
          : "opacity-0 scale-[1.03] pointer-events-none"
      )}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Slide background"
          fill
          priority={isActive}
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="z-0"
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10"></div>
      </div>
    </div>
  );
}

// Navigation controls component
function SlideNavigation({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-center gap-4">
      <Button
        onClick={onPrev}
        variant="icon"
        size="icon"
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-5 h-5 " />
      </Button>

      <Button
        onClick={onNext}
        variant="icon"
        size="icon"
        aria-label="Next slide"
      >
        <ArrowRight className="w-5 h-5 " />
      </Button>
    </div>
  );
}

// Static content component
function HeroContent() {
  // Static content that doesn't change between slides
  const title = "Комплексне проектування та будівництво об'єктів";
  const description =
    "Група компаній, що виконують інженерно-геологічні та геодезичні вишукування, проектування, будівельно-монтажні роботи — від фундаменту до вентильованого фасаду з HPL панелей, влаштування світлопрозорих алюмінієвих конструкцій, скляних дахів та фасадів.";
  const buttonText = "ЗВ'ЯЖІТЬСЯ З НАМИ";

  return (
    <div className="relative z-20 h-full w-full flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-6xl flex flex-col items-center gap-6">
        <h1 className="text-headline-1 text-grayscale-white">{title}</h1>
        <p className="max-w-3xl text-headline-5 text-grayscale-white">
          {description}
        </p>
        <Button className="mt-4">{buttonText}</Button>
      </div>
    </div>
  );
}

// Main Hero Slider component
export function HeroSlider({ className }: { className?: string }) {
  // Default slides
  const slides = [{ image: "/photo/Hero1.png" }, { image: "/photo/Hero2.png" }];

  // Autoplay settings
  const autoplayInterval = 6000;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoplay(false); // Pause autoplay when manually changing slides
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoplay(false); // Pause autoplay when manually changing slides
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [isAutoplay, nextSlide, autoplayInterval]);

  // Resume autoplay after 10 seconds of inactivity
  useEffect(() => {
    if (isAutoplay) return;

    const timeout = setTimeout(() => {
      setIsAutoplay(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [isAutoplay]);

  return (
    <div className={cn("relative w-full h-screen overflow-hidden", className)}>
      {/* Render all slides */}
      {slides.map((slide, index) => (
        <SlideImage
          key={index}
          image={slide.image}
          isActive={index === currentSlide}
        />
      ))}

      {/* Static content that doesn't change */}
      <HeroContent />

      {/* Navigation controls */}
      <SlideNavigation onPrev={prevSlide} onNext={nextSlide} />
    </div>
  );
}
