"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ListIcon } from "@phosphor-icons/react";
import NavLinks from "./Navlinks";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#231d14] text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="mx-auto flex justify-between items-center px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/auto-cars-logo.webp"
            alt="Logo"
            width={100}
            height={40}
            className="object-contain h-[40px] w-auto"
          />
        </Link>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <ListIcon size={32} />
        </button>

        <nav className="hidden md:flex space-x-8">
          <NavLinks />
        </nav>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-[#231d14] px-6 py-4 space-y-4">
          <NavLinks onClick={() => setMenuOpen(false)} />
        </nav>
      )}
    </header>
  );
}
