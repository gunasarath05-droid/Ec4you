// app/page.tsx (simplified)
import Hero from "@/components/Hero";
import Branding from "@/components/Branding";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import SuccessStories from "@/components/SuccessStories";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

import { testimonials } from "@/data/testimonials";
import { successStories } from "@/data/story";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SuccessStories stories={successStories} />
      <Branding />
      <WhyChoose />
      <Testimonials testimonials={testimonials} />
      

      <section id="contact" className="py-10 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-4">
            Let's Work <span className="bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
           Have a project in mind? Reach out and we'll get back to you.
          </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <ContactInfo />
             <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}