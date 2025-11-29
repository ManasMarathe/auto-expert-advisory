"use client";

import React from "react";
import { HandCoinsIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { montserrat, orbitron, questrial, quicksand } from "@/utils/fonts";
import { HeroData as data } from "@/utils/data";

const Hero = () => {
  return (
    <section className={`bg-black px-4 sm:px-8 ${montserrat.className} `}>
      <div className="max-w-[--container-max-width] mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-5/12 mx-auto lg:mx-4">
          <div className="flex flex-col items-center text-center my-10 animate__animated animate__fadeInRight">
            <Image
              src="/auto-cars-logo.webp"
              alt="Auto Cars Logo"
              width={130}
              height={160}
              className="w-24 sm:w-32 h-auto"
            />

            <h1
              className={`${orbitron.className} text-3xl sm:text-4xl font-bold text-white mt-4 animate__animated animate__fadeInRight`}
            >
              {data.title}
            </h1>

            <div className="mt-6 animate__animated animate__fadeInRight">
              <p
                className={`${questrial.className} text-3xl sm:text-5xl text-[#cdad7d] my-2`}
              >
                {data.subtitle}
              </p>
              <p
                className={`${questrial.className} text-3xl sm:text-5xl text-[#cdad7d] my-2`}
              >
                {data.subTitle2}
              </p>
            </div>

            <p
              className={`${questrial.className} text-base sm:text-lg text-[#eeead6] my-4 max-w-md animate__animated animate__fadeInRight`}
            >
              {data.subText}
            </p>

            <div className="mt-4">
              <button className="bg-[#cdad7d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b8946b] transition-colors duration-300 cursor-pointer">
                {data.buttonText}
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 my-10 flex justify-center items-center animate__animated animate__fadeInRight">
          <div className="grid place-content-center relative">
            <Image
              src="/output-hero-bg.webp"
              alt="Hero"
              width={800}
              height={665}
              className="object-cover w-full max-w-[700px]"
            />
            {/* <HandCoinsIcon
              size={32}
              className="absolute bottom-4 right-4 text-white"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
