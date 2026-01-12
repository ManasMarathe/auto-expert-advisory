"use client";

import React from "react";
import { KeyBenefitsData as data } from "@/utils/data";
import { HandCoins, ClockCountdown, TrendUp } from "@phosphor-icons/react";
import Image from "next/image";
import useInView from "@/hooks/useInView";

const Benefits = () => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  const points = [
    {
      title: data.benefitTitle,
      desc: data.benefitDescription,
      Icon: HandCoins,
    },
    {
      title: data.benefitTitle2,
      desc: data.benefitDescription2,
      Icon: ClockCountdown,
    },
    {
      title: data.benefitTitle3,
      desc: data.benefitDescription3,
      Icon: TrendUp,
    },
  ];

  return (
    <section
      ref={ref}
      className={`section-padding bg-white relative overflow-hidden ${
        isVisible
          ? "animate__animated animate__fadeInUp animate__delay-0.8s"
          : "opacity-0"
      }`}
      id="benefits"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
          {/* Visual Content */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-secondary/10 translate-x-4 translate-y-4 rounded-sm" />
            <div className="relative aspect-4/5 rounded-sm overflow-hidden  transition-all duration-700">
              <Image
                src="/keyBenefits.webp"
                alt="Bespoke Care"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-16 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="space-y-6">
              <p className="logo-text text-md text-secondary tracking-[0.3em] uppercase">
                THE STRATEGIC EDGE
              </p>
              <h2 className="heading-text text-5xl md:text-6xl lg:text-7xl text-dark leading-[0.95] tracking-tight">
                Key <br />
                <span className="text-primary italic font-serif">Benefits</span>
              </h2>
            </div>

            <div className="space-y-12 w-full">
              {points.map((point, i) => (
                <div
                  key={i}
                  className="group flex flex-col md:flex-row items-center lg:items-start gap-6 md:gap-8"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full border border-dark/10 flex items-center justify-center text-dark group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-500">
                      <point.Icon size={20} weight="light" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="heading-text text-xl text-dark font-semibold tracking-wide group-hover:text-secondary transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-dark/60 text-lg font-light leading-relaxed max-w-sm mx-auto lg:mx-0">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-dark/5 w-full">
              <p className="logo-text text-[10px] text-dark/40 font-bold leading-loose max-w-sm uppercase tracking-wider mx-auto lg:mx-0 text-center lg:text-left">
                {data.subText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
