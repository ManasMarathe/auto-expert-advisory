"use client";

import React from "react";
import Image from "next/image";
import {
  InstagramLogo,
  LinkedinLogo,
  ArrowRight,
  ArrowRightIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { HeroData, GetInTouchData } from "@/utils/data";

// Sub-components
import WhoAreWe from "./WhoAreWe";
import Services from "./Services";
import Benefits from "./Benefits";
import Membership from "./Membership";
import Feedback from "./Feedback";

const HomePageComponent = () => {
  return (
    <div className="min-h-screen bg-white text-foreground font-sans overflow-x-hidden">
      {/* Navigation - Luxury Minimal */}
      <nav className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 animate-slide-in">
            <Image
              src="/auto-cars-logo.webp"
              alt="Logo"
              width={32}
              height={32}
            />
            <span className="logo-text text-xs text-white tracking-widest">
              Auto Expert
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dramatic & Cinematic */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-8">
          {/* Logo with Glow Effect */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-12 animate-fade-in-up mt-15">
            <div className="absolute inset-0 bg-secondary/30 rounded-full blur-3xl"></div>
            <Image
              src="/auto-cars-logo.webp"
              alt="Auto Expert Shield"
              fill
              className="object-contain relative z-10"
              priority
            />
          </div>

          {/* Main Headline */}
          <div
            className="space-y-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-4">
              <p className="logo-text text-xs md:text-sm text-secondary tracking-[0.3em] uppercase">
                {HeroData.subText}
              </p>
              <h1 className="heading-text text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight">
                {HeroData.title}
              </h1>
            </div>

            <div className="h-px w-24 bg-linear-to-r from-transparent via-secondary to-transparent mx-auto"></div>

            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
              <span className="block">{HeroData.subtitle}</span>
              <span className="text-secondary">{HeroData.subTitle2}</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button className="group relative px-10 py-5 bg-secondary text-dark font-semibold text-sm tracking-wide overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/50 cursor-pointer">
              <span className="relative z-10 flex items-center gap-3">
                {HeroData.buttonText}
                <ArrowRightIcon
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
          </div>

          {/* Stats Bar */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24 max-w-4xl mx-auto animate-fade-in-up px-6 text-center mb-5"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="glass-effect p-8 md:p-6 rounded-sm">
              <p className="heading-text text-3xl md:text-4xl text-secondary">
                30+
              </p>
              <p className="text-white/60 text-sm mt-2">Years Experience</p>
            </div>
            <div className="glass-effect p-8 md:p-6 rounded-sm">
              <p className="heading-text text-3xl md:text-4xl text-secondary">
                500+
              </p>
              <p className="text-white/60 text-sm mt-2">Vehicles Serviced</p>
            </div>
            <div className="glass-effect p-8 md:p-6 rounded-sm">
              <p className="heading-text text-3xl md:text-4xl text-secondary">
                100%
              </p>
              <p className="text-white/60 text-sm mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="bg-white">
        <WhoAreWe />
        <Services />
        <Benefits />
        <Membership />
        <Feedback />
      </div>

      {/* Footer - Premium Dark */}
      <footer
        className="bg-dark text-white relative overflow-hidden"
        id="contact"
      >
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-16 border-b border-white/10">
            {/* Brand */}
            <div className="space-y-6">
              <Image
                src="/auto-cars-logo.webp"
                alt="Logo"
                width={70}
                height={70}
              />
              <p className="logo-text text-[10px] text-white/40 tracking-widest leading-relaxed">
                ESTABLISHED 1994
                <br />
                MUMBAI, INDIA
              </p>
              <p className="text-sm text-white/50 leading-relaxed">
                {GetInTouchData.address}
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-5">
              <h4 className="heading-text text-sm text-secondary uppercase tracking-wider">
                {GetInTouchData.title1}
              </h4>
              <div className="space-y-3 text-sm text-white/70 leading-relaxed">
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">
                    {GetInTouchData.title2}
                  </p>
                  <p>{GetInTouchData.officeHours}</p>
                  <p>{GetInTouchData.timing}</p>
                  <p className="text-white/40 italic">
                    {GetInTouchData.closed}
                  </p>
                </div>

                <div className="pt-4 space-y-2">
                  <p className="text-secondary font-semibold hover:text-accent transition-colors cursor-pointer text-lg">
                    {GetInTouchData.phone}
                  </p>
                  <p className="text-white/60 hover:text-white transition-colors cursor-pointer">
                    {GetInTouchData.email}
                  </p>
                  <p className="text-white/40 hover:text-white transition-colors cursor-pointer font-mono text-xs">
                    {GetInTouchData.telephone}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            {/* <div className="space-y-5">
              <h4 className="heading-text text-sm text-secondary uppercase tracking-wider">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-3 text-sm text-white/70">
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Our Legacy
                </a>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Private Services
                </a>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Collector Portal
                </a>
                <a
                  href="#"
                  className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Careers
                </a>
              </nav>
            </div> */}

            {/* Social & Newsletter */}
            <div className="space-y-5">
              <h4 className="heading-text text-sm text-secondary uppercase tracking-wider">
                {GetInTouchData.title3}
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/p/DCrbQfqiR8j/?igsh=ZGN4aWhoZ3Njamxn"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-secondary hover:bg-secondary/10 hover:scale-110 transition-all duration-300"
                >
                  <InstagramLogoIcon size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-secondary hover:bg-secondary/10 hover:scale-110 transition-all duration-300"
                >
                  <LinkedinLogoIcon size={20} />
                </a>
              </div>
              {/* <div className="pt-4">
                <p className="text-xs text-white/50 mb-3">
                  Subscribe to our newsletter
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-white/5 border border-white/10 px-4 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-secondary transition-colors"
                  />
                  <button className="px-4 py-2 bg-secondary hover:bg-accent text-dark transition-colors">
                    <ArrowRightIcon size={18} />
                  </button>
                </div>
              </div> */}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} Auto Expert Advisory. All rights
              reserved.
            </p>
            {/* <div className="flex gap-8">
              <a href="#" className="hover:text-white/70 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePageComponent;
