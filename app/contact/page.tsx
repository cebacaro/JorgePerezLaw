import React from "react";
import Image from "next/image";
import contactImg from "public/contact.png"; // Adjust the import to fit your file structure
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";

const cards = [
  {
    title: "3500 N. HULLEN ST. METAIRIE LA",
    link: "https://www.google.com/maps/place/3500+N+Hullen+St,+Metairie,+LA+70002/@30.0122621,-90.1581338,17z/data=!3m1!4b1!4m6!3m5!1s0x8620b00904230b7d:0x474b499b134c88bb!8m2!3d30.0122621!4d-90.1581338!16s%2Fg%2F11cs8vm8_d?entry=ttu",
    description: ["MONDAY TO FRIDAY", "FROM", "9:00 AM TO 7:00 PM"],
    footer: " ",
  },
  {
    title: "306 W.JUDGE PEREZ DR. CHALMETTE, LA 70043 ",
    link: "https://www.google.com/maps/place/306+W+Judge+Perez+Dr,+Chalmette,+LA+70043/@29.9431697,-89.9661884,17z/data=!3m1!4b1!4m6!3m5!1s0x889e1d1c69d50bf7:0xcaf86b88f8641373!8m2!3d29.9431697!4d-89.9661884!16s%2Fg%2F11bw4423rj?entry=ttu",
    description: ["MONDAY TO FRIDAY", "FROM", "9:00 AM TO 7:00 PM"],
    footer: "( BY APPOINTMENT ONLY )",
  },
  {
    title: "3901 WILLIAMS BLVD. STE 7, KENNER, LA 70065",
    link: "https://www.google.com/maps/place/3901+Williams+Blvd+STE+7,+Kenner,+LA+70065/@30.0272239,-90.2389749,17z/data=!3m1!4b1!4m6!3m5!1s0x8620b6dc0c32ad89:0x6b91cbe24481ce5!8m2!3d30.0272239!4d-90.2389749!16s%2Fg%2F11hbvz8zw_?entry=ttu",
    description: ["MONDAY TO FRIDAY", "FROM", "9:00 AM TO 7:00 PM"],
    footer: "( BY APPOINTMENT ONLY )",
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
      <div className="inset-0 flex flex-col items-center justify-center backdrop-filter backdrop-blur-md bg-opacity-20 bg-black/50 z-10 min-h-screen  absolute ">
        <p className="md:text-center text-sm lg:text-lg font-extralight text-justify justify-center lg:m-8 items-center font-raleway">
          We are always ready to help you. There are many ways to contact us.
          You may drop us a line, give us a call or send an email, choose what
          suits you the most.
        </p>
        <div className="flex flex-col lg:gap-8 items-center font-raleway font-extralight">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="md:max-w-[340px] w-[340px] flex justify-center items-center bg-opacity-0 border-none shadow-none overflow-hidden"
            >
              <CardHeader className="flex justify-center items-center w-full text-sm md:text-sm">
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {card.title}
                </a>
              </CardHeader>
              <CardBody className="md:text-small p-1 text-default-500 text-center">
                {card.description.map((line, lineIndex) => (
                  <p key={lineIndex}>{line}</p>
                ))}
              </CardBody>
              <CardFooter className="flex justify-center pb-0 text-[10px]">
                <p>{card.footer}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-4 md:mt-8 flex justify-around">
          <p className="text-center justify-center items-center">
            Tel: 123-4567-890
          </p>
          <p className="text-center justify-center px-6 items-center">
            Fax: 123-4567-890
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
