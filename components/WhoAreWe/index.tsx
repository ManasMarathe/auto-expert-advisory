"use client";

import useInView from "@/hooks/useInView";
import Image from "next/image";
import { WhoAreWeData as data } from "@/utils/data";

const WhoAreWe = () => {
  const { ref, isVisible } = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className={`bg-[#f4f1ec] px-4 sm:p-16 
        
      `}
    >
      <div
        className={`max-w-[--container-max-width] mx-auto py-12 flex flex-col lg:flex-row items-center lg:items-start text-[#66231b] ${
          isVisible
            ? "animate__animated animate__fadeInUp animate__delay-0.8s"
            : "opacity-0"
        }`}
      >
        <div className={`w-full lg:w-7/12 `}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-6 lg:my-10 text-center lg:text-left">
            {data.title}
          </h2>

          <div className="mt-4 flex flex-col items-center lg:items-start gap-6 text-lg sm:text-xl lg:text-2xl max-w-[90%] lg:max-w-[80%] mx-auto lg:mx-0">
            <p>{data.para1}</p>
            <p>{data.para2}</p>
            <p>{data.para3}</p>
          </div>
        </div>

        <div
          className={`w-full lg:w-5/12 mt-10 lg:mt-0 flex flex-col items-center ${
            isVisible ? "animate__animated animate__fadeInUp " : "opacity-0"
          }`}
        >
          <div className="grid place-content-center">
            <Image
              src="/output5.webp"
              alt="Team"
              width={430}
              height={430}
              className="w-64 sm:w-80 lg:w-[430px] h-auto"
            />
          </div>

          <div className="mt-6">
            <button className="bg-[#cdad7d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b8946b] transition-colors duration-300 cursor-pointer">
              {data.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
