import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const cards = [
  {
    title: "3500 N. HULLEN ST. METAIRIE LA",
    link: "https://www.google.com/maps/place/3500+N+Hullen+St,+Metairie,+LA+70002/@30.0122621,-90.1581338,17z/data=!3m1!4b1!4m6!3m5!1s0x8620b00904230b7d:0x474b499b134c88bb!8m2!3d30.0122621!4d-90.1581338!16s%2Fg%2F11cs8vm8_d?entry=ttu",
    description: ["MONDAY TO FRIDAY", "FROM", "9:00 AM TO 7:00 PM"],
    footer: "Navigate ",
  },

  {
    title: "3901 WILLIAMS BLVD. STE 7, KENNER, LA 70065",
    link: "https://www.google.com/maps/place/3901+Williams+Blvd+STE+7,+Kenner,+LA+70065/@30.0272239,-90.2389749,17z/data=!3m1!4b1!4m6!3m5!1s0x8620b6dc0c32ad89:0x6b91cbe24481ce5!8m2!3d30.0272239!4d-90.2389749!16s%2Fg%2F11hbvz8zw_?entry=ttu",
    description: ["MONDAY TO FRIDAY", "FROM", "9:00 AM TO 7:00 PM"],
    footer: "Navigate",
  },
];

const Page = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex justify-center mt-[-65px]">
      <div className="flex justify-center h-[90%] w-[50%]">
        <Image
          src="/attorney.jpg"
          alt="Attorney"
          width={1920}
          height={1080}
          className="absolute z-0"
        />
      </div>
      <div className="inset-0 flex flex-col  items-center  backdrop-filter backdrop-blur-md bg-opacity-20 bg-black/50 z-10 min-h-screen  absolute ">
        <div className="flex w-screen h-auto items-center justify-center mt-24">
          <p className="md:text-center text-center tracking-widest font-lora text-[#ceb475] uppercase p-4 text-sm lg:text-lg font-extralight justify-center  lg:max-w-[50%] items-center ">
            We are always ready to help you. The <br /> You may drop us a line,
            give us a call or send an email.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 items-center  justify-center lg:mx-8 ">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between  text-sm items-center bg-opacity-0 border shadow-md shadow-[#ceb475]/50 rounded p-4 w-[80vw] lg:w-2/5 lg:h-[200px] text-justify"
            >
              <CardHeader className="flex justify-center items-center w-full lg:text-2xl md:text-lg text-gray-300">
                <h1>{card.title}</h1>
              </CardHeader>
              <CardBody className="text-center justify-center md:text-sm p-1 text-default-500">
                <p>{card.description}</p>
              </CardBody>
              <CardFooter className="flex justify-center pb-0 text-[10px]">
                <Link
                  href={card.link}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-500 w-auto h-8">
                    {card.footer}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
