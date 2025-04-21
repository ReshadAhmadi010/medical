"use client";
import React from "react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-[#003B7A] py-[50px] pl-[96px] flex justify-between pr-[234px] ">
      <div className="flex justify-between flex-col gap-[134px]">
        <div className="flex gap-[16px] flex-col">
          <h1 className="text-[18px] text-white font-medium">Laser Hassas</h1>
          <p className="leading-[100%] text-[16px] font-normal text-[#FFFFFFA3]">
            Reclaim control over your health with <br />
            compassionate, customized care that fits <br />
            seamlessly into your everyday life.
          </p>
        </div>
        <p className="leading-[100%] text-[16px] font-normal text-[#FFFFFFA3]">
          © 2025 Dr. Laser Hassas. All reserved
        </p>
      </div>

      <div className="flex gap-[132px]">
        <div className="flex flex-col gap-[24px]">
          <a
            id="about"
            href="#"
            className="leading-[100%] text-[16px] font-normal text-[#FFFFFFA3] hover:text-[#c5c5c5a3]"
          >
            Home
          </a>
          <button
            onClick={() => scrollToSection("about")} // Changed to point to services section
            className="text-left leading-[100%] text-[16px] font-normal text-[#FFFFFFA3] hover:text-[#c5c5c5a3]"
          >
            About us
          </button>
          <button
            onClick={() => scrollToSection("services")} // Changed to point to services section
            className="text-left leading-[100%] text-[16px] font-normal text-[#FFFFFFA3] hover:text-[#c5c5c5a3]"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("faqs")} // Changed to point to services section
            className="text-left leading-[100%] text-[16px] font-normal text-[#FFFFFFA3] hover:text-[#c5c5c5a3]"
          >
            FAQs
          </button>
        </div>

        <div className="flex flex-col gap-[24px]">
          <a
            href="#"
            className="leading-[100%] text-[16px] font-normal text-[#FFFFFFA3] hover:text-[#c5c5c5a3]"
          >
            Facebook
          </a>
          <a
            href="#"
            className="leading-[100%] text-[16px] font-normal text-[#FFFFFFA3] hover:text-[#c5c5c5a3]"
          >
            Telegram
          </a>
          <a
            href="#"
            className="leading-[100%] text-[16px] font-normal text-[#FFFFFFA3] hover:text-[#c5c5c5a3]"
          >
            Instagram
          </a>
          <a
            href="#"
            className="leading-[100%] text-[16px] font-normal text-[#FFFFFFA3] hover:text-[#c5c5c5a3]"
          >
            Whatsapp
          </a>
        </div>

        <div className="flex flex-col gap-[24px]">
          <a
            href="#"
            className="leading-[100%] text-[16px] font-normal text-[#FFFFFFA3] hover:text-[#c5c5c5a3]"
          >
            Terms of service
          </a>
          <a
            href="#"
            className="leading-[100%] text-[16px] font-normal text-[#FFFFFFA3] hover:text-[#c5c5c5a3]"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
