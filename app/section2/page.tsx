import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import image1 from "../../public/images/section2/image1.svg";

export default function Section2() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-medium text-[40px] leading-[44px] tracking-[0%]">
          Precision care powered <br /> by modern surgical <br /> innovation.
        </h1>

        <div>
          <p className="leading-[150%] tracking-[0%] text-[#00000073]">
            By combining the expertise of our highly skilled surgical team with
            the <br /> latest advancements in medical technology, we deliver
            precise and <br /> minimally invasive procedures designed to reduce
            discomfort, minimize <br /> recovery time, and enhance patient
            outcomes.
          </p>

          <button className="flex gap-0.5 items-center bg-[#007BFF] rounded-[4px] py-[12px] px-[32px] cursor-pointer text-white mt-[24px]">
            Learn More
            <ArrowRight className="w-[24px] h-[24px]" />
          </button>
        </div>
      </div>

      <div>
        <Image
          src={image1}
          alt="Medical services illustration"
          className="object-contain w-[400px] h-[374px]"
        />
      </div>
    </div>
  );
}
