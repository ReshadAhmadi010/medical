import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="flex justify-between items-center px-[96px] pt-[26px]">
      <div>
        <h1 className="font-medium text-[18px] leading-[]">Laser Hassas</h1>
      </div>

      <div className=" ">
        <ul className="flex gap-[54px] leading-[100%] tracking-[0%] text-[#1E1E1E80]">
          <Link className="hover:text-black" href="/">
            Home
          </Link>
          <Link className="hover:text-black" href="/">
            About us
          </Link>
          <Link className="hover:text-black" href="/">
            Services
          </Link>
          <Link className="hover:text-black" href="/">
            FAQs
          </Link>
        </ul>
      </div>

      <div>
        <Link href="/contact">
          {" "}
          <button className="bg-[#007BFF] rounded-[4px] py-[12px] px-[32px] cursor-pointer text-white">
            {" "}
            Contact us
          </button>
        </Link>
      </div>
    </div>
  );
}
