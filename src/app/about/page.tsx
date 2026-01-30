// About page for Angelica Gore Photography

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about Angelica Gore Photography - professional photography services in Cuba, MO",
};

export default function About() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="font-serif text-5xl font-bold text-[#2D3142] mb-4">
                            About Angelica Gore Photography
                        </h1>
                        <p className="text-xl text-gray-600">
                            Capturing moments that matter in Cuba, MO
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-serif text-3xl font-bold text-[#2D3142] mb-6">
                                Welcome to My Studio
                            </h2>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Located in Cuba, Missouri, Angelica Gore Photography specializes in capturing life's most precious moments with vibrant, natural artistry. Whether it's a senior portrait, a family milestone, or an exciting sports event, I bring passion and professionalism to every session.
                            </p>

                            <h3 className="font-serif text-2xl font-bold text-[#2D3142] mt-12 mb-4">
                                My Photography Style
                            </h3>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                I believe in creating images that are both beautiful and authentic. My approach combines:
                            </p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <span className="text-[#C9A86A] mr-3 text-xl">✓</span>
                                    <span className="text-gray-700"><strong>Natural, vibrant colors</strong> that bring your photos to life</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#C9A86A] mr-3 text-xl">✓</span>
                                    <span className="text-gray-700"><strong>Outdoor settings</strong> featuring wooded areas, fields, and natural landscapes</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#C9A86A] mr-3 text-xl">✓</span>
                                    <span className="text-gray-700"><strong>Candid expressions</strong> and natural poses that capture genuine emotion</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#C9A86A] mr-3 text-xl">✓</span>
                                    <span className="text-gray-700"><strong>Community focus</strong> - proud to serve Cuba, MO and surrounding areas</span>
                                </li>
                            </ul>

                            <h3 className="font-serif text-2xl font-bold text-[#2D3142] mt-12 mb-4">
                                Services I Offer
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                    <h4 className="font-semibold text-lg text-[#2D3142] mb-2">Portrait Sessions</h4>
                                    <p className="text-gray-600">Individual, senior, and family portraits that celebrate who you are</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                    <h4 className="font-semibold text-lg text-[#2D3142] mb-2">Milestone Photography</h4>
                                    <p className="text-gray-600">Birthdays, cake smashes, and life's special moments</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                    <h4 className="font-semibold text-lg text-[#2D3142] mb-2">Event Coverage</h4>
                                    <p className="text-gray-600">Proms, reunions, parties - your events captured beautifully</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                    <h4 className="font-semibold text-lg text-[#2D3142] mb-2">Sports Photography</h4>
                                    <p className="text-gray-600">Dynamic action shots of local athletic events and teams</p>
                                </div>
                            </div>

                            <h3 className="font-serif text-2xl font-bold text-[#2D3142] mt-12 mb-4">
                                Let's Connect
                            </h3>

                            <p className="text-gray-700 mb-6 leading-relaxed">
                                I'd love to hear about your photography needs and help create beautiful memories together. Reach out today to discuss your next session!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <a
                                    href="tel:5732050592"
                                    className="inline-flex items-center justify-center gap-2 bg-[#C9A86A] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#A0854D] transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call (573) 205-0592
                                </a>
                                <a
                                    href="mailto:angelica.gore20@gmail.com"
                                    className="inline-flex items-center justify-center gap-2 border-2 border-[#2D3142] text-[#2D3142] px-6 py-3 rounded-full font-semibold hover:bg-[#2D3142] hover:text-white transition-all"
                                >
                                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Email Me
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
