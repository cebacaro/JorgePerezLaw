"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  const { setTheme } = useTheme();
  return (
    <>
      <header className="flex justify-between items-center px-4 w-full ">
        <div className="flex justify-center items-center py-1">
        <a href="#home" id="logoLink" className="block h-auto w-auto m-1">
  <Image
    src="/logo.png"
    alt="logo"
    width={40}
    height={40}
  />
</a>

        </div>
        <div className="flex justify-center items-center">
          <div className="hidden md:block mr-4">
            <Button variant="ghost" asChild>
              <Link href="#home">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#services">Practice Areas</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#about">About Us</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#attorney">Attorney</Link>
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="md-hidden">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Menu className="h-6 w-6 md:hidden justify-center items-center mr-4" />{" "}
        </div>
      </header>
    </>
  );
};

export default Navbar;
