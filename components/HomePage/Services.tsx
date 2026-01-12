"use client";

import React from "react";
import { CoreServicesData as coreServices } from "@/utils/data";
import { ArrowUpRight, ArrowUpRightIcon } from "@phosphor-icons/react";
import useInView from "@/hooks/useInView";

const Services = () => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  return (
    <section
      ref={ref}
      className={`section-padding bg-cream relative overflow-hidden ${
        isVisible
          ? "animate__animated animate__fadeInUp animate__delay-0.8s"
          : "opacity-0"
      }`}
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-24 gap-12">
          <div className="space-y-6 max-w-2xl text-center lg:text-left">
            <p className="logo-text text-md text-secondary tracking-[0.3em] uppercase">
              Comprehensive Care
            </p>
            <h2 className="heading-text text-5xl md:text-7xl text-dark leading-[0.9] tracking-tight">
              The{" "}
              <span className="text-primary italic font-serif">Services</span>
            </h2>
          </div>
          <p className="text-dark/60 text-lg font-light max-w-sm text-right hidden lg:block leading-relaxed">
            Tailored strategies for the world's most <br /> distinguished
            automotive collections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="group p-10 bg-white border border-dark/5 hover:border-secondary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-secondary group-hover:h-full transition-all duration-500 ease-in-out" />

              <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="h-0.5 w-12 bg-secondary" />
                  <ArrowUpRightIcon
                    size={24}
                    className="text-dark/20 group-hover:text-secondary group-hover:rotate-45 transition-all duration-500"
                  />
                </div>

                <h3 className="heading-text text-2xl text-dark group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-dark/60 text-base font-light leading-relaxed group-hover:text-dark/80 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
