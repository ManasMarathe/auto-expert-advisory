"use client";

import useInView from "@/hooks/useInView";
import React from "react";
import { AboutUsData as data } from "@/utils/data";
import { questrial } from "@/utils/fonts";
import Image from "next/image";

const AboutUs = () => {
  const { ref, isVisible } = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className={`relative px-4 sm:p-16 py-12 overflow-hidden  `}
    >
      <div
        className={`relative z-10 ${
          isVisible ? "animate__animated animate__fadeInUp " : "opacity-0"
        }`}
      >
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-center text-[#cdad7d] my-4 lg:my-8 ${questrial.className}`}
        >
          {data.title}
        </h2>
        <div className="grid place-content-center">
          <Image
            src="/output5.webp"
            alt="Team"
            width={430}
            height={430}
            className="w-64 sm:w-80 lg:w-[430px] h-auto"
          />
        </div>
        <div className="mt-8">
          <p className="text-lg sm:text-xl lg:text-2xl  mx-auto lg:mx-0">
            {data.para1}
          </p>
        </div>
        <div className="mt-8">
          <p className="text-lg sm:text-xl lg:text-2xl  mx-auto lg:mx-0">
            {data.para2}
          </p>
        </div>
        <div className="mt-8">
          <p className="text-lg sm:text-xl lg:text-2xl  mx-auto lg:mx-0">
            {data.para3}
          </p>
        </div>
        <div className="mt-8">
          <p className="text-lg sm:text-xl lg:text-2xl  mx-auto lg:mx-0">
            {data.para4}
          </p>
        </div>
        <div className="mt-8">
          <p className="text-lg sm:text-xl lg:text-2xl  mx-auto lg:mx-0">
            {data.para5}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
