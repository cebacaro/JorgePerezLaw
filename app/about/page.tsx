import React from "react";
import image from "@/public/bg-about.jpeg"
import Image from "next/image";

const page = () => {
  return (
    <div className=" relative w-full flex justify-center">
      <Image src={image} alt="bg" className="cover-fill mt-[-65px] h-[100vh]"/>
      <section className="absolute items-center justify-center inset-0 flex flex-col ">
        <h1 className="absolute z-20 top-24 font-bold text-6xl ">About Us</h1>
        <h2 className="" >We dedicate ourself to being more than legal <br/>representatives </h2>
        <div className="flex gap-5 m-10 max-w-[70%] " >
          <p className="block p-4 text-wrap " >Jorge Perez Law Firm is a firm serving New Orleans metro area residents and businesses. Since 2011, we have provided strategic legal counsel and services to meet clients personal, commercial, business, and litigation needs. We dedicate ourselves to being more than legal representatives.</p>
          <p className="block text-wrap p-4">We take the time to get to know our clients, understand their goals and develop strategies that often exceed their expectations  always helping them to navigate through challenges and identify opportunities where they may succeed. The confidence entrusted to us by our clients to represent them and share our best practices is a value we hold with the highest esteem.</p>
        </div>
      </section>
    </div>
  );
};

export default page;
