"use client";

import React from "react";
import Image from "next/image";
import { MembershipData } from "@/utils/data";
import useInView from "@/hooks/useInView";

const Membership = () => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  return (
    <section
      ref={ref}
      className={`relative py-40 bg-dark overflow-hidden ${
        isVisible
          ? "animate__animated animate__fadeInUp animate__delay-0.8s"
          : "opacity-0"
      }`}
      id="membership"
    >
      {/* Background Image with Overlay */}
      <Image
        src="/membership-luxury.png"
        alt="Luxury Car Detail"
        fill
        className="object-cover opacity-40 mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-linear-to-b from-dark via-dark/90 to-dark" />

      {/* Gold Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="space-y-8 animate-fade-in-up">
            <p className="logo-text text-xs text-secondary tracking-[0.4em] uppercase">
              THE INNER CIRCLE
            </p>
            <h2 className="heading-text text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight">
              {MembershipData.title} <br />
              <span className="text-secondary/80 italic font-serif text-4xl md:text-6xl block mt-4">
                By Invitation Only
              </span>
            </h2>
            <div className="h-px w-24 bg-linear-to-r from-transparent via-white/20 to-transparent mx-auto" />
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              {MembershipData.subtitle}
            </p>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              {MembershipData.para1}
            </p>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              {MembershipData.para2}
            </p>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              {MembershipData.para3}
            </p>
            <p>{MembershipData.para4}</p>
          </div>

          <div
            className="pt-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <button className="relative px-12 py-5 bg-transparent border border-secondary/30 text-secondary text-sm font-bold tracking-[0.2em] uppercase overflow-hidden group hover:border-secondary transition-colors duration-500">
              <span className="relative z-10 group-hover:text-dark transition-colors duration-500">
                Request Access
              </span>
              <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
            </button>
            <p className="mt-8 text-white/40 text-xs tracking-widest uppercase">
              Limited Availability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
