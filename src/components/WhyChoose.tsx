// WhyChoose.tsx
import React from "react";
import WhyChooseCard from "./WhyChooseCard";
import { whyChooseData } from "@/Constants"; // adjust path as needed

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-3xl md:text-5xl lg:text-6xl capitalize font-bold text-center">
        Key App Features
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {whyChooseData.map((feature, index) => (
          <WhyChooseCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
