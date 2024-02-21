"use client";


import About from "./about/page";
import Services from "./services/page";
import Contact from "./contact/page";
import Image from "next/image";
import Attorney from "./attorney/page";
import hero from "@/public/img1.png";
import logo from "@/public/logoT.png"

export default function Home() {
  return (
    <main id="home" className="flex flex-col w-full">
      <section className="relative min-h-screen items-center">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={hero}
            alt="Picture of the author"
            className="object-cover w-full h-full" //
          />
        </div>

        <div className="absolute left-0 z-10 flex flex-col w-full h-full justify-center p-48 bg-slate-800/50 gap-6 scroll-smooth">
          <Image src={logo} width={600} height={800} alt="logo" 
         />
          <h1 className="text-white font-lora tracking-[2px] ">DEFENDING YOUR RIGHTS AND INTERESTS</h1>
          <p className="font-raleway font-light block lg:w-[40%] text-white text-wrap ">
            Jorge Perez Law Firm, LLC is a law firm based in New Orleans metro
            area, LA with an emphasis in Personal Injury and Accidents, Civil
            and Commercial Litigation, Immigration Defense, and Taxation
          </p>
        </div>
      </section>
      <div className="relative -mt-16 h-16 invisible"></div>
      <section id="services" className="relative min-h-screen pt-16">
        <Services />
      </section>
      <section id="about" className="relative min-h-screen pt-16">
        <About />
      </section>
      <section id="contact" className="relative min-h-screen pt-16">
        <Contact />
      </section>
      <section id="attorney" className="relative min-h-screen pt-16">
        <Attorney />
      </section>
    </main>
  );
}
