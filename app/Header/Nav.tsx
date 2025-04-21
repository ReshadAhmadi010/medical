"use client";

import Link from "next/link";
import React from "react";

export default function Nav() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between items-center px-[96px] pt-[26px]">
      <div>
        <h1 className="font-medium text-[18px]">Laser Hassas</h1>
      </div>

      <div>
        <ul className="flex gap-[54px] leading-[100%] tracking-[0%] text-[#1E1E1E80]">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-black"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-black"
          >
            About us
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-black"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("faqs")}
            className="hover:text-black"
          >
            FAQs
          </button>
        </ul>
      </div>

      <div>
        <Link href="/contactus">
          <button className="bg-[#007BFF] rounded-[4px] py-[12px] px-[32px] cursor-pointer text-white">
            Contact us
          </button>
        </Link>
      </div>
    </div>
  );
}
