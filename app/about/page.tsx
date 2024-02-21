import React from "react";
import image from "@/public/bg-about.jpeg"
import Image from "next/image";


const page = () => { return (
   <div className="relative w-full h-screen overflow-hidden flex justify-center mt-[-65px]">
  <Image src={image} alt="bg" className="absolute inset-0 w-full h-full object-cover"/>
  <section className="absolute inset-0 flex gap-6 lg:gap-12 md:gap-12 flex-col items-center justify-center backdrop-filter backdrop-blur-md bg-opacity-20 bg-black  ">
    <h1 className="z-20 text-6xl font-lora font-normal lg:tracking-wider ">About Us</h1>
    <h2 className="font-lora text-[#ceb475] uppercase lg:text-[30px] md:p-4 text-center tracking-wider ">We dedicate ourselves to being more than legal <br /> representatives</h2>
    <div className="lg:flex  gap-5 m-2 max-w-[70%] font-raleway font-extralight  lg:text-[23px]">
      <p className="p-4">Jorge Perez Law Firm is a firm serving New Orleans metro area residents and businesses. Since 2011, we have provided strategic legal counsel and services to meet clients personal, commercial, business, and litigation needs. We dedicate ourselves to being more than legal representatives.</p>
      <p className="p-4">We take the time to get to know our clients, understand their goals, and develop strategies that often exceed their expectations — always helping them to navigate through challenges and identify opportunities where they may succeed. The confidence entrusted to us by our clients to represent them and share our best practices is a value we hold with the highest esteem.</p>
    </div>
  </section>
</div>

  );
};

export default page;
