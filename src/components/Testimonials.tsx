"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating?: number;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const current = testimonials[active];
  const second = testimonials[(active + 1) % testimonials.length];
  const third = testimonials[(active + 2) % testimonials.length];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 px-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            What Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-gray-500 mt-4">
            Trusted by businesses across industries.
          </p>
        </div>

        {/* Mobile: simple list, Desktop: stacked card effect */}
        <div className="block sm:hidden space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="rounded-[24px] bg-white shadow-xl border border-orange-100 p-6"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-lg ${
                      star <= (current?.rating || 5) ? "text-yellow-400" : "text-gray-200"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-base text-gray-700 leading-7 mb-6">
                {current.quote}
              </p>
              <div className="flex items-center gap-3">
                {current.avatar ? (
                  <img src={current.avatar} className="w-12 h-12 rounded-full object-cover" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#005858] to-[#669999] flex items-center justify-center text-white font-bold shrink-0">
                    {current.name[0]}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-orange-500">{current.name}</h4>
                  <p className="text-gray-500 text-sm">
                    {current.role}{current.company && ` • ${current.company}`}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === i ? "w-8 bg-orange-500" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative hidden sm:flex justify-center items-center" style={{ minHeight: "420px" }}>
          {/* Card 3 */}

          <motion.div
            key={third.id}
            className="absolute w-[650px] max-w-[90%] h-[260px]
            rounded-[32px] bg-white shadow-lg border"
            initial={false}
            animate={{
              scale: 0.88,

              y: -80,

              rotate: -4,

              opacity: 0.4,

              zIndex: 1,
            }}
          />

          {/* Card 2 */}

          <motion.div
            key={second.id}
            className="absolute w-[650px] max-w-[90%] h-[280px]
            rounded-[32px] bg-white shadow-xl border"
            initial={false}
            animate={{
              scale: 0.94,

              y: -40,

              rotate: -2,

              opacity: 0.7,

              zIndex: 2,
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{
                opacity: 0,

                y: 60,

                scale: 0.9,
              }}
              animate={{
                opacity: 1,

                y: 0,

                scale: 1,
              }}
              exit={{
                opacity: 0,

                y: -60,

                scale: 0.9,
              }}
              transition={{
                duration: 0.6,

                ease: "easeInOut",
              }}
              className="absolute z-10
              w-[650px] max-w-[92%]
              rounded-[32px]
              bg-white
              shadow-2xl
              border border-orange-100
              p-6 sm:p-10"
            >
              {/* Quote */}

              <div className="absolute right-6 sm:right-8 top-3 sm:top-5 text-[60px] sm:text-[90px] text-orange-100">
                "
              </div>

              {/* Rating */}

              <div className="flex gap-1 mb-4 sm:mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-lg sm:text-xl ${
                      star <= (current?.rating || 5)
                        ? "text-yellow-400"
                        : "text-gray-200"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Text */}

              <p className="text-base sm:text-xl text-gray-700 leading-7 sm:leading-9 mb-6 sm:mb-10">
                {current.quote}
              </p>

              {/* User */}

              <div className="flex items-center gap-3 sm:gap-4">
                {current.avatar ? (
                  <img
                    src={current.avatar}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#005858] to-[#669999] flex items-center justify-center text-white font-bold shrink-0">
                    {current.name[0]}
                  </div>
                )}

                <div>
                  <h4 className="font-bold text-orange-500">{current.name}</h4>

                  <p className="text-gray-500 text-sm">
                    {current.role}

                    {current.company && ` • ${current.company}`}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
