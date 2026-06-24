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
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-black">
            What Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-gray-500 mt-4">
            Trusted by businesses across industries.
          </p>
        </div>

        <div className="relative h-[420px] flex justify-center items-center">
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

          {/* Active Card */}

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
              w-[650px] max-w-[90%]
              rounded-[32px]
              bg-white
              shadow-2xl
              border border-orange-100
              p-10"
            >
              {/* Quote */}

              <div className="absolute right-8 top-5 text-[90px] text-orange-100">
                “
              </div>

              {/* Rating */}

              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-xl ${
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

              <p className="text-xl text-gray-700 leading-9 mb-10">
                {current.quote}
              </p>

              {/* User */}

              <div className="flex items-center gap-4">
                {current.avatar ? (
                  <img
                    src={current.avatar}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#005858] to-[#669999] flex items-center justify-center text-white font-bold">
                    {current.name[0]}
                  </div>
                )}

                <div>
                  <h4 className="font-bold text-orange-500">{current.name}</h4>

                  <p className="text-gray-500">
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
