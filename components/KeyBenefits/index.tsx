"use client";
import { quicksand } from "@/utils/fonts";
import React from "react";
import {
  CarProfileIcon,
  ClockCountdownIcon,
  HandCoinsIcon,
  TrendUpIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import useInView from "@/hooks/useInView";
import { KeyBenefitsData as data } from "@/utils/data";

const KeyBenefits = () => {
  const { ref, isVisible } = useInView({ threshold: 0.3 });

  return (
    <section
      className={`bg-[#f4f1ec] px-4 sm:p-16 py-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 `}
      ref={ref}
    >
      {/* IMAGE */}
      <div
        className={`w-full lg:w-5/12 flex justify-center ${
          isVisible ? "animate__animated animate__fadeInUp " : "opacity-0"
        }`}
      >
        <Image
          src="/keyBenefits.webp"
          alt="Key Benefits"
          width={528}
          height={500}
          className="w-[400px] sm:w-80 md:w-[400px] lg:w-[500px] h-[500px] object-cover"
        />
      </div>

      {/* CONTENT */}
      <div
        className={`w-full lg:w-7/12 flex flex-col gap-8 ${
          isVisible ? "animate__animated animate__fadeInUp " : "opacity-0"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-center text-[#66231b] my-4 lg:my-8">
          {data.title}
        </h2>

        {/* BENEFIT 1 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          <div className="grid place-content-center">
            <HandCoinsIcon
              size={50}
              className=""
              color="#cdad7d"
              weight="light"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#66231b]">
              {data.benefitTitle}
            </h3>
            <p className="text-base sm:text-lg text-[#66231b] sm:max-w-[80%]">
              {data.benefitDescription}
            </p>
          </div>
        </div>

        {/* BENEFIT 2 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          <div className="grid place-content-center">
            <ClockCountdownIcon
              size={50}
              className=""
              color="#cdad7d"
              weight="light"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#66231b]">
              {data.benefitTitle2}
            </h3>
            <p className="text-base sm:text-lg text-[#66231b] sm:max-w-[80%]">
              {data.benefitDescription2}
            </p>
          </div>
        </div>

        {/* BENEFIT 3 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          <div className="grid place-content-center gap-2 ">
            <TrendUpIcon
              size={50}
              className=""
              color="#cdad7d"
              weight="light"
            />
            <CarProfileIcon
              size={50}
              className=""
              color="#cdad7d"
              weight="light"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#66231b]">
              {data.benefitTitle3}
            </h3>
            <p className="text-base sm:text-lg text-[#66231b] sm:max-w-[80%]">
              {data.benefitDescription3}
            </p>
          </div>
        </div>

        {/* SUBTEXT */}
        <p
          className={`text-base sm:text-lg text-[#d18517] mt-4 sm:mt-8 ${quicksand.className}`}
        >
          {data.subText}
        </p>
      </div>
    </section>
  );
};

export default KeyBenefits;
