"useClient";

import React, { useEffect } from 'react';
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
  },
  {
    imgSrc: img2,
    alt: "carousel",
    title: "DESIGN SLIDER",
    topic: "ANIMAL",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
  },
  {
    imgSrc: BW,
    alt: "carousel",
    title: "DESIGN SLIDER",
    topic: "ANIMAL",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
  },
  {
    imgSrc: img3BW,
    alt: "carousel",
    title: "IMMIGRATION",
    topic: "ANIMAL",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
  },
];
const thumbnailItems = [
  {
    imgSrc: img3BW,
    alt: "carousel",
    title: "Name Slider",
    description: "Description",
  },
  {
    imgSrc: BW,
    alt: "carousel",
    title: "Name Slider",
    description: "Description",
    priority: true, // Adding priority as an optional property
  },
  {
    imgSrc: img2,
    alt: "carousel",
    title: "Name Slider",
    description: "Description",
  },
  {
    imgSrc: img4,
    alt: "img4",
    title: "Name Slider",
    description: "Description",
  },
];


const Page = () => {
  useEffect(() => {
    const showSlider = (type:'next'|'prev') => {
      const carouselDom = document.querySelector('.carousel');

  if (!carouselDom) {
    console.error('Carousel DOM element not found.');
    return; 
  }

      const sliderDom = carouselDom?.querySelector('.list');
      const thumbnailBorderDom = carouselDom?.querySelector('.thumbnail');
      
      if (!sliderDom || !thumbnailBorderDom) {
        console.error('Required DOM elements not found for slider functionality.');
        return;
      }

      const sliderItemsDom = sliderDom.querySelectorAll('.item');
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

      if (type === 'next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      } else if (type === 'prev') {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      }

      carouselDom.classList.add(type);
      setTimeout(() => carouselDom.classList.remove('next', 'prev'), 3000);
    };

    const setupButtonListeners = () => {
      document.getElementById('next')?.addEventListener('click', () => showSlider('next'));
      document.getElementById('prev')?.addEventListener('click', () => showSlider('prev'));
    };

    setupButtonListeners();
  }, []);

  return (
    <div className="carousel h-[100vh]">
    <div className="list">
      {carouselItems.map((item, index) => (
        <div key={index} className="item">
          <Image src={item.imgSrc} alt={item.alt} />
          <div className="content">
            <div className="title">{item.title}</div>
            <div className="topic">{item.topic}</div>
            <div className="des">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
 
          {/* // next prev// */}
          <div className="thumbnail">
    {thumbnailItems.map((item, index) => (
      <div key={index} className="item">
        <Image src={item.imgSrc} alt={item.alt} priority={item.priority || false} />
        <div className="content">
          <div className="title">{item.title}</div>
          <div className="description">{item.description}</div>
        </div>
      </div>
    ))}
  </div>
          {/* next prev */}
          <div className="arrows">
            <button id="prev">&lt;</button>
            <button id="next">&gt;</button>
          </div>
          {/* <!-- time running --> */}
          <div className="time"></div>
        </div>
      );
};

export default Page;


