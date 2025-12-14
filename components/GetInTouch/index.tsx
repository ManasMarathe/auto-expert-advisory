"use client";
import useInView from "@/hooks/useInView";
import {
  DeviceMobileIcon,
  EnvelopeIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  PhoneDisconnectIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";
import { orbitron, questrial, quicksand } from "@/utils/fonts";
import { GetInTouchData as data } from "@/utils/data";
import Link from "next/link";

const GetInTouch = () => {
  const { ref, isVisible } = useInView({ threshold: 0.3 });
  return (
    <section
      ref={ref}
      className={`bg-[#f4f1ec] px-4 sm:px-16 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8 `}
    >
      <div
        className={`space-y-6 ${questrial.className} ${
          isVisible ? "animate__animated animate__fadeInUp " : "opacity-0"
        }`}
      >
        <h3 className={`text-3xl text-[#66231b] ${orbitron.className}`}>
          {data.title1}
        </h3>

        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 items-center">
          <MapPinIcon size={30} color="#cdad7d" weight="light" />
          <p>{data.address}</p>

          <PhoneDisconnectIcon size={30} color="#cdad7d" weight="light" />
          <p>{data.telephone}</p>

          <DeviceMobileIcon size={30} color="#cdad7d" weight="light" />
          <p>{data.phone}</p>

          <EnvelopeIcon size={30} color="#cdad7d" weight="light" />
          <p>{data.email}</p>
        </div>
      </div>

      <div
        className={`space-y-6 ${
          isVisible ? "animate__animated animate__fadeInUp" : "opacity-0"
        }`}
      >
        <h3 className={`text-3xl text-[#66231b] ${orbitron.className}`}>
          {data.title2}
        </h3>
        <div className="space-y-2">
          <h5 className={`text-[#cdad7d] font-semibold ${quicksand.className}`}>
            {data.officeHours}
          </h5>
          <p className={`${quicksand.className}`}>{data.timing}</p>
          <p className={`text-[#cdad7d] font-semibold ${quicksand.className}`}>
            {data.closed}
          </p>
        </div>
      </div>

      <div
        className={`space-y-6 ${
          isVisible ? "animate__animated animate__fadeInUp" : "opacity-0"
        }`}
      >
        <h3 className={`text-3xl text-[#66231b] ${orbitron.className}`}>
          {data.title3}
        </h3>
        <div className="flex gap-4 mt-2">
          <Link
            href="https://www.instagram.com/p/DCrbQfqiR8j/?igsh=ZGN4aWhoZ3Njamxn"
            target="_blank"
          >
            <InstagramLogoIcon size={30} color="#cdad7d" weight="light" />
          </Link>
          <LinkedinLogoIcon size={30} color="#cdad7d" weight="light" />
        </div>
      </div>

      <div
        className={`grid place-content-center ${
          isVisible ? "animate__animated animate__fadeInUp" : "opacity-0"
        }`}
      >
        <Image
          src="/footerImg.webp"
          alt="Map"
          width={205}
          height={168}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default GetInTouch;
