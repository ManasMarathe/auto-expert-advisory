"use client";

import React from "react";
import Link from "next/link";
import { WhoAreWeData } from "@/utils/data";
import { ArrowRightIcon } from "@phosphor-icons/react";
import useInView from "@/hooks/useInView";

const WhoAreWe = () => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  return (
    <section
      ref={ref}
      className={`section-padding bg-white overflow-hidden relative ${
        isVisible
          ? "animate__animated animate__fadeInUp animate__delay-0.8s"
          : "opacity-0"
      }`}
      id="legacy"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cream rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Text Content */}
          <div className="space-y-12 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="space-y-6 animate-fade-in-up">
              <p className="logo-text text-md text-secondary tracking-[0.3em] uppercase">
                {WhoAreWeData.title}
              </p>
              <h2 className="heading-text text-5xl md:text-7xl lg:text-8xl text-dark leading-[0.9] tracking-tight">
                A Legacy of <br />
                <span className="text-primary italic font-serif">
                  Excellence
                </span>
              </h2>
            </div>

            <div
              className="space-y-8 text-dark/70 text-lg md:text-xl font-light leading-relaxed max-w-xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p>{WhoAreWeData.para1}</p>
              <p>{WhoAreWeData.para2}</p>
              <p>{WhoAreWeData.para3}</p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mt-16 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                href="mailto:jigneshjhaveriofficial@gmail.com"
                className="group relative px-10 py-5 bg-secondary text-dark font-semibold text-sm tracking-wide overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/50 inline-block"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {WhoAreWeData.buttonText}
                  <ArrowRightIcon
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </Link>
            </div>
          </div>

          {/* Stats/Visual Content */}
          <div
            className="relative lg:pl-20 animate-fade-in-up flex justify-center lg:justify-start"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex flex-col gap-8 items-center lg:items-start relative">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl hidden lg:block" />

              <div className="relative">
                <span className="heading-text text-[10rem] md:text-[14rem] text-transparent bg-clip-text bg-linear-to-b from-secondary to-secondary/20 font-bold leading-[0.8] tracking-tighter">
                  30
                </span>
                <span className="absolute bottom-8 -right-8 logo-text text-sm text-dark font-bold bg-white px-4 py-2 border border-dark/5 shadow-xl">
                  YEARS
                </span>
              </div>

              <div className="space-y-6 pt-8 text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="h-px w-24 bg-dark/10" />
                <p className="logo-text text-xs text-dark/40 tracking-[0.2em] leading-loose uppercase max-w-xs">
                  Dedicated to the preservation <br /> of automotive heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
