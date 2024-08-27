import React from "react";
import Image from "next/image";
import image from "@/public/bg-about.jpeg";

const page = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center mt-[-65px]">
      <Image
        src={image}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <section className="absolute inset-0 flex gap-6 lg:gap-12 md:gap-12 flex-col items-center justify-center backdrop-filter backdrop-blur-md bg-opacity-20 bg-black  ">
        <h1 className="z-20 text-4xl font-lora font-normal lg:tracking-wider text-[#ceb475]">
          JORGE PEREZ
        </h1>

        <p className="lg:flex  gap-5 m-2 max-w-[70%] text-balance  font-raleway font-extralight  lg:text-[23px]">
          Born in Puerto Rico, Jorge Perez is an Attorney and Certified Public
          Accountant. He graduated Magna Cum Laude from the University of Puerto
          Rico, earning a B.S.B.A. in Accounting and earned his law degree from
          Loyola University New Orleans College of Law. Mr. Perez is admitted to
          practice law in all Louisiana State Courts and has over 8 years of
          experience in the following practice areas: Personal Injury,
          Immigration, Taxation, Civil and Commercial Litigation, and Family
          Law. He is also a notary public. Mr. Perez has also worked as a CPA
          more than 15 years with PricewaterhouseCoopers, LLP, San Juan, Puerto
          Rico and Malcolm M. Dienes, L.L.C., Metairie, Louisiana. Mr. Perez is
          fluent in Spanish and English. Mr.Perez has also worked with the Pro
          Bono Project of New Orleans. In his free time he plays bass around New
          Orleans.
        </p>
      </section>
    </div>
  );
};

export default page;
