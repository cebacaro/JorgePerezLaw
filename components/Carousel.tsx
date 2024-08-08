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
    title: "PERSONAL ",
    topic: "INJURY",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    priority: true,
  },
  {
    imgSrc: img2,
    alt: "carousel",
    title: "CIVIL & COMMERCIAL",
    topic: "LITIGATION",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    priority: false,
  },
  {
    imgSrc: BW,
    alt: "carousel",
    title: "IMMIGRATION",
    topic: "DEFENSE",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    priority: false,
  },
  {
    imgSrc: img3BW,
    alt: "carousel",
    title: "TAXATION",
    topic: "BUSSINES & PERSONAL",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
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
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel h-full relative">
      <div className="list">
        <AnimatePresence initial={false} mode="wait">
          {carouselItems.length > 0 && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 50, filter: "blur(20px)" }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="item easy-in"
              style={{ position: "absolute", inset: "0 0 0 0" }}
            >
              <Image
                src={carouselItems[currentIndex].imgSrc}
                alt={carouselItems[currentIndex].alt}
                priority={carouselItems[currentIndex].priority}
                loading={
                  carouselItems[currentIndex].priority ? "eager" : "lazy"
                }
                layout="fill"
                objectFit="cover"
              />
              <div className="content  lg:p-0 text-xs lg:text-lg text-center lg:text-left mx-auto lg:mx-0 lg:w-[50%]">
                <div className="title text-[12px] lg:text-4xl font-bold">
                  {carouselItems[currentIndex].title}
                </div>
                <div className="topic text-lg lg:text-2xl mt-2">
                  {carouselItems[currentIndex].topic}
                </div>
                <div className="des text-sm lg:text-lg mt-4">
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
