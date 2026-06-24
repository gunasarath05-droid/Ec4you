"use client";

import React, { useRef } from "react";

export default function ContactInfo() {
  const lottieRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#fcfcfc] rounded-3xl p-8 sm:p-10 md:p-14 shadow-xl h-full">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black leading-tight mb-6">
        Get in Touch{" "}
        <span className="bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] text-transparent bg-clip-text">
          100+ Brands
        </span>
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
        Ready to elevate your digital presence? Let's discuss your project and
        how we can drive results for your business.
      </p>

      {/* Contact Cards */}
      <div className="flex flex-col gap-4 mb-10">
        {/* Find Us */}
        <div className="group bg-white rounded-2xl p-5 flex items-start gap-4 border border-[#669999]/30 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#669999]/50 cursor-default">
          <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-[#669999]">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
              Find Us
            </h3>
            <p className="text-base text-gray-600 font-medium">1/89, Indira Nagar 1st St, Vengavasal, Chennai- 600126</p>
          </div>
        </div>

        {/* Phone Us */}
        <div className="group bg-white rounded-2xl p-5 flex items-start gap-4 border border-[#669999]/30 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#669999]/50 cursor-default">
          <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-[#669999]">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
              Phone Us
            </h3>
            <p className="text-base text-gray-600 font-medium">+91 7010942474</p>
          </div>
        </div>

        {/* Email Address */}
        <div className="group bg-white rounded-2xl p-5 flex items-start gap-4 border border-[#669999]/30 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#669999]/50 cursor-default">
          <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-[#669999]">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
              Email Address
            </h3>
            <p className="text-base text-gray-600 font-medium">info@ec4you.in</p>
          </div>
        </div>
      </div>

      {/* Lottie Animation */}
      <div className="flex justify-center mt-4" ref={lottieRef}>
        <dotlottie-wc
          src="https://lottie.host/5ca640bd-a65f-4355-b49b-a289c58ba819/ui8thewwhl.lottie"
          autoplay
          loop
          className="w-[200px] h-[150px] sm:w-[250px] sm:h-[200px] md:w-[300px] md:h-[300px]"
        ></dotlottie-wc>
      </div>
    </section>
  );
}