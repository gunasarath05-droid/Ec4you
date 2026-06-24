"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

// =======================
// COUNTERS
// =======================

const STATS = [
  { id: 1, target: 100, suffix: "+", label: "Trusted Brands" },
  { id: 2, target: 100, suffix: "%", label: "Success Rate" },
  { id: 3, target: 500, suffix: "+", label: "Projects" },
];

// =======================
// BRANDS
// =======================

const BRANDS = [
  {
    src: "https://rteco.in/wp-content/uploads/2023/06/cropped-Logo-transparent2.png",
    alt: "RT ECO",
  },
  {
    src: "https://www.marineservices.ae/wp-content/uploads/2025/07/AMRS-Logo.png",
    alt: "ARUN MARINE",
  },
  {
    src: "https://static.wixstatic.com/media/cc6602_68b78352979747b4bece3dfca504a618~mv2.png/v1/fill/w_589,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TexValley-Logo-PNG_edited.png",
    alt: "Tex Valley",
  },
  {
    src: "https://ariviya.com/wp-content/uploads/2023/06/cropped-LOGO_ARIVIYA-removebg-preview-140x47.png",
    alt: "Ariviya",
  },
  {
    src: "https://i0.wp.com/blackboxes.in/wp-content/uploads/2022/01/512x512.png?w=500&ssl=1",
    alt: "Black Boxes",
  },
  {
    src: "https://ecoklien.com/wp-content/uploads/2023/07/Ecoklien-Logo.png",
    alt: "Ecoklien",
  },
  {
    src: "https://gogocamping.in/wp-content/uploads/2022/05/GOGO-Logo-dark-green-2.png",
    alt: "GoGo Camping",
  },
  {
    src: "https://flowklien.com/wp-content/uploads/2022/04/1400-300x116.png",
    alt: "Flowklien",
  },
  {
    src: "https://api.gideonauto.com/media/sitesettings/Primary_Logo.png",
    alt: "Gideon Auto",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2024/08/INSTA-PROFILEJY-01-e1723094598135.jpg",
    alt: "Profile JY",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2024/07/Logo-Final.png",
    alt: "Logo",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2024/07/RT-Pure-Logo1.png",
    alt: "RT Pure",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2024/07/GOGO-Camping-black.png",
    alt: "GoGo",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2024/07/Relux-logo0.png",
    alt: "Relux",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2024/05/promise-1-e1722493791156.png",
    alt: "Promise",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2024/07/LOGO-01-e1722577462852.png",
    alt: "Logo",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2024/05/Logo-Tertiary-e1716964704399.png",
    alt: "Logo",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2024/05/Logo-RGB-e1716964026823.png",
    alt: "Logo",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2024/05/Sakyaa-logo-PNG-1-e1716963425397.png",
    alt: "Sakyaa",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2024/05/TDM-Logo-Tamabaram-png-1-e1716962994456.png",
    alt: "TDM",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2024/05/kt-1-e1716963153889.png",
    alt: "KT",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2024/05/uplogo-e1722577726840.png",
    alt: "UP",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2024/05/mv-scaled.webp",
    alt: "MV",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2024/05/kanna.webp",
    alt: "Kanna",
  },
  {
    src: "https://ec4you.in/wp-content/uploads/2024/05/SVJ_Logo.png",
    alt: "SVJ",
  },
];

const row1 = BRANDS.slice(0, 9);
const row2 = BRANDS.slice(9, 18);
const row3 = BRANDS.slice(18);

// =======================
// COMPONENT
// =======================

export default function Branding() {
  const [counts, setCounts] = useState<{ [key: number]: number }>({});

  const statsRef = useRef<HTMLDivElement>(null);

  const hasAnimated = useRef(false);

  const animateCounters = useCallback(() => {
    STATS.forEach((stat) => {
      const duration = 2000;

      const start = performance.now();

      const update = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);

        const value = Math.floor(progress * stat.target);

        setCounts((prev) => ({
          ...prev,
          [stat.id]: value,
        }));

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          animateCounters();
        }
      },
      {
        threshold: 0.4,
      },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [animateCounters]);

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}

        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-black leading-tight mb-4">
            We Worked With <br />
            <span className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] bg-clip-text text-transparent">
              100+ Trusted Brands
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Industry leaders who trust our expertise and innovation
          </p>
        </div>

        {/* ROW 1 */}

        <div className="overflow-hidden mb-8">
          <div className="flex animate-marquee gap-6 w-max py-2">
            {[...row1, ...row1, ...row1].map((brand, i) => (
              <LogoCard key={i} brand={brand} />
            ))}
          </div>
        </div>

        {/* ROW 2 */}

        <div className="overflow-hidden mb-8">
          <div className="flex animate-marquee-reverse gap-6 w-max py-2">
            {[...row2, ...row2, ...row2].map((brand, i) => (
              <LogoCard key={i} brand={brand} />
            ))}
          </div>
        </div>

        {/* ROW 3 */}

        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-6 w-max py-2">
            {[...row3, ...row3, ...row3].map((brand, i) => (
              <LogoCard key={i} brand={brand} />
            ))}
          </div>
        </div>

        {/* COUNTERS */}

        <div
          ref={statsRef}
          className="mt-24 border-t border-gray-200 pt-14 grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {STATS.map((item) => (
            <div key={item.id} className="text-center">
              <h3 className="text-6xl font-extrabold bg-gradient-to-r from-[#669999] to-[#005858] text-transparent bg-clip-text">
                {counts[item.id] || 0}
                {item.suffix}
              </h3>

              <p className="text-gray-500 mt-3 uppercase tracking-widest font-semibold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoCard({ brand }: any) {
  return (
    <div className="group min-w-[230px] h-[110px] bg-white border border-gray-100 rounded-3xl shadow-md flex items-center justify-center px-8">
      <img
        src={brand.src}
        alt={brand.alt}
        className="max-h-[55px] max-w-[170px] object-contain"
      />
    </div>
  );
}
