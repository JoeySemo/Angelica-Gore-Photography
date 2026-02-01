// Dynamic Service Gallery Page
// Displays category-specific content and photo grid
// URL: /gallery/[category]

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Map URL slugs to pretty names and content
const categories: {
    [key: string]: {
        title: string;
        description: string;
        icon: string;
        images: { id: number; alt: string; caption: string }[];
        facebookAlbum?: string;
        instagramHighlight?: string;
        facebookLabel?: string;
        instagramLabel?: string;
    }
} = {
    portraits: {
        title: "Portrait Photography",
        description: "Capturing your unique personality in natural, vibrant settings. From high school seniors to professional headshots.",
        icon: "👤",
        facebookAlbum: "https://www.facebook.com/100087050109661/albums/577351135176552/",
        facebookLabel: "View Senior Session Album",
        instagramLabel: "See More Portraits",
        images: [
            { id: 1, alt: "Senior Portrait Outdoor", caption: "Natural Light Senior Session" },
            { id: 2, alt: "Family Portrait", caption: "Family Connection" },
            { id: 3, alt: "Professional Headshot", caption: "Professional Branding" },
            { id: 4, alt: "Creative Portrait", caption: "Artistic Expression" },
            { id: 5, alt: "Couple Portrait", caption: "Engagement & Couples" },
            { id: 6, alt: "Child Portrait", caption: "Childhood Moments" },
        ]
    },
    milestones: {
        title: "Milestone Sessions",
        description: "Celebrating life's big moments. Birthdays, cake smashes, graduations, and everything in between.",
        icon: "🎂",
        facebookLabel: "View Milestone Photos",
        instagramLabel: "See Birthday Sessions",
        images: [
            { id: 1, alt: "Cake Smash", caption: "First Birthday Cake Smash" },
            { id: 2, alt: "Graduation", caption: "Graduation Achievement" },
            { id: 3, alt: "First Steps", caption: "Baby Milestones" },
            { id: 4, alt: "Birthday Party", caption: "Birthday Joy" },
            { id: 5, alt: "Maternity", caption: "Expecting Mother" },
            { id: 6, alt: "Newborn", caption: "Newborn Sweetness" },
        ]
    },
    events: {
        title: "Event Coverage",
        description: "Documenting your special occasions so you can be present in the moment. Proms, reunions, and parties.",
        icon: "🎉",
        instagramHighlight: "https://www.instagram.com/p/C9bS9QtxzpT/",
        facebookLabel: "View Event Albums",
        instagramLabel: "See Fair Queen Candidates",
        images: [
            { id: 1, alt: "Prom Group", caption: "Prom Night Group Shot" },
            { id: 2, alt: "Reunion Candid", caption: "Family Reunion Connection" },
            { id: 3, alt: "Party Decor", caption: "Event Details & Decor" },
            { id: 4, alt: "Candid Laughter", caption: "Candid Party Moments" },
            { id: 5, alt: "Dance Floor", caption: "Dance Floor Action" },
            { id: 6, alt: "Toast", caption: "Celebratory Toasts" },
        ]
    },
    sports: {
        title: "Sports Photography",
        description: "Freezing the action. Dynamic shots of local athletic events, team photos, and individual athlete highlights.",
        icon: "⚽",
        facebookAlbum: "https://www.facebook.com/100087050109661/albums/481971757381157/",
        facebookLabel: "View JV Baseball Album",
        instagramLabel: "See Game Day Shots",
        images: [
            { id: 1, alt: "Football Action", caption: "Friday Night Lights" },
            { id: 2, alt: "Basketball Shot", caption: "Court Action" },
            { id: 3, alt: "Team Photo", caption: "Team Spirit" },
            { id: 4, alt: "Track Feature", caption: "Finish Line Focus" },
            { id: 5, alt: "Baseball Swing", caption: "At The Plate" },
            { id: 6, alt: "Cheer/Dance", caption: "Sideline Spirit" },
        ]
    },
};

// Generate static params for all categories
export function generateStaticParams() {
    return Object.keys(categories).map((category) => ({
        category: category,
    }));
}

