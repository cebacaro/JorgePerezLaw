"useClient";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import BW from "@/public/B&W.jpg";
import img2 from "@/public/img2.png";
import img3BW from "@/public/img3BW.png";
import img4 from "@/public/img4.jpg";

const carouselItems = [
  {
    imgSrc: img4,
    alt: "carousel",
    title: "IMMIGRATION",
    topic: "SERVICES",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    priority: true,
  },
  {
    imgSrc: img2,
    alt: "carousel",
    title: "DESIGN SLIDER",
    topic: "ANIMAL",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    priority: false,
  },
  {
    imgSrc: BW,
    alt: "carousel",
    title: "DESIGN SLIDER",
    topic: "ANIMAL",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
    priority: false,
  },
  {
    imgSrc: img3BW,
    alt: "carousel",
    title: "IMMIGRATION",
    topic: "ANIMAL",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    priority: false,
  },
];
const thumbnailItems = [
  {
    imgSrc: img4,
    alt: "carousel",
    title: "Name Slider",
    description: "Description",
    priority: true,
  },
  {
    imgSrc: img2,
    alt: "carousel",
    title: "Name Slider",
    description: "Description",
    priority: true,
  },
  {
    imgSrc: BW,
    alt: "carousel",
    title: "Name Slider",
    description: "Description",
    priority: true,
  },
  {
    imgSrc: img3BW,
    alt: "img4",
    title: "Name Slider",
    description: "Description",
    priority: true,
  },
];


const Page = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };
 
  

  return (
    <div className="carousel h-full">
  <div className="list">
        <AnimatePresence mode='wait'>
          {/* Directly render the current item using currentIndex */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 1, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="item"
            style={{ position: 'absolute', inset: '0 0 0 0' }}
          >
               <Image 
              src={carouselItems[currentIndex].imgSrc} 
              alt={carouselItems[currentIndex].alt}
              priority={carouselItems[currentIndex].priority} 
              fill 
            
            />
            <div className="content">
              <div className="title">{carouselItems[currentIndex].title}</div>
              <div className="topic">{carouselItems[currentIndex].topic}</div>
              <div className="des">{carouselItems[currentIndex].description}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
 
          {/* // next prev// */}
          <div className="thumbnail">
  {thumbnailItems.map((item, index) => (
    <motion.div 
      key={index}
      className="item"
      animate={{
        opacity: index === currentIndex ? 1 : 0.5, 
        scale: index === currentIndex ? 1.1 : 1, 
      }}
      transition={{ duration: 0.5 }} 
    >
      <Image src={item.imgSrc} alt={item.alt} priority={item.priority || false} />
      <div className="content">
        <div className="title">{item.title}</div>
        <div className="description">{item.description}</div>
      </div>
    </motion.div>
  ))}
</div>
          
          <div className="arrows">
            <button onClick={handlePrev} id="prev">&lt;</button>
            <button onClick={handleNext} id="next">&gt;</button>
          </div>
         
          <div className="time"></div>
        </div>
      );
};

export default Page;


