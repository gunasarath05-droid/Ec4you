"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

const LOOKING_FOR_OPTIONS = [
  "Social Media Marketing",
  "SEO",
  "Google Ads",
  "Website Design & Development",
  "Video Production",
  "Mobile App Development",
  "Logo Design",
];

const BUDGET_OPTIONS = [
  "Rs. 15,000 - Rs. 20,000",
  "Rs. 20,000 - Rs. 30,000",
  "Rs. 30,000 - Rs. 40,000",
  "Rs. 40,000 - Rs. 50,000",
  "Rs. 50,000 - Rs. 75,000",
  "Rs. 75,000+",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",

    lookingFor: [] as string[],
    budget: "",
    runningAds: "",

    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = (value: string) => {
    setForm((prev) => ({
      ...prev,
      lookingFor: prev.lookingFor.includes(value)
        ? prev.lookingFor.filter((item) => item !== value)
        : [...prev.lookingFor, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.lookingFor.length === 0) {
      setError("Please select at least one service.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://your-api.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",

        lookingFor: [],
        budget: "",
        runningAds: "",

        message: "",
      });
    } catch {
      setError("Could not send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto"
    >
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 sm:p-10">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-black leading-tight mb-3">
            Let's Discuss <span className="bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] bg-clip-text text-transparent"> Our Project</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Fill the form below and our team will contact you shortly
          </p>
        </div>

        {success ? (
          <div className="flex flex-col items-center py-10">
            <CheckCircle2 className="w-16 h-16 text-green-500" />

            <h4 className="text-2xl font-bold mt-5">
              Message Sent Successfully!
            </h4>

            <p className="text-gray-500 mt-2">
              Thank you for contacting us.
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="mt-6 text-orange-600 font-semibold"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-7">
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl">
                {error}
              </div>
            )}

            {/* Name & Phone */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />

              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="+91 9876543210"
              />
            </div>

            {/* Email & Company */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputField
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />

              <InputField
                label="Company"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your Company"
              />
            </div>

            {/* Looking For */}

            <div>
              <label className="block font-bold text-gray-900 mb-4">
                Looking For <span className="text-red-500">*</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {LOOKING_FOR_OPTIONS.map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={form.lookingFor.includes(item)}
                      onChange={() => handleCheckbox(item)}
                      className="w-4 h-4 accent-orange-500"
                    />

                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget */}

            <div>
              <label className="block font-bold text-gray-900 mb-3">
                Preferred Budget / Month
              </label>

              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
              >
                <option value="">Select Budget</option>

                {BUDGET_OPTIONS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Running Ads */}

            <div>
              <label className="block font-bold text-gray-900 mb-4">
                Are you currently running ads?
              </label>

              <div className="flex gap-10">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="runningAds"
                    value="Yes"
                    checked={form.runningAds === "Yes"}
                    onChange={handleChange}
                    className="accent-orange-500"
                  />

                  <span>YES</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="runningAds"
                    value="No"
                    checked={form.runningAds === "No"}
                    onChange={handleChange}
                    className="accent-orange-500"
                  />

                  <span>NO</span>
                </label>
              </div>
            </div>

            {/* Message */}

            <div>
              <label className="block font-bold text-gray-900 mb-3">
                Message
              </label>

              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none resize-none focus:border-orange-500"
              />
            </div>

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-md text-white font-bold bg-[#669999] hover:scale-[1.02] transition-all duration-300 shadow-xl flex justify-center items-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                "Get Free Consultation"
              )}
            </button>
          </form>
        )}
      </div>
    </motion.section>
  );
}

function InputField({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-gray-900 mb-3">
        {label}
      </label>

      <input
        {...props}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
      />
    </div>
  );
}