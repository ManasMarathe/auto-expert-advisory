"use client";

import useInView from "@/hooks/useInView";
import { quicksand } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import { MembershipData as data } from "@/utils/data";

const Membership = () => {
  const { ref, isVisible } = useInView({ threshold: 0.3 });
  return (
    <section
      className={`bg-[#f4f1ec] px-4 sm:p-16 py-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 `}
      ref={ref}
    >
      <div
        className={`w-full lg:w-7/12 ${
          isVisible ? "animate__animated animate__fadeInUp " : "opacity-0"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-center text-[#66231b] my-2 lg:my-2 ">
          {data.title}
        </h2>
        <h4
          className={`${quicksand.className} text-xl sm:text-2xl lg:text-2xl font-semibold text-center lg:text-center text-[#66231b] sm:max-w-[90%] mt-4`}
        >
          {data.subtitle}
        </h4>
        <div className="mt-8">
          <p className="text-base sm:text-lg text-[#66231b] ">{data.para1}</p>
          <p className="text-base sm:text-lg text-[#66231b] ">{data.para2}</p>
          <p className="text-base sm:text-lg text-[#66231b] ">{data.para3}</p>
          <p className="text-base sm:text-lg text-[#66231b] ">{data.para4}</p>
          <p className="text-base sm:text-lg text-[#66231b] ">{data.para5}</p>
          <p className="text-base sm:text-lg text-[#66231b] ">{data.para6}</p>
        </div>
      </div>
      <div
        className={`w-full lg:w-5/12 flex justify-center ${
          isVisible ? "animate__animated animate__fadeInUp " : "opacity-0"
        }`}
      >
        <Image
          src="/membership.webp"
          alt="Key Benefits"
          width={528}
          height={500}
          className="w-[400px] sm:w-80 md:w-[400px] lg:w-[500px] h-[500px] object-cover"
        />
      </div>
    </section>
  );
};

export default Membership;
