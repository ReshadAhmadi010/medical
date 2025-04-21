"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col ">
        <h3 className=" font-bold text-[22px] ">Welcome back.</h3>
        <p className="text-muted-foreground  text-balance text-[14px] -tracking-tight">
          Good to see you again. Log in to your account.
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label
            htmlFor="email"
            className="text-muted-foreground text-sm text-balance"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            className="py-5"
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label
              htmlFor="password"
              className="text-muted-foreground text-sm text-balance"
            >
              Password
            </Label>
            <a
              href="#"
              className="ml-auto text-sm text-muted-foreground text-balance underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter your password"
              className="py-5"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            >
              {showPassword ? (
                <EyeClosed className="text-gray-500 w-[13px] h-[13px]" />
              ) : (
                <Eye className="text-gray-500  w-[13px] h-[13px]" />
              )}
            </button>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full hover:bg-[#808897] cursor-pointer  py-[24px]"
        >
          Log in
        </Button>
      </div>
    </form>
  );
}
