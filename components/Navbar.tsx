"use client";

import * as React from "react";
import { useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center px-4 w-full ">
        <div className="flex justify-center items-center py-1">
          <a href="#home" id="logoLink" className="block h-auto w-auto m-1">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
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
              <Link href="#attorney">Attorney</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#resources">Resources</Link>
            </Button>

            <Button variant="ghost" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#reviews">Reviews</Link>
            </Button>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden flex justify-center items-center mr-4"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>
      <div
        className={`fixed top-0 right-0 h-full bg-black/20 shadow-lg z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <nav className="flex flex-col items-center justify-start mt-8 h-full space-y-6">
          <Button variant="ghost" asChild onClick={toggleMenu}>
            <Link href="#home">Home</Link>
          </Button>
          <Button variant="ghost" asChild onClick={toggleMenu}>
            <Link href="#services">Practice Areas</Link>
          </Button>
          <Button variant="ghost" asChild onClick={toggleMenu}>
            <Link href="#about">About Us</Link>
          </Button>
          <Button variant="ghost" asChild onClick={toggleMenu}>
            <Link href="#attorney">Attorney</Link>
          </Button>
          <Button variant="ghost" asChild onClick={toggleMenu}>
            <Link href="#contact">Contact Us</Link>
          </Button>
          <Button variant="ghost" asChild onClick={toggleMenu}>
            <Link href="#resources">Resources</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#reviews">Reviews</Link>
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
