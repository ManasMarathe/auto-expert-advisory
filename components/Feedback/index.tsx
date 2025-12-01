"use client";

import useInView from "@/hooks/useInView";
import { geistSans, questrial, quicksand } from "@/utils/fonts";
import React from "react";
import { FeedbackData as data } from "@/utils/data";

const Feedback = () => {
  const { ref, isVisible } = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className={`relative px-4 sm:p-16 py-12 overflow-hidden  `}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[#131e3d] bg-opacity-80"
          style={{ zIndex: 0 }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/output6.webp')" }}
        />
      </div>
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
        <h3
          className={`text-xl sm:text-2xl lg:text-2xl font-semibold text-center lg:text-center text-[#cdad7d] my-4 lg:my-8 ${quicksand.className}`}
        >
          {data.subTitle}
        </h3>
        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center mt-18 items-center">
          <div className="grid place-content-center border-[#cdad7d] border-2 p-4 w-[300px] h-[300px] rounded-lg">
            <video controls className="w-[300px]  rounded-lg">
              <source src="/VID-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="grid place-content-center border-[#cdad7d] border-2 p-4 w-[300px] h-[300px] rounded-lg">
            <video controls className="w-[300px]  rounded-lg">
              <source src="/VID-(1).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="grid place-content-center border-[#cdad7d] border-2 p-4 w-[300px] h-[300px] rounded-lg">
            <video controls className="w-[300px] rounded-lg h-[300px] mb-9">
              <source src="VID-3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
