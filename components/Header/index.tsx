import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-950 text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-[--container-max-width] mx-auto px-8">
        <Image
          src="/auto-cars-logo.webp"
          alt="Logo"
          width={100}
          height={40}
          className="object-contain h-[40px] w-auto"
        />
      </div>
    </header>
  );
};

export default Header;
