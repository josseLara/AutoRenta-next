"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
        Encuentra, reserva, alquila un coche: ¡rápido y súper fácil!
        </h1>

        <p className="hero__subtitle">
        Simplifica tu experiencia de alquiler de coches con nuestro proceso de reserva sin esfuerzo
        </p>

        <CustomButton
          title="Explorar autos"
          containerStyles="bg-[#FFAA64] text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/car-mc.svg" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
