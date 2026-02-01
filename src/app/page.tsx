// Homepage for Angelica Gore Photography
// Business info source: Facebook @angelica-gore-photography-100087050109661
// Services: Portraits, Milestones, Events, Sports Photography
// Pricing: $75-$175/session, $100/hr events
// Contact: (573) 205-0592, angelica.gore20@gmail.com, Cuba MO

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShutterReveal from "@/components/ShutterReveal";
import BokehBackground from "@/components/BokehBackground";

export default function Home() {
  return (
    <>
      {/* Camera Shutter Entrance Animation */}
      <ShutterReveal />

      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>
          </div>

          {/* Dynamic Bokeh Background with Camera Flash Effects */}
          <BokehBackground />

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl font-bold mb-6"
            >
              Capturing Life's{" "}
              <span className="text-[#C9A86A]">Beautiful Moments</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              Professional Photography Services In Cuba, MO<br />
              Portraits • Events • Sports • Milestones
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="bg-[#C9A86A] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-[#A0854D] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Your Session
              </Link>
              <Link
                href="/gallery"
                className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Gallery
              </Link>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2D3142] mb-4">
                Photography Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From intimate portraits to lively events, I capture the moments that matter most
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                {
                  title: "Portrait Photography",
                  description: "Individual, senior, and family portraits with natural, vibrant style",
                  image: "/portrait-icon.png",
                },
                {
                  title: "Milestone Sessions",
                  description: "Celebrate life's special moments - birthdays, cake smashes, and more",
                  image: "/milestone-icon.png",
                },
                {
                  title: "Event Coverage",
                  description: "Proms, reunions, parties - your event captured beautifully",
                  image: "/event-icon.png",
                },
                {
                  title: "Sports Photography",
                  description: "Dynamic action shots of local athletic events and teams",
                  image: "/sports-icon.png",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-4 md:p-8 rounded-lg shadow-lg transition-all duration-300 border border-gray-200 h-full"
                >
                  <div className="mb-3 md:mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={200}
                      height={200}
                      className="w-full h-32 md:h-48 object-contain"
                    />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[#2D3142]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-[#2D3142] to-[#4F5368] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Session Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Affordable, transparent pricing for every occasion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Mini Session",
                  price: "$75",
                  duration: "30 minutes",
                  location: "1 location",
                  ideal: "Quick portraits",
                },
                {
                  name: "Standard Session",
                  price: "$100",
                  duration: "1 hour",
                  location: "1 location",
                  ideal: "Most popular",
                  popular: true,
                },
                {
                  name: "Standard+",
                  price: "$175",
                  duration: "2 hours",
                  location: "2 locations",
                  ideal: "Extended shoots",
                },
                {
                  name: "Events",
                  price: "$100/hr",
                  duration: "Hourly rate",
                  location: "Any location",
                  ideal: "Parties, sports",
                },
              ].map((pkg) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`bg-white/10 backdrop-blur-md p-8 rounded-lg border ${pkg.popular ? "border-[#C9A86A] ring-2 ring-[#C9A86A]" : "border-white/20"
                    } relative`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#C9A86A] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold mb-4 text-[#C9A86A]">{pkg.price}</div>
                  <ul className="space-y-2 mb-6 text-gray-300">
                    <li>✓ {pkg.duration}</li>
                    <li>✓ {pkg.location}</li>
                    <li className="text-[#C9A86A]">• {pkg.ideal}</li>
                  </ul>
                  <a
                    href="tel:5732050592"
                    className="block text-center bg-[#C9A86A] hover:bg-[#A0854D] px-4 py-2 md:px-6 md:py-3 rounded-full transition-colors duration-300 font-semibold text-sm md:text-base"
                  >
                    Book Now
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2D3142] mb-6">
                Ready to Capture Your Moments?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's create something beautiful together. Based in Cuba, MO and serving the surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:5732050592"
                  className="flex items-center gap-2 bg-[#C9A86A] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#A0854D] transition-all duration-300 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (573) 205-0592
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-[#2D3142] text-[#2D3142] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2D3142] hover:text-white transition-all duration-300"
                >
                  Contact Form
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
