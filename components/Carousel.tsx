"useClient";

import React, { useEffect } from 'react';
import Image from "next/image";
import BW from "@/public/B&W.jpg";
import img2 from "@/public/img2.png";
import img3BW from "@/public/img3BW.png";
import img4 from "@/public/img4.jpg";

const Page = () => {
  useEffect(() => {
    
      const showSlider = (type) => {
      const carouselDom = document.querySelector('.carousel');
      const SliderDom = carouselDom ? carouselDom.querySelector('.list') : null;
      const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
      if (!SliderDom || !thumbnailBorderDom) {
        console.error('Required DOM elements not found for slider functionality.');
        return;
      }
      
      const SliderItemsDom = SliderDom.querySelectorAll('.item');
      const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
      
      if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        if (carouselDom) { // Check if carouselDom is not null before accessing its properties
          carouselDom.classList.add('next');
        }
      } else if (type === 'prev') {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        if (carouselDom) { // Check if carouselDom is not null before accessing its properties
          carouselDom.classList.add('prev');
        }
      }
      
      // Resetting classes after animation
      setTimeout(() => {
        if (carouselDom) { // Ensure carouselDom is not null before trying to modify its classList
          carouselDom.classList.remove('next', 'prev');
        }
      }, 3000);
      
     
    
    };

  // Setup event listeners for next and previous buttons
    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');

    if (nextDom) {
      nextDom.onclick = () => showSlider('next');
    } else {
      console.error('Next button DOM element is null. Make sure your element with ID "next" exists.');
    }

    if (prevDom) {
      prevDom.onclick = () => showSlider('prev');
    } else {
      console.error('Previous button DOM element is null. Make sure your element with ID "prev" exists.');
    }
  }, []);

  return (
        <div className="carousel h-[100vh]">
            {/* list item */}
            <div className="list">
            <div className="item">
              <Image src={img4} 
              alt="carousel" />
              <div className="content">
                <div className="title">IMMIGRATION</div>
                <div className="topic">SERVICES</div>
                <div className="des">
                  {/* lorem 50 */}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,
                  rem magnam nesciunt minima placeat, itaque eum neque officiis unde,
                  eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut
                  doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora
                  at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                </div>
              
              </div>
            </div>
            <div className="item">
              <Image src={img2}
              alt="carousel" />
              <div className="content">
               
                <div className="title">DESIGN SLIDER</div>
                <div className="topic">ANIMAL</div>
                <div className="des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,
                  rem magnam nesciunt minima placeat, itaque eum neque officiis unde,
                  eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut
                  doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora
                  at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                </div>
                
              </div>
            </div>
            <div className="item"
            >
              <Image src={BW}
              alt="carousel" />
              <div className="content">
                <div className="title">DESIGN SLIDER</div>
                <div className="topic">ANIMAL</div>
                <div className="des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,
                  rem magnam nesciunt minima placeat, itaque eum neque officiis unde,
                  eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut
                  doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora
                  at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                </div>
               
              </div>
            </div>
            <div className="item">
              <Image src={img3BW}
              alt="carousel"/>
              <div className="content">
                <div className="title">IMMIGRATION</div>
                <div className="topic">ANIMAL</div>
                <div className="des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,
                  rem magnam nesciunt minima placeat, itaque eum neque officiis unde,
                  eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut
                  doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora
                  at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                </div>
             
              </div>
            </div>
          </div>
          {/* // next prev// */}
          <div className="thumbnail">
            <div className="item">
              <Image src={img3BW}
              alt="carousel"/>
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
              </div>
            </div>
            <div className="item"
            > 
              <Image src={BW}
              alt="carousel"
              priority/>
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
              </div>
            </div>
            <div className="item">
              <Image src={img2}alt="carousel"/>
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
              </div>
            </div>
            <div className="item">
              <Image src={img4} 
              alt="img4"/>
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
              </div>
            </div>
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


