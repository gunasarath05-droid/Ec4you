"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface SuccessStory {
  id: number;
  title: string;
  excerpt: string;
  thumbnail?: string;
  link: string;
  tags?: string[];
}

interface SuccessStoriesProps {
  stories: SuccessStory[];
}

export default function SuccessStories({ stories }: SuccessStoriesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [stories.length, isPaused]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      setActiveIndex((prev) => (prev + 1) % stories.length);
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
      e.preventDefault();
    }
  };

  if (!stories.length) {
    return (
      <section className="py-20 bg-white">
        <div className="text-center text-gray-500">No stories available.</div>
      </section>
    );
  }

  const current = stories[activeIndex];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* LEFT - Card Carousel */}
         <div className="relative flex flex-col items-center text-center lg:text-left lg:items-start">
            <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Our Success
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              Success Stories from{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Our Clients
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-sm mx-auto lg:mx-0">
              Real results from our digital marketing campaigns that transformed
              businesses.
            </p>

            <div className="relative mt-10 w-full max-w-sm mx-auto lg:mx-0">
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -left-8 -top-8 bg-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              >
                <TrendingUp className="w-6 h-6 text-[#669999]" />
                <div>
                  <p className="font-bold text-[#669999] text-lg">300%</p>
                  <p className="text-xs text-gray-500">Growth</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -right-6 bottom-0 bg-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              >
                <Star className="w-6 h-6 text-orange-500 fill-orange-500" />
                <div>
                  <p className="font-bold text-orange-500 text-lg">2X</p>
                  <p className="text-xs text-gray-500">ROAS</p>
                </div>
              </motion.div>

              <div className="relative z-10 flex justify-center">
                <dotlottie-wc
                  src="https://lottie.host/c803e626-d6f1-41e6-ba44-4856e3b1d03c/Mo525vD7oo.lottie"
                  autoplay
                  loop
                  style={{
                    width: "360px",
                    height: "360px",
                    maxWidth: "100%",
                  }}
                ></dotlottie-wc>
              </div>
              <div className="absolute inset-0 bg-orange-100/30 blur-3xl rounded-full -z-10" />
            </div>

            {/* <Link
              href="/success-stories"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors group"
            >
              View all success stories
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link> */}
          </div>
      
          {/* RIGHT - Content + Animation */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Success stories carousel"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-orange-100/50 transition-shadow hover:shadow-2xl"
              >
                <div className="relative h-[300px] md:h-[360px] overflow-hidden bg-gray-200">
                  {current.thumbnail ? (
                    <Image
                      src={current.thumbnail}
                      alt={current.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={activeIndex === 0}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-orange-400">
                      <span className="text-lg font-semibold">No image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>

                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {current.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full bg-[#669999] text-white text-xs font-bold tracking-wide uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4 line-clamp-2">
                    {current.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                    {current.excerpt}
                  </p>
                  <Link
                    href={current.link}
                    className="inline-flex items-center gap-2 text-orange-500 font-semibold group transition-colors hover:text-orange-600"
                  >
                    Read Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    activeIndex === index
                      ? "w-10 bg-orange-500"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation arrows (desktop) */}
            <div className="hidden lg:flex absolute w-fit left-50 -bottom-2 flex-col gap-2">
              <button
                onClick={() =>
                  setActiveIndex(
                    (prev) => (prev - 1 + stories.length) % stories.length
                  )
                }
                className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-500 hover:text-orange-500"
                aria-label="Previous story"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
            </div>
             <div className="hidden lg:flex absolute w-fit right-50 -bottom-2 flex-col gap-2">
              
              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % stories.length)
                }
                className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-500 hover:text-orange-500"
                aria-label="Next story"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}