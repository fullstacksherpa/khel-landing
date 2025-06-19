"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const UpcomingFeatures = () => {
  const [imageRef, imageInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [textRef, textInView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const imageControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    if (imageInView) imageControls.start("visible");
    if (textInView) textControls.start("visible");
  }, [imageInView, textInView, imageControls, textControls]);

  return (
    <div className="pt-24 pb-16">
      <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Image Content */}
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={imageControls}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
          }}
          className="mx-auto">
          <Image
            src="/images/time.png"
            alt="Upcoming Features"
            width={400}
            height={350}
            className="object-contain"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={textControls}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
          }}
          className="p-6  w-full">
          <h2 className="text-lg md:text-xl font-semibold text-orange-500 tracking-wider">
            Building Together with You
          </h2>
          <h1 className="mt-4 text-2xl  md:text-4xl font-bold text-gray-900">
            Constantly evolving based on your feedback
          </h1>
          <p className="mt-4 text-gray-600 text-md font-medium leading-[2rem]">
            We’re shaping this app with our community at its core. Your feedback helps us improve,
            evolve, and deliver the features that truly matter. Here’s a glimpse of what’s coming
            next:
          </p>

          <ul className="mt-7 space-y-6 text-gray-700">
            <li className="flex items-start font-semibold tracking-widest">
              <FaCheckCircle className="text-green-500 mr-2 mt-1" size={40} />
              Earn points by booking games at venues — redeem them for rewards and perks.
            </li>
            <li className="flex items-start font-semibold tracking-widest ">
              <FaCheckCircle className="text-green-500 mr-2 mt-1" size={40} />
              Gamified player statuses and achievements to showcase your progress.
            </li>
            <li className="flex items-start font-semibold tracking-widest">
              <FaCheckCircle className="text-green-500 mr-2 mt-1" size={40} />
              Training modules and performance tracking, starting with futsal.
            </li>
            <li className="flex items-start font-semibold tracking-widest">
              <FaCheckCircle className="text-green-500 mr-2 mt-1" size={40} />
              Hosting tournaments of different levels — from friendly to competitive.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default UpcomingFeatures;
