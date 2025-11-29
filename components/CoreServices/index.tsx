"use client";
import useInView from "@/hooks/useInView";
import React from "react";
import { CoreServicesData as coreServices } from "@/utils/data";

const CoreServices = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section className={`bg-[#f4f1ec]  relative`}>
      <div className="absolute top-0 left-0 h-40 w-20 bg-[#cdad7d] hidden lg:block"></div>

      <div className="px-4 sm:p-16" ref={ref}>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 relative sm:ml-8  `}
        >
          <div className="mx-auto text-[#66231b] grid place-content-center">
            <h2
              className={`text-3xl sm:mr-80 sm:text-4xl lg:text-5xl font-bold my-6 lg:my-10 text-center lg:text-left ${
                isVisible
                  ? "animate__animated animate__fadeInUp animate__delay-0.5s"
                  : "opacity-0"
              }`}
            >
              Core
              <br />
              Services
            </h2>
          </div>
          {coreServices.map((service, index) => (
            <div
              key={index}
              className={`p-5 md:p-6 h-full  aspect-[1/1.2]  flex flex-col justify-center items-center ${
                service.color
              } ${
                index === 1 || index === 4 || index === 6
                  ? "sm:mt-6"
                  : "sm:mt-0"
              } 
              ${
                isVisible
                  ? "animate__animated animate__fadeInUp animate__delay-0.8s"
                  : "opacity-0"
              }
              `}
            >
              <h3
                className={`text-2xl md:text-2xl text-center font-semibold mb-2 text-[#5D4037] 
                 `}
              >
                {service.title}
              </h3>
              <p className={`text-stone-700 text-center text-xl mt-6 `}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-[65px] left-0 h-40 w-20 bg-[#cdad7d] hidden lg:block"></div>
      </div>
    </section>
  );
};

export default CoreServices;
