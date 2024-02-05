import React from "react";
import contact from "@/public/contact.png";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
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
    footer: "(BY APPOINTMENT ONLY)",
  },
  {
    title: "3901 WILLIAMS BLVD. STE 7, KENNER, LA 70065",
    link: "https://www.google.com/maps/place/3901+Williams+Blvd+STE+7,+Kenner,+LA+70065/@30.0272239,-90.2389749,17z/data=!3m1!4b1!4m6!3m5!1s0x8620b6dc0c32ad89:0x6b91cbe24481ce5!8m2!3d30.0272239!4d-90.2389749!16s%2Fg%2F11hbvz8zw_?entry=ttu",
    description: ["MONDAY TO FRIDAY", "FROM", "9:00 AM TO 7:00 PM"],
    footer: "(BY APPOINTMENT ONLY)",
  },
];

const page = () => {
  return (
    <div className="flex flex-row w-full h-screen">
      {" "}
      <div className=" flex justify-center h-[90%] w-[50%] ">
        <Image
          src={contact}
          width={400}
          height={400}
          alt="Picture of the author"
          className=" my-2 rounded-md    w-auto" //
        />
      </div>
      <Separator className="mt-5 h-[40rem]" orientation="vertical" />
      {/* Full viewport height and flex column */}
      <div className=" flex flex-col w-1/2 h-full relative p-2">
        {" "}
       
        <p className="md:text-center md:text-lg text-justify text-xs justify-center md:m-2 lg:m-8 px-6 items-centers font-opensans">
          We are always ready to help you.There are many ways to contact us. You
          may drop us a line, give us a call or send an email, choose what suits
          you the most.
        </p>
        <section className="flex md:flex-row flex-col items-center justify-center w-full ">
          {" "}
          <div className="flex flex-col  items-center m-2">
            {cards.map((card) => (
              <Card
                key={card.title}
                className="md:max-w-[340px] w-[340px] h-[150spx] md:h-[160px] flex justify-center items-center   bg-opacity-0 border-none shadow-none"
              >
                <CardHeader className="flex justify-center items-center w-full text-[10px]  mt-2">
                  <a
                    className="underline"
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card.title}
                  </a>
                </CardHeader>
                <CardBody className=" text-small p-1 text-default-500 text-center">
                  {card.description.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-xs  text-default-400">
                      {line}
                    </p>
                  ))}
                </CardBody>
                <CardFooter className=" flex mb-5 justify-center pb-0  text-[10px]">
                  <p>{card.footer}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="  w-full">
            <p className="md:text-center text-center m-2 justify-center px-6  bottom-0 items-centers w-full">
              Tel: 123-4567-890
            </p>
            <p className="md:text-center text-center m-2 justify-center px-6  bottom-0 items-centers w-full ">
              Fax: 123-4567-890
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
