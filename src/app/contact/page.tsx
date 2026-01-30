// Contact page for Angelica Gore Photography
// Contact: (573) 205-0592, angelica.gore20@gmail.com
// Location: Cuba, MO 65453

"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        session: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Create mailto link with form data
        const subject = `Photography Inquiry - ${formData.session}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ASession Type: ${formData.session}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:angelica.gore20@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="font-serif text-5xl font-bold text-[#2D3142] mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-gray-600">
                            Ready to book your session? I'd love to hear from you!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="font-serif text-3xl font-bold text-[#2D3142] mb-6">
                                Send a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A86A] focus:border-transparent transition-all"
                                        placeholder="John Smith"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A86A] focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A86A] focus:border-transparent transition-all"
                                        placeholder="(573) 555-1234"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="session" className="block text-sm font-medium text-gray-700 mb-2">
                                        Session Type *
                                    </label>
                                    <select
                                        id="session"
                                        required
                                        value={formData.session}
                                        onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A86A] focus:border-transparent transition-all"
                                    >
                                        <option value="">Select a session type</option>
                                        <option value="Portrait Photography">Portrait Photography</option>
                                        <option value="Senior Photos">Senior Photos</option>
                                        <option value="Family Session">Family Session</option>
                                        <option value="Milestone / Cake Smash">Milestone / Cake Smash</option>
                                        <option value="Event Coverage">Event Coverage</option>
                                        <option value="Sports Photography">Sports Photography</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A86A] focus:border-transparent transition-all resize-none"
                                        placeholder="Tell me about your photography needs..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#C9A86A] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#A0854D] transition-colors shadow-lg hover:shadow-xl"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Direct Contact */}
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="font-serif text-3xl font-bold text-[#2D3142] mb-6">
                                    Contact Information
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-[#C9A86A]/10 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-[#C9A86A]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-semibold text-lg text-[#2D3142] mb-1">Phone</h3>
                                            <a href="tel:5732050592" className="text-gray-600 hover:text-[#C9A86A] transition-colors">
                                                (573) 205-0592
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-[#C9A86A]/10 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-[#C9A86A]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-semibold text-lg text-[#2D3142] mb-1">Email</h3>
                                            <a href="mailto:angelica.gore20@gmail.com" className="text-gray-600 hover:text-[#C9A86A] transition-colors break-all">
                                                angelica.gore20@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-[#C9A86A]/10 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-[#C9A86A]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-semibold text-lg text-[#2D3142] mb-1">Location</h3>
                                            <p className="text-gray-600">Cuba, MO 65453</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="font-serif text-2xl font-bold text-[#2D3142] mb-6">
                                    Follow My Work
                                </h2>

                                <div className="space-y-4">
                                    <a
                                        href="https://www.facebook.com/p/Angelica-Gore-Photography-100087050109661/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-[#C9A86A] hover:bg-gray-50 transition-all group"
                                    >
                                        <svg className="w-6 h-6 text-gray-600 group-hover:text-[#C9A86A]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                        <div>
                                            <div className="font-semibold text-[#2D3142]">Facebook</div>
                                            <div className="text-sm text-gray-600">@angelica-gore-photography</div>
                                        </div>
                                    </a>

                                    <a
                                        href="https://www.instagram.com/angelicag_photography_/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-[#C9A86A] hover:bg-gray-50 transition-all group"
                                    >
                                        <svg className="w-6 h-6 text-gray-600 group-hover:text-[#C9A86A]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        <div>
                                            <div className="font-semibold text-[#2D3142]">Instagram</div>
                                            <div className="text-sm text-gray-600">@angelicag_photography_</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Quick Booking CTA */}
                            <div className="bg-gradient-to-br from-[#2D3142] to-[#4F5368] rounded-lg shadow-lg p-8 text-white">
                                <h3 className="font-serif text-2xl font-bold mb-4">
                                    Ready to Book?
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    Call now for fastest response and booking!
                                </p>
                                <a
                                    href="tel:5732050592"
                                    className="block w-full text-center bg-[#C9A86A] hover:bg-[#A0854D] px-6 py-3 rounded-full font-semibold transition-colors"
                                >
                                    Call (573) 205-0592
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
