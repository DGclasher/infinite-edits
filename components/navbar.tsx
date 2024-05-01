"use client";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

const Navbar = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div className="sticky top-0">
      <div className="p-4 flex items-center justify-between z-50 top-0">
        <div className="flex gap-4 items-center text-white text-xl">
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo_infinite_media.png"
              alt="Logo"
              width={500}
              height={500}
              className="w-12 h-12 "
            />
          </Link>
         
        </div>
        <div
          className="cursor-pointer hidden 
            lg:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          <Link href="/#about" scroll={true}>
            About
          </Link>
          <Link href="/#services" scroll={true}>
            Services
          </Link>

          <Link href="/#portfolio" scroll={true}>
            Portfolio
          </Link>
          
          <Link href="/#pricing" scroll={true}>
            Pricing
          </Link>
          
          <Link href="/media-school" scroll={true}>
            Media School
          </Link>
        </div>

        <div className="flex lg:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu onClose={closeDropDown} />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="
            bg-white text-black px-4 py-2 rounded-xl

            "
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
