"use client";

import React from "react";
import { motion } from "framer-motion";

// Data for features
const features = [
  {
    title: "Proven Track Record",
    description:
      "Delivered exceptional results for 100+ enterprise clients worldwide.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-white fill-none stroke-2">
        <rect x="2" y="17" width="4" height="5" />
        <rect x="7" y="13" width="4" height="9" />
        <rect x="12" y="9" width="4" height="13" />
        <rect x="17" y="5" width="4" height="17" />
        <polyline points="22 2 18 6 22 6 22 2" />
      </svg>
    ),
  },
  {
    title: "Transparent Reporting",
    description:
      "Real-time analytics and complete visibility into your recruitment metrics.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-white fill-none stroke-2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Industry Expertise",
    description:
      "Deep experience across sectors with specialized recruitment solutions.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-white fill-none stroke-2">
        <path d="M3 21h18" />
        <path d="M5 21V7l5-4.5L15 7v14" />
        <path d="M19 21V10l-4-3" />
        <rect x="7" y="10" width="2" height="2" />
        <rect x="11" y="10" width="2" height="2" />
        <rect x="7" y="14" width="2" height="2" />
        <rect x="11" y="14" width="2" height="2" />
        <rect x="7" y="18" width="2" height="3" />
        <rect x="16" y="13" width="2" height="2" />
        <rect x="16" y="17" width="2" height="2" />
      </svg>
    ),
  },
  {
    title: "Experienced Team Support",
    description:
      "Dedicated support from recruitment automation experts every step of the way.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-white fill-none stroke-2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 lg:mb-20"
      >
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-black leading-tight mb-4">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] bg-clip-text text-transparent">
            EC4YOU ?
          </span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Empowering businesses with cutting-edge recruitment automation solutions trusted by industry leaders worldwide
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="group relative bg-white rounded-3xl p-4 md:p-8 shadow-lg border-2 border-transparent hover:border-[#669999] overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#669999]/30"
          >
            {/* Number badge */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gradient-to-r from-[#669999] to-[#005858] flex items-center justify-center text-white text-lg font-extrabold opacity-15 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 z-10">
              0{idx + 1}
            </div>

            {/* Gradient top bar – expands on hover */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#669999] to-[#005858] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            {/* Hover gradient overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#669999]/10 to-[#005858]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 mb-7 bg-gradient-to-r from-[#669999] to-[#005858] rounded-2xl flex items-center justify-center shadow-lg shadow-[#669999]/30 group-hover:scale-110 group-hover:shadow-[#005858]/40 transition-all duration-500">
                {feature.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 group-hover:text-[#005858] transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}