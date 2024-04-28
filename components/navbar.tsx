"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Define a reusable ListItem component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible((prev) => !prev);
  };

  return (
    <div>
      <div className="p-4 md:p-5 flex items-center justify-between z-50">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>

        {/* Main Navigation Links */}
        <div className="cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <Link href="/" className="hover:text-gray-50">
            Home
          </Link>
          <Link href="#about" className="hover:text-gray-50">
            About Us
          </Link>
          <Link href="#services" className="hover:text-gray-50">
            Services
          </Link>
          <Link href="#portfolio" className="hover:text-gray-50">
            Portfolio
          </Link>
          <Link href="/pricing" className="hover:text-gray-50">
            Pricing
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <X
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        {/* Mobile Drop Down */}
        {isDropDownVisible && (
          <div className="absolute top-16 w-full bg-black flex flex-col p-4 z-50">
            <Link
              href="/"
              className="hover:text-gray-50"
              onClick={toggleDropDown}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-gray-50"
              onClick={toggleDropDown}
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="hover:text-gray-50"
              onClick={toggleDropDown}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="hover:text-gray-50"
              onClick={toggleDropDown}
            >
              Portfolio
            </Link>
            <Link
              href="/pricing"
              className="hover:text-gray-50"
              onClick={toggleDropDown}
            >
              Pricing
            </Link>
          </div>
        )}

        {/* Contact Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
              bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 
              focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
