"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import Logo from "@/components/Logo";

export type navItemType = {
  id: number;
  label: string;
  href: string;
};

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 w-[100vw]  flex justify-between lg:space-around items-center py-2 border-b backdrop-blur-lg  bg-transparent px-2 lg:px-16 overflow-x-hidden">
      <div className="w-full lg:flex hidden gap-x-20 items-center">
        <div className="relative z-20 flex items-center">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "link" }), "text-sm tracking-tighter")}>
            <Logo />
          </Link>
        </div>
      </div>
      <div className="flex lg:hidden">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "link" }), "text-sm tracking-tighter")}>
          <Logo />
        </Link>
      </div>

      <div className="flex gap-x-4 items-center mr-2">
        <Link href="/sign-up" className=" tracking-tighter">
          <Button className="lg:mx-2 w-full group mx-1 bg-green-700 hover:bg-green-800" size="sm">
            <span className="lg:mr-2 mr-1">Download Now</span>
            <svg
              className="group-hover:translate-x-2 duration-200 max-w-[22px] hidden lg:flex"
              width={27}
              height={14}
              viewBox="0 0 27 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.217443 6.25H18.4827C18.6276 6.25 18.7001 6.30263 18.7001 6.40789V7.59211C18.7001 7.69737 18.6276 7.75 18.4827 7.75H0.217443C0.0724811 7.75 0 7.69737 0 7.59211V6.40789C0 6.30263 0.0724811 6.25 0.217443 6.25Z"
                fill="currentColor"
              />
              <path
                d="M20.7001 12.2802L25.0467 7.93355C25.5601 7.42021 25.5601 6.58021 25.0467 6.06688L20.7001 1.72021"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
