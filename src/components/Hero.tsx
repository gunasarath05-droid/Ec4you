"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const BADGES = [
  {
    src: "https://assets.goodfirms.co/badges/color-badge/top-digital-marketing-companies.svg",
    alt: "GoodFirms",
    width: "w-[100px] sm:w-[130px] lg:w-[140px]",
  },
  {
    src: "https://core.sortlist.com//_/apps/core/images/badges-en/badge-stars-black-light-xl.svg",
    alt: "Sortlist Stars",
    width: "w-[130px] sm:w-[160px] lg:w-[190px]",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2023/10/Top-Digital-Marketing-Agency.png",
    alt: "DesignRush",
    width: "w-[100px] sm:w-[130px] lg:w-[140px]",
  },
  {
    src: "https://core.sortlist.com//_/apps/core/images/badges-en/badge-flag-blue-dark-xl.svg",
    alt: "Sortlist Flag",
    width: "w-[130px] sm:w-[200px] lg:w-[270px]",
  },
];

export default function Hero() {
  const lottieContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* BIG LEFT CIRCLE – hidden on mobile to prevent overflow */}
      <div className="hidden md:block absolute -left-[280px] -top-[300px] w-[850px] h-[850px] rounded-full bg-[#f5e1d9] z-0" />

      {/* FLOATING BALLS – hidden on small screens */}
      <div className="hidden sm:block absolute left-[4%] top-[12%] w-20 h-20 rounded-full bg-gradient-to-br from-[#93f5e2] to-[#69cdbf] opacity-90 animate-float-slow shadow-2xl z-0" />
      <div className="hidden sm:block absolute left-[17%] top-[22%] w-6 h-6 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#c084fc] animate-float-medium z-0" />
      <div className="hidden sm:block absolute left-[7%] bottom-[28%] w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-300 shadow-xl animate-float-fast z-0" />
      <div className="hidden sm:block absolute left-[42%] top-[12%] w-10 h-10 rounded-full bg-[#f5b08f] animate-float-medium z-0" />

      <section className="relative overflow-x-hidden flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-6 md:py-12 px-4 sm:px-6 max-w-7xl mx-auto">

        {/* LEFT CONTENT */}
        <motion.div
          className="relative z-10 flex-1 min-w-0 w-full pt-20 sm:pt-24 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-4 sm:mb-6">
            Best Digital Marketing Agency in{" "}
            <span className="bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] bg-clip-text text-transparent">
              Chennai
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6">
            Empowering Your Online Success with Strategic Digital Marketing
          </p>

          <a
            href="#contact"
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#669999] to-[#005858] text-white font-semibold text-base sm:text-lg rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-[#669999]/30"
          >
            Get Started
          </a>

          {/* BADGES */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 mt-8 sm:mt-10">
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
          className="relative z-10 w-full lg:flex-1 flex justify-center items-center animate-float-lottie"
        >
          <dotlottie-wc
            src="https://lottie.host/727f3e41-61a0-4d58-9ed6-07f28419cb37/x43OUr3SiO.lottie"
            autoplay
            loop
            style={{ width: "min(420px, 90vw)", height: "min(420px, 90vw)" }}
          ></dotlottie-wc>
        </div>

      </section>
    </>
  );
}