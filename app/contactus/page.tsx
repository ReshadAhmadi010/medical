"use client";
import Image from "next/image";
import { LoginForm } from "@/components/login-form";
import image1 from "@/public/images/login/image1.svg";
import { CircleHelp } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) return;

  return (
    <div>
      <div  className="grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col gap-4 px-24 py-9">
          <div className="flex justify-center gap-2 md:justify-start">
            <a
              href="#"
              className="  gap-2 font-semibold text-[24px] leading-[130%] tracking-[0%]"
            >
              Dr Laser Hassas
            </a>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-xs">
              <LoginForm />
            </div>
          </div>
          <div className="flex justify-between text-gray-700 ">
            <p>© 2025 Dr. Laser Hassas. All reserved.</p>
            <p className="flex text-gray-700 gap-[8px] items-center">
              {" "}
              <CircleHelp className="w-[13px] " /> Help
            </p>
          </div>
        </div>
        <div className="relative hidden lg:block m-[12px]">
          <Image
            src={image1}
            alt="Decorative background"
            layout="fill"
            objectFit="cover"
            className=" rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
