import React from "react";
import Image from "next/image";

const reviews = [
  {
    author_name: "Luis Perez",
    rating: 5,
    text: "Jorge Perez has been an absolute blessing to me and my family, he made our very difficult long process started with another lawyer super fast and a breeze! He’s my go to lawyer for all legal needs! 20 out of 10 best lawyer in NOLA! ",
  },
  {
    author_name: "Muhammad Saeed",
    rating: 5,
    text: "Mr. Jorge Perez is a professional and very cooperative attorney. I met with many lawyers regarding my case in New Orleans before meeting Mr. Jorge Perez, all of them were charging too much but not cooperating at all. Mr. Jorge Perez prepared and filed my case in immigration office and within a very short period of time my case got approved from USCIS. I highly recommend Mr. Jorge Perez, he’s one of the finest attorneys in New Orleans.",
  },
  {
    author_name: "Cristhian Buezo",
    rating: 5,
    text: "Very helpful throughout the entire process. Definitely helps ease your mind since everything can be so stressful. Immediately jumped on the case when I presented it to him. Jorge took charge as soon as I spoke with him. 10/10 would recommend.",
  },
  {
    author_name: "LeRoy Peralta",
    rating: 5,
    text: "Jorge is very dedicated to helping you and is detailed oriented to your case. Everything that he discusses with you about your case, he makes it happen. I am very please with all the results of my case thus far. He always answers my calls and text messages to all questions that I may have concerning doctors visits, doctors results of XRays, MRI 's, and plan of action to get me healthy again prior to being involved in an automobile accident . Jorge Perez is a phenomenal attorney who has your best interest first... thank you for Everything! ",
  },
  {
    author_name: "Clay Vallejo",
    rating: 5,
    text: "Lawyer Jorge Perez is an excellent professional. He helped me greatly with my case and when I was under lots of stress to handle my car accident on my own. He is a very dedicated professional. ",
  },
];

const Page = () => {
  const renderStars = (rating: number): string => {
    let stars = "";
    for (let i = 0; i < Math.floor(rating); i++) {
      stars += "★";
    }
    if (rating - Math.floor(rating) >= 0.5) stars += "⭐";
    while (stars.length < 5) {
      stars += "☆";
    }
    return stars;
  };
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex justify-center mt-[-65px]">
      <Image
        src="/attorney.jpg"
        alt="Attorney"
        width={1920}
        height={1080}
        className="absolute z-0"
      />
      <section className="absolute inset-0 flex flex-col items-center justify-center backdrop-filter backdrop-blur-md bg-opacity-20 bg-black z-10 min-h-screen ">
        <div className="grid grid-cols-1 font-extralight md:grid-cols-2 gap-2 tx-sm md:text-sm mx-20 overflow-auto">
          {reviews.map((review, index) => (
            <div key={index} className="p-4 rounded-lg ">
              <p>{review.author_name}: </p>
              <p className="text-yellow-400">{renderStars(review.rating)}</p>
              <p className="font-raleway"> {review.text} </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
