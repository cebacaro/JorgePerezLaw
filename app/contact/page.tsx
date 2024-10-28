"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { motion as m } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CustomForm from "../customForm/page";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const cards = [
  {
    title: "3500 N. HULLEN ST. METAIRIE LA",
    link: "https://www.google.com/maps/place/3500+N+Hullen+St,+Metairie,+LA+70002/@30.0122621,-90.1581338,17z/data=!3m1!4b1!4m6!3m5!1s0x8620b00904230b7d:0x474b499b134c88bb!8m2!3d30.0122621!4d-90.1581338!16s%2Fg%2F11cs8vm8_d?entry=ttu",
    description: ["MONDAY TO FRIDAY", " FROM", " 9:00 AM TO 7:00 PM"],
    footer: "Navigate",
  },
  {
    title: "3901 WILLIAMS BLVD. STE 7, KENNER, LA 70065",
    link: "https://www.google.com/maps/place/3901+Williams+Blvd+STE+7,+Kenner,+LA+70065/@30.0272239,-90.2389749,17z/data=!3m1!4b1!4m6!3m5!1s0x8620b6dc0c32ad89:0x6b91cbe24481ce5!8m2!3d30.0272239!4d-90.2389749!16s%2Fg%2F11hbvz8zw_?entry=ttu",
    description: ["MONDAY TO FRIDAY", " FROM", " 9:00 AM TO 7:00 PM"],
    footer: "Navigate",
  },
];

const formSchema = z.object({
  user_name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  user_email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z.string().min(1, {
    message: "Message cannot be empty.",
  }),
});

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  // Initialize form with defaultValues
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "", // Initialize name
      user_email: "", // Initialize email
      message: "", // Initialize message
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = methods;

  const sendEmail = async (data: any) => {
    setIsSubmitting(true);

    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
        );
        console.log("Email sent successfully:", result.text);
        setShowMessage(true);
        reset();
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Something went wrong. Please try again.");
      }
    } else {
      console.error("Form reference is undefined.");
    }

    setIsSubmitting(false);
  };

  return (
    <div
      id="contact"
      className="contact flex min-h-screen items-center justify-center w-full lg:w-[50vw]"
    >
      <div className="bg-transparent p-2 border shadow-md shadow-[#ceb475]/50 rounded-md max-w-md z-10 w-full ">
        {showMessage ? (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex h-[20vw] items-center justify-center"
          >
            <p className="text-center text-green-500">
              Email sent successfully!
            </p>
          </m.div>
        ) : (
          <FormProvider {...methods}>
            <CustomForm
              ref={form}
              onSubmit={handleSubmit(sendEmail)}
              className="space-y-2 lg:space-y-8 w-[]"
            >
              <FormField
                control={control}
                name="user_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#ceb475]">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    {errors.user_name?.message && (
                      <FormMessage>
                        {errors.user_name.message.toString()}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="user_email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#ceb475]">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@example.com" {...field} />
                    </FormControl>
                    {errors.user_email?.message && (
                      <FormMessage>
                        {errors.user_email.message.toString()}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#ceb475]">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Leave Your Message" {...field} />
                    </FormControl>
                    {errors.message?.message && (
                      <FormMessage>
                        {errors.message.message.toString()}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-[#ceb475]/35"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </Button>
            </CustomForm>
          </FormProvider>
        )}
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex justify-center mt-[-65px] ">
      <div className="flex justify-center h-[90%]  lg:w-[50vw]">
        <Image
          src="/attorney.jpg"
          alt="Attorney"
          width={1920}
          height={1080}
          className="absolute z-0"
        />
      </div>
      <div className="inset-0 flex flex-col  justify-center items-center backdrop-filter backdrop-blur-md bg-opacity-20 bg-black/50 z-10 min-h-screen absolute">
        <div className="flex w-screen h-auto items-center justify-center ">
          <p className="md:text-center text-center tracking-widest font-lora text-[#ceb475] uppercase p-4 lg:p-11 text-sm lg:text-lg font-extralight justify-center lg:max-w-[50%] items-center">
            We are always ready to help you. The <br /> You may drop us a line,
            give us a call or send an email.
          </p>
        </div>

        {/* Flex container to place the cards on the left and the form on the right */}
        <div className="flex flex-col lg:flex-row w-full min-h-screen justify-center items-center px-8 mt-8 lg:mt-0 ">
          {/* Cards on the left */}
          <div className="flex flex-col  items-center gap-4 lg:gap-8 lg:w-1/2 ">
            {cards.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col lg:w-[30vw] justify-between text-sm items-center bg-opacity-0 border shadow-md shadow-[#ceb475]/50 rounded p-4 lg:h-46 w-full text-justify"
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
                    <Button className="bg-[#ceb475]/35 w-auto h-6">
                      {card.footer}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Contact form on the right */}
          <div className="lg:w-1/2 w-full h-full mt-4 overflow-visible lg:overflow-visible">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
