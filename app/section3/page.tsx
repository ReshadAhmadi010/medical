import React from "react";
import Image from "next/image";
import image1 from "../../public/images/section3/image1.svg";
import image2 from "../../public/images/section3/image2.svg";
import image3 from "../../public/images/section3/image3.svg";
import { ArrowRight, CircleArrowRight } from "lucide-react";

const cards = [
  {
    image: image1,
    title: "Get Results Online",
    id: 1,
    background:
      "linear-gradient(180deg, rgba(133, 133, 133, 0.5) 0%, rgba(217, 217, 217, 0) 122.01%)",
  },
  {
    image: image2,
    title: "Progressive Care",
    id: 2,
    background: "bg-gradient-to-b from-[rgba(214,182,133,0.2)] to-[#916B31]",
  },
  {
    image: image3,
    title: "10+ Years Expertise",
    id: 3,
    background: "bg-gradient-to-b from-[#d9d9d9]/50 to-[#0E0E0E]/70",
  },
];

export default function Section3() {
  return (
    <div className="pb-24">
      {/* Header section */}
      <div className="flex flex-col justify-center">
        <h1 className="font-medium leading-[44px] text-[40px] text-center">
          Comprehensive surgical <br /> solutions by Dr. Laser Hassas
        </h1>

        <p className="font-light text-center pt-[16px] leading-[150%] tracking-[0%]">
          Dr. Laser Hass specializes in advanced laser surgery <br />{" "}
          techniques, ensuring precision and minimal recovery time.{" "}
        </p>
      </div>

      {/* Cards section */}
      <div className="flex gap-4 mt-10">
        {cards.map((item) => (
          <div key={item.id} className="relative h-[520px] w-full rounded-lg">
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="absolute  w-full h-full"
            />
            <div
              className={`absolute bottom-0 left-0 right-0 py-[27px] px-[57px]  items-center justify-between  "bg-gradient-to-b from-[rgba(133,133,133,0.5)] to-[rgba(217,217,217,0)] backdrop-blur-[120px]`}
            >
              <h1 className="text-white font-medium text-[18px] text-center leading-[130%] tracking-[0%]">
                Laser surgery <br /> precision and care{" "}
              </h1>
              <p className="font-light leading-[150%] tracking-[0%] text-center text-[#FFFFFF] pt-[10px]">
                Utilizing the art technology, laser surgery <br /> offers less
                pain and faster healing.
              </p>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
