"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const BADGES = [
  {
    src: "https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg",
    alt: "GoodFirms",
    width: "w-[140px] max-sm:w-[60px]",
  },
  {
    src: "https://core.sortlist.com//_/apps/core/images/badges-en/badge-stars-black-light-xl.svg",
    alt: "Sortlist Stars",
    width: "w-[190px] max-sm:w-[90px]",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2023/10/Top-Digital-Marketing-Agency.png",
    alt: "DesignRush",
    width: "w-[140px] max-sm:w-[85px]",
  },
  {
    src: "https://core.sortlist.com//_/apps/core/images/badges-en/badge-flag-blue-dark-xl.svg",
    alt: "Sortlist Flag",
    width: "w-[270px] max-sm:w-[90px]",
  },
];

export default function Hero() {
  const lottieContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
    {/* BIG LEFT CIRCLE */}

      <div className="absolute -left-[280px] -top-[300px] w-[850px] h-[850px] rounded-full bg-[#f5e1d9] z-0" />

      {/* FLOATING BALLS */}

      <div className="absolute left-[4%] top-[12%] w-20 h-20 rounded-full bg-gradient-to-br from-[#93f5e2] to-[#69cdbf] opacity-90 animate-float-slow shadow-2xl z-0" />

      <div className="absolute left-[17%] top-[22%] w-6 h-6 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#c084fc] animate-float-medium z-0" />

      <div className="absolute left-[7%] bottom-[28%] w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-300 shadow-xl animate-float-fast z-0" />

      <div className="absolute left-[42%] top-[12%] w-10 h-10 rounded-full bg-[#f5b08f] animate-float-medium z-0" />
    <section className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 py-8 md:py-12 px-4 sm:px-6 max-w-7xl mx-auto">

      

      {/* LEFT CONTENT */}

      <motion.div
        className="relative z-10 flex-1 min-w-0 w-full pt-24"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >

        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black text-black leading-tight mb-6">

          Best Digital Marketing Agency in{" "}

          <span className="bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] bg-clip-text text-transparent">

            Chennai

          </span>

        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed mb-6">

          Empowering Your Online Success with Strategic Digital Marketing

        </p>

        <a
          href="#contact"
          className="inline-block px-12 py-4 bg-gradient-to-r from-[#669999] to-[#005858] text-white font-semibold text-lg rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-[#669999]/30"
        >
          Get Started
        </a>

        {/* BADGES */}

        <div className="flex items-center gap-3 md:gap-6 mt-10">

          {BADGES.map((badge, i) => (

            <img
              key={i}
              src={badge.src}
              alt={badge.alt}
              className={`${badge.width} object-contain`}
              loading="lazy"
            />

          ))}

        </div>

      </motion.div>

      {/* RIGHT LOTTIE */}

      <div
        ref={lottieContainerRef}
        className="relative z-10 flex-1 min-w-0 w-full flex justify-center items-center animate-float-lottie"
      >

        <dotlottie-wc
          src="https://lottie.host/727f3e41-61a0-4d58-9ed6-07f28419cb37/x43OUr3SiO.lottie"
          autoplay
          loop
          className="w-[320px] h-[280px] sm:w-[480px] sm:h-[420px] lg:w-[720px] lg:h-[620px]"
        ></dotlottie-wc>

      </div>

    </section>
    </>
  );
}