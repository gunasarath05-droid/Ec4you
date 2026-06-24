"use client";

import { Plus } from "lucide-react";

export default function Subscribe() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] py-20">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage:
              "url('https://www.transparentpng.com/thumb/world-map/dotted-world-map-png-5.png')",
          }}
        />
      </div>

      {/* Floating Elements */}

      {/* Orange circle */}
      <div className="hidden md:block absolute top-8 left-[18%] w-10 h-10 rounded-full bg-orange-300 animate-float" />

      {/* Small orange dot */}
      <div className="hidden md:block absolute top-6 left-[13%] w-3 h-3 rounded-full bg-orange-500 animate-float2" />

      {/* Green circle */}
      <div className="hidden md:block absolute top-32 left-32 w-5 h-5 rounded-full bg-green-400 animate-float" />

      {/* Right Orange Plus */}
      <div className="hidden md:block absolute top-16 right-[22%] text-orange-500 animate-float2">
        <Plus size={28} strokeWidth={4} />
      </div>

      {/* Left Green Plus */}
      <div className="hidden md:block absolute top-40 left-[37%] text-green-700 animate-float">
        <Plus size={28} strokeWidth={4} />
      </div>

      {/* Right Green Plus */}
      <div className="hidden md:block absolute top-44 right-[10%] text-green-700 animate-float">
        <Plus size={24} strokeWidth={4} />
      </div>

      {/* Bottom Orange Plus */}
      <div className="hidden md:block absolute bottom-24 left-[25%] text-orange-500 animate-float2">
        <Plus size={26} strokeWidth={4} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center px-5">
        <p className="text-orange-500 text-xl font-medium mb-3">
          About Company
        </p>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-black leading-tight mb-4">
          Get Latest Updates
          <br />
          and Newsletter
        </h2>

        {/* Form */}
        <form className="mt-14 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your Email address"
            className="w-full md:w-[420px] h-[68px]
            rounded-xl border border-gray-300
            px-8 outline-none text-gray-700
            bg-white shadow-sm"
          />

          <button
            type="submit"
            className="
            h-[68px]
            px-14
            rounded-xl
            bg-[#669999]
            text-white
            font-semibold
            text-lg
            hover:scale-105
            transition-all
            "
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}