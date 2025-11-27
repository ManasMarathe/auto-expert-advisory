"use client";

import React from "react";
import { HandCoinsIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { montserrat, orbitron, questrial, quicksand } from "@/utils/fonts";

const Hero = () => {
  const data = {
    title: "AUTO EXPERT ADVISORY",
    subtitle: "Care For Your Cars",
    subTitle2: "With A-Cars",
    subText: "Membership By Invite Only",
    buttonText: "Know More",
  };
  return (
    <section className={`bg-black  px-8 ${montserrat.className}`}>
      <div className="max-w-[--container-max-width] mx-auto flex items-center">
        <div className="mx-4 w-[40%]">
          <div className=" flex flex-col items-center justify-between  my-8">
            <Image
              src="/auto-cars-logo.webp"
              alt="Auto Cars Logo"
              width={130}
              height={160}
            />
            <h1
              className={`${orbitron.className} text-4xl font-bold text-white`}
            >
              {data.title}
            </h1>
            <div className="text-center mt-8">
              <p
                className={`${questrial.className} text-5xl text-[#cdad7d] my-2`}
              >
                {data.subtitle}
              </p>
              <p
                className={`${questrial.className} text-5xl text-[#cdad7d] my-2`}
              >
                {data.subTitle2}
              </p>
            </div>
            <p className={`${questrial.className} text-lg text-[#eeead6] my-4`}>
              {data.subText}
            </p>
            <div className="mt-4 text-center">
              <button className="bg-[#cdad7d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b8946b] transition-colors duration-300">
                {data.buttonText}
              </button>
            </div>
          </div>
        </div>
        <div className="w-[60%]">
          <div className="grid place-content-center">
            <Image
              src="/demo-bg.webp"
              alt="Hero"
              width={800}
              height={665}
              className="object-cover"
            />
            <HandCoinsIcon size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
