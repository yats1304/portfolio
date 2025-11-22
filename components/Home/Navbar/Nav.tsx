"use client";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // For navbar background
      setNavBg(currentScroll >= 90);

      // Detect scroll direction
      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down → hide navbar
        setHidden(true);
      } else {
        // Scrolling up → show navbar
        setHidden(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`transition-all duration-300 z-[10000] fixed w-full 
      ${hidden ? "-translate-y-full" : "translate-y-0"}
      ${navBg ? "bg-[#0f142ed9] shadow-md" : ""}`}
    >
      <div className="flex items-center h-[12vh] justify-between w-[90%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            YATISH
          </h1>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
            >
              <p>{link.label}</p>
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Resume Button */}
          <a
            href="/Yatish_Chaubal(Frontend).pdf"
            download
            className="inline-flex px-10 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 text-white items-center space-x-2 transition-all duration-300"
          >
            <BiDownload className="w-5 h-5" />
            <span>Download Resume</span>
          </a>

          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
