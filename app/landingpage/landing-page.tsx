import React from "react";
import Image from "next/image";
import medicalImage from "@/public/images/medical.svg";
import human from "@/public/images/human.svg";
import shapes from "@/public/images/shapes.svg";
import shapeR from "@/public/images/shapeR.svg";

export default function Landingpage() {
  return (
    <div className=" ">
      <div className="absolute">
        <Image
          src={shapes}
          alt="Medical services illustration"
          className="object-contain"
        />
      </div>

      <div className="absolute right-[96px] ">
        <Image
          src={shapeR}
          alt="Medical services illustration"
          className="object-contain"
        />
      </div>
      <div className="my-[56px] py-[57px] bg-[#FFFFFF] ">
        <div className="flex items-center justify-center">
          <div className="bg-[#F4F4F4B2] flex justify-center items-center self-center  gap-[10px] py-[10px] px-[16px] rounded-[30px]">
            <Image
              src={medicalImage}
              alt="Medical services illustration"
              className="object-contain"
            />
            <h1 className="font-normal text-[14px] leading-[140%] tracking-[10%] text-[#353849]">
              Medical Services
            </h1>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-[48px] text-center pt-[16px] leading-[50px] tracking-[-1%] text-[#1E1E1E]">
            Specialized care to enhance <br /> your health & happiness.
          </h1>
        </div>

        <div>
          <p className="text-[18px] leading-[140%] tracking-[2%] text-[#1E1E1E80] text-center pt-[16px]">
            Reclaim control over your health with <br /> compassionate,
            customized care that fits <br /> seamlessly into your everyday life.
          </p>
        </div>

        <div>
          <div className="flex flex-col items-center gap-6 pt-[24px]">
            <div className="flex items-center gap-4 w-[506px] border border-[#DFE1E6] rounded-[6px] py-[8px] px-[8px]">
              <input
                type="text"
                placeholder="Enter Your Patient ID..."
                className="flex-1 py-3 px-4 w-full focus:outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="bg-blue-500 text-white py-[11px] px-[32px]  rounded-lg hover:bg-blue-600 transition-colors">
                Search
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 pt-[24px]">
            <Image
              src={human}
              alt="Medical services illustration"
              className="object-contain"
            />

            <span>4.8/Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
}
