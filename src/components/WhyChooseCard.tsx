"use client";
import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  title: string;
  image: string;
  description: string;
};

const WhyChooseCard = ({ image, title, description }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4, // 40% of the element must be visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 90 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      <Image src={image} alt={title} width={80} height={80} className="object-contain mx-auto" />
      <h1 className="text-center text-lg mt-5 mb-5 font-semibold text-gray-800">{title}</h1>
      <p className="text-gray-600 text-center font-medium text-sm mb-7">{description}</p>
    </motion.div>
  );
};

export default WhyChooseCard;
