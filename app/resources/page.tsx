"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const cards = [
  {
    title: "U.S. Visa Bulletin",
    link: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html",
    description:
      "Understand how Visa works and the number of quotas per year is important. Feel free to contact us to see where you fall along the process.",
    footer: "See Visa Bulletin",
  },
  {
    title: "Application Status Check",
    link: "https://egov.uscis.gov",
    description:
      "Once we have submitted your application, you can follow along with your application status check. Feel free to contact us with any questions about the status of your application.",
    footer: "Check Status",
  },
  {
    title: "Check Processing Times",
    link: "https://egov.uscis.gov/processing-times/",
    description:
      "Feel free to check the standard processing time for your application.",
    footer: "Check Processing Times",
  },
];

const Page = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center  mt-8">
      <div className="flex flex-col  lg:gap-8 items-center justify-center gap-4 w-full absolute top-0">
        <h1 className="text-2xl bold text-[#ceb475] lg:m-4 m-4">
          USEFUL RESOURCES{" "}
        </h1>
        {cards.map((card, index) => (
          <Card
            key={index}
            className="flex flex-col justify-between items-center bg-opacity-0 border shadow-md shadow-[#ceb475]/50 rounded p-4 w-[80vw] lg:w-2/5 lg:h-[200px] text-justify"
          >
            <CardHeader className="flex justify-center items-center w-full text-2xl md:text-lg text-[#ceb475]">
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
  );
};

export default Page;
