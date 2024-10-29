"use client";

import React from "react";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import PrivacyPolicy from "@/app/privacy-policy/page";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex mt-4 flex-col items-center">
      <h1>&#169; Copyrights Jorge Perez Law Firm, LLC</h1>
      <div className="flex flex-row m-4 items-center h-auto gap-4">
        <a
          href="https://www.facebook.com/JorgePerezAttorney"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/jorge-perez-llc-3a4b3b1b5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <Link href="./privacy-policy" target="_self">
        <h2 className="mb-4">Privacy Policy</h2>
      </Link>
    </div>
  );
};

export default Footer;