type Props = {
    params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const category = categories[resolvedParams.category];
    if (!category) return { title: "Gallery" };

    return {
        title: `${category.title} Gallery | Angelica Gore Photography`,
        description: category.description,
    };
}

export default async function ServiceGallery({ params }: Props) {
    const resolvedParams = await params;
    const categoryKey = resolvedParams.category.toLowerCase();
    const category = categories[categoryKey];

    // Fallback for unknown category
    if (!category) {
        return (
            <>
                <Navbar />
                <main className="min-h-screen pt-32 pb-16 text-center">
                    <h1 className="text-3xl font-bold">Category Not Found</h1>
                    <Link href="/gallery" className="text-[#C9A86A] underline mt-4 block">Return to Gallery</Link>
                </main>
                <Footer />
            </>
        );
    }

    const facebookUrl = category.facebookAlbum || "https://www.facebook.com/p/Angelica-Gore-Photography-100087050109661/photos/";
    const instagramUrl = category.instagramHighlight || "https://www.instagram.com/angelicag_photography_/";

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center mb-12 animate-fadeIn">
                        <div className="text-6xl mb-4">{category.icon}</div>
                        <h1 className="font-serif text-5xl font-bold text-[#2D3142] mb-6">
                            {category.title}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                            {category.description}
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-[#C9A86A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#A0854D] transition-colors shadow-lg"
                        >
                            Book a {category.title} Session
                        </Link>
                    </div>

                    {/* Featured Social Media Links - More Prominent */}
                    <div className="bg-gradient-to-r from-[#2D3142] to-[#4a4f65] rounded-2xl p-8 md:p-12 mb-12 shadow-xl">
                        <div className="text-center mb-8">
                            <h2 className="font-serif text-3xl font-bold text-white mb-3">
                                Browse Our {category.title} Gallery
                            </h2>
                            <p className="text-gray-300 text-lg">
                                See our complete collection of {category.title.toLowerCase()} work on social media
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                            {/* Facebook Album Card */}
                            <a
                                href={facebookUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center">
                                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#2D3142] text-lg group-hover:text-[#1877F2] transition-colors">
                                            {category.facebookLabel || "View Facebook Album"}
                                        </h3>
                                        <p className="text-gray-500 text-sm">Browse full photo albums</p>
                                    </div>
                                </div>
                                <div className="flex items-center text-[#1877F2] font-semibold">
                                    Open Album
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </a>

                            {/* Instagram Card */}
                            <a
                                href={instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center">
                                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#2D3142] text-lg group-hover:text-[#E1306C] transition-colors">
                                            {category.instagramLabel || "View Instagram Feed"}
                                        </h3>
                                        <p className="text-gray-500 text-sm">Latest posts & highlights</p>
                                    </div>
                                </div>
                                <div className="flex items-center text-[#E1306C] font-semibold">
                                    View Feed
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Gallery Grid Preview */}
                    <div className="mb-12">
                        <h3 className="font-serif text-2xl font-bold text-[#2D3142] mb-6 text-center">
                            Sample Work
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {category.images.map((img, index) => (
                                <div
                                    key={img.id}
                                    className="group relative aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-500">
                                        <div className="text-center p-4">
                                            <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-xs font-medium">{img.caption}</span>
                                        </div>
                                    </div>

                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <p className="text-white font-serif text-lg text-center px-4">
                                            {img.caption}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-gray-500 mt-6 text-sm">
                            👆 These are preview placeholders. View the full gallery on our social media!
                        </p>
                    </div>

                    {/* Book Now CTA */}
                    <div className="bg-white rounded-lg p-8 text-center shadow-md border-t-4 border-[#C9A86A]">
                        <h3 className="font-serif text-2xl font-bold text-[#2D3142] mb-4">
                            Ready to Book Your {category.title} Session?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Contact us today to schedule your session in Cuba, MO and surrounding areas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:5732050592"
                                className="inline-flex items-center justify-center gap-2 bg-[#C9A86A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#A0854D] transition-colors shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                (573) 205-0592
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 border-2 border-[#2D3142] text-[#2D3142] px-8 py-3 rounded-full font-semibold hover:bg-[#2D3142] hover:text-white transition-colors"
                            >
                                Send a Message
                            </Link>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
