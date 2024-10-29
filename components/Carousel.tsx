"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import BW from "@/public/B&W.jpg";
import img2 from "@/public/img2.png";
import img3BW from "@/public/img3BW.png";
import img4 from "@/public/img4.jpg";

const carouselItems = [
  {
    imgSrc: img4,
    alt: "carousel",
    title: "PERSONAL",
    topic: "INJURY",
    description:
      "Our firm provides compassionate and assertive representation for victims of personal injury and accidents. We fight tirelessly to ensure our clients receive the justice and maximum compensation they deserve, guiding them through every step of the legal process.",
    priority: true,
  },
  {
    imgSrc: img2,
    alt: "carousel",
    title: "CIVIL & COMMERCIAL",
    topic: "LITIGATION",
    description:
      "With extensive experience in civil and commercial litigation, we offer strategic legal services designed to resolve disputes effectively. Our approach is focused on protecting your rights and business interests, whether through negotiation or in the courtroom.",
    priority: false,
  },
  {
    imgSrc: BW,
    alt: "carousel",
    title: "IMMIGRATION",
    topic: "DEFENSE",
    description:
      "We are committed to providing robust defense and personalized support in complex immigration cases. Whether facing deportation or seeking residency, we help our clients navigate the intricate U.S. immigration system to safeguard their future.",
    priority: false,
  },
  {
    imgSrc: img3BW,
    alt: "carousel",
    title: "TAXATION",
    topic: "BUSINESS & PERSONAL",
    description:
      "Our firm offers expert legal advice on all taxation matters, from compliance to dispute resolution. We work closely with clients to optimize their tax strategies, ensuring they meet their obligations while maximizing financial efficiency.",
    priority: false,
  },
];

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    setCurrentIndex(0);
    const interval = setInterval(() => {
      handleNext();
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full h-screen overflow-hidden relative">
      <div className="list h-full">
        <AnimatePresence initial={false} mode="wait">
          {carouselItems.length > 0 && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: -50, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -50, filter: "blur(20px)" }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="item ease-in h-full relative"
              style={{ position: "absolute", inset: 0 }}
            >
              <Image
                src={carouselItems[currentIndex].imgSrc}
                alt={carouselItems[currentIndex].alt}
                priority={carouselItems[currentIndex].priority}
                loading={
                  carouselItems[currentIndex].priority ? "eager" : "lazy"
                }
                fill
                style={{ objectFit: "cover" }}
                className="z-0"
              />
              <div className="absolute inset-0 bg-black/25 z-10"></div>
              <div className="content lg:p-0 text-[10px] lg:text-lg text-left lg:mx-0 z-20 absolute bottom-8 left-8">
                <div className="title text-sm lg:text-3xl font-bold text-gray-300">
                  {carouselItems[currentIndex].title}
                </div>
                <div className="topic text-base lg:text-2xl mt-2">
                  {carouselItems[currentIndex].topic}
                </div>
                <div className="des text-base lg:text-2xl font-raleway mt-4 text-gray-300">
                  {carouselItems[currentIndex].description}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="arrows absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button onClick={handlePrev} id="prev" className="text-white">
          &lt;
        </button>
        <button onClick={handleNext} id="next" className="text-white">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Page;
