import { ArrowRight, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import image1 from "../../public/images/section2/image1.svg";
import image2 from "../../public/images/section2/image2.svg";
import image3 from "../../public/images/section2/image3.svg";

const cards = [
  {
    image: image1,
    title: "Get Results Online",
    id: 1,
    background: "bg-gradient-to-b from-[rgba(218,204,193,0.5)] to-[#785E51]",
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

export default function Section2() {
  return (
    <div className="pb-24">
      {/* Header section */}
      <div className="flex justify-between">
        <h1 className="font-medium leading-[44px] text-[40px]">
          Precision care powered <br /> by modern surgical <br />
          innovation.
        </h1>

        <div className="flex flex-col gap-5">
          <h1 className="text-base leading-[150%] text-[#00000073]">
            By combining the expertise of our highly skilled surgical team with
            the <br />
            latest advancements in medical technology, we deliver precise and{" "}
            <br />
            minimally invasive procedures designed to reduce discomfort,
            minimize <br />
            recovery time, and enhance patient outcomes.
          </h1>

          <button className="py-[14px] gap-[11px] cursor-pointer self-start px-8 flex items-center bg-[#007BFF] rounded-[4px] text-white">
            Learn More
            <ArrowRight className="cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Cards section */}
      <div className="flex gap-4 mt-10">
        {cards.map((item) => (
          <div
            key={item.id}
            className="relative h-[330px] w-full rounded-lg overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full"
            />
            <div
              className={`absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between ${
                item.background ?? "bg-black/60"
              }`}
            >
              <h3 className="text-white font-medium text-[24px]">
                {item.title}
              </h3>
              <CircleArrowRight className="text-white mt-2 w-[56px] h-[39px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
