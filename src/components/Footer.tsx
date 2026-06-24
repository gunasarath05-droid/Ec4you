"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "https://ec4you.in/about/" },
      { label: "Services", href: "https://ec4you.in/services" },
      { label: "Contact", href: "https://ec4you.in/contact" },
    ],
  },

  {
    title: "Quick Links",
    links: [
      { label: "Blog", href: "https://ec4you.in/blogs/" },
      { label: "Career", href: "https://ec4you.in/careers/" },
      { label: "Privacy Policy", href: "https://ec4you.in/privacy-policy/" },
      { label: "Terms & Conditions", href: "https://ec4you.in/terms-conditions/" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    icon: <FaFacebook />,
    href: "https://www.facebook.com/profile.php?id=61583296400117",
  },

  {
    label: "Twitter",
    icon: <FaXTwitter />,
    href: "https://x.com/ec4you43786?s=20",
  },

  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/company/ec4you-digital-marketing/",
  },

  {
    label: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/ec4you.digital/",
  },
];

export default function Footer() {
  return (
    <div className="bg-gradient-to-br from-[#004c4c] via-[#005e5e] to-[#003838] text-white">

      {/* Main Footer */}

      <footer className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}

          <div className="lg:col-span-2">

            <Link href="/" className="inline-block mb-5">
              <img
                src="/Logo1.png"
                alt="EC4YOU"
                className="h-20 w-auto"
              />
            </Link>

            <p className="text-gray-200 text-[15px] leading-7 max-w-md">
              We are a full-service digital marketing agency helping
              businesses grow through strategic marketing, creative
              design, and technology-driven solutions. Our goal is
              to turn ideas into measurable results.
            </p>

            {/* Social */}

            <div className="flex items-center gap-4 mt-8">

              {SOCIAL_LINKS.map((social) => (

                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                  w-11 h-11
                  rounded-full
                  bg-white/10
                  backdrop-blur-sm
                  flex items-center justify-center
                  text-lg
                  hover:bg-orange-500
                  hover:-translate-y-1
                  transition-all duration-300
                  "
                >
                  {social.icon}
                </a>

              ))}

            </div>
          </div>

          {/* Footer Links */}

          {FOOTER_LINKS.map((group) => (

            <div key={group.title}>

              <h4 className="text-lg font-bold relative mb-8">

                {group.title}

                <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-orange-500"></span>

              </h4>

              <ul className="space-y-4">

                {group.links.map((link) => (

                  <li key={link.label}>

                    <Link
                      href={link.href}
                      className="
                      group
                      flex items-center gap-2
                      text-gray-200
                      hover:text-orange-500
                      transition-all duration-300
                      "
                    >

                      <ChevronRight
                        className="
                        w-4 h-4
                        opacity-0
                        -ml-3
                        group-hover:opacity-100
                        group-hover:ml-0
                        transition-all duration-300
                        "
                      />

                      {link.label}

                    </Link>

                  </li>

                ))}

              </ul>

            </div>

          ))}

          {/* Contact */}

          <div>

            <h4 className="text-lg font-bold relative mb-8">

              Contact

              <span className="absolute left-0 -bottom-2 w-10 h-[2px] bg-orange-500"></span>

            </h4>

            <div className="space-y-5">

              <a
                href="tel:+917010942474"
                className="flex gap-3 items-center text-gray-200 hover:text-orange-500 transition-colors"
              >

                <Phone className="w-5 h-5 shrink-0" />

                <span>
                  +91 70109 42474
                </span>

              </a>

              <a
                href="mailto:info@ec4you.in"
                className="flex gap-3 items-center text-gray-200 hover:text-orange-500 transition-colors"
              >

                <Mail className="w-5 h-5 shrink-0" />

                <span>
                  info@ec4you.in
                </span>

              </a>

              <a href="https://share.google/P1eL0kKWZ1EbaYVQS" target="_blank" rel="noopener noreferrer" className="flex gap-3 items-start text-gray-200">

                <MapPin className="w-5 h-5 shrink-0 mt-1" />

                <p className="leading-7">
                  1/89, Indira Nagar 1st St, Vengavasal, Chennai- 600126
                </p>

              </a>

            </div>

          </div>

        </div>

      </footer>

      {/* Bottom Bar */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-300 text-center">

            © {new Date().getFullYear()} EC4YOU.

            {" "}All Rights Reserved.

            {" "}Powered by{" "}

            <Link
              href="https://ec4you.in/"
              className="font-semibold hover:text-orange-400 transition-colors"
            >
              EC4YOU
            </Link>

          </p>

          <div className="flex gap-6 text-sm">

            <Link
              href="/privacy-policy"
              className="text-gray-300 hover:text-orange-400 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-gray-300 hover:text-orange-400 transition-colors"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}