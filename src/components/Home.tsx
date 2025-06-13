"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimate } from "motion/react";

const Hero = () => {
  const [noticeDesignScope, noticeDesignAnimate] = useAnimate();
  const [ImageDesignScope, ImageDesignAnimate] = useAnimate();
  const [HDesignScope, HDesignAnimate] = useAnimate();
  const [desScope, desAnimate] = useAnimate();
  const [storeScope, storeAnimate] = useAnimate();

  useEffect(() => {
    ImageDesignAnimate([
      [ImageDesignScope.current, { opacity: 1 }, { duration: 0.4 }],
      [ImageDesignScope.current, { y: 0, x: 0 }, { duration: 1 }],
    ]);
    noticeDesignAnimate([
      [noticeDesignScope.current, { opacity: 1 }, { duration: 0.2 }],
      [noticeDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    HDesignAnimate([
      [HDesignScope.current, { opacity: 1 }, { duration: 0.2 }],
      [HDesignScope.current, { y: 0, x: 0 }, { duration: 0.7 }],
    ]);
    desAnimate([
      [desScope.current, { opacity: 1 }, { duration: 0.2 }],
      [desScope.current, { y: 0, x: 0 }, { duration: 1 }],
    ]);
    storeAnimate([
      [storeScope.current, { opacity: 1 }, { duration: 0.3 }],
      [storeScope.current, { y: 0, x: 0 }, { duration: 1.3 }],
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full pt-[4vh]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/*text here */}
          <div>
            {/* Top box */}
            <motion.div
              ref={noticeDesignScope}
              initial={{ opacity: 0, y: 0, x: -600 }}
              className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-transparent backdrop-blur-xl">
              <div className="px-3 py-1 md:px-5 md:py-1 rounded-full bg-green-200 md:text-base sm:text-sm text-xs text-green-600 font-bold tracking-wider">
                Notice
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                This is a beta version — some bugs or issues may still be present. We appreciate
                your feedback!
              </p>
            </motion.div>
            {/**heading */}
            <motion.h1
              ref={HDesignScope}
              initial={{ opacity: 0, y: 300, x: -500 }}
              className="text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem] bg-gradient-to-r from-[#1f923f] via-[#10ca42] to-[#027428] bg-clip-text text-transparent">
              Discover, Play, Connect, Book — All in One Sports App
            </motion.h1>
            <motion.p
              ref={desScope}
              initial={{ opacity: 0, y: 900, x: 0 }}
              className="text-gray-700">
              Find and join local sports events, tournaments, and games around you. Get personalized
              game recommendations, manage your shortlists, check venue availability, book
              instantly, and connect with your local sports community—all from your phone.
            </motion.p>

            {/**image of app store */}
            <motion.div
              ref={storeScope}
              initial={{ opacity: 0, y: 900, x: 0 }}
              className="flex mt-8 mb-8 items-center space-x-4">
              <Image
                src="/images/gp.png"
                alt="Play store"
                width={150}
                height={150}
                className="object-contain"
              />
              <Image
                src="/images/as.png"
                alt="App store"
                width={150}
                height={150}
                className="object-contain"
              />
            </motion.div>
          </div>
          {/*Image here */}
          <motion.div ref={ImageDesignScope} initial={{ opacity: 0, y: 0, x: 900 }} className="">
            <Image src="/images/hero.png" alt="hero" width={400} height={200} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
