"use client";

import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

export default function SpotlightFocus() {
    const [isMobile, setIsMobile] = useState(false);

    // Smooth mouse movement
    const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

    useEffect(() => {
        // Check for mobile/touch device
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);

        const handleMouseMove = (e: MouseEvent) => {
            // Offset by half viewport to center for initial load if needed, 
            // but simpler to just track client coordinates
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", checkMobile);
        };
    }, [mouseX, mouseY]);

    // If mobile, don't show the effect (let content be clear)
    if (isMobile) return null;

    // Mask Image Template
    // We create a "hole" in the blur layer
    // The mask is black (transparent/cutout) at the mouse position, white (visible) elsewhere
    // Actually standard mask-image: alpha channel. 
    // Opaque areas of mask = visible content. Transparent areas = hidden content.
    // We want the OVERLAY (blur) to be visible everywhere EXCEPT the mouse.
    // So: Radial Gradient -> Transparent at center, Black (opaque) outside.
    const maskImage = useMotionTemplate`radial-gradient(circle 150px at ${mouseX}px ${mouseY}px, transparent 0%, black 100%)`;

    return (
        <>
            {/* 1. The Blur Layer */}
            {/* This covers the whole screen. It is blurred. The mask cuts a hole in it. */}
            {/* pointer-events-none so clicks go through to the underlying REAL content */}
            <motion.div
                style={{ maskImage, WebkitMaskImage: maskImage }}
                className="fixed inset-0 z-40 pointer-events-none backdrop-blur-[12px] bg-gray-900/10"
            />

            {/* 2. The Viewfinder Frame */}
            {/* Follows the mouse exactly to frame the clear area */}
            <motion.div
                style={{ x: mouseX, y: mouseY }}
                className="fixed top-0 left-0 z-50 pointer-events-none pointer-events-none -translate-x-1/2 -translate-y-1/2"
            >
                {/* Frame graphic */}
                <div className="relative w-[300px] h-[300px] border border-white/30 rounded-full md:rounded-lg">
                    {/* Corner Brackets */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C9A86A] -mt-1 -ml-1 rounded-tl-lg" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C9A86A] -mt-1 -mr-1 rounded-tr-lg" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C9A86A] -mb-1 -ml-1 rounded-bl-lg" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C9A86A] -mb-1 -mr-1 rounded-br-lg" />

                    {/* Crosshair */}
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-full h-px bg-[#C9A86A]/50 absolute top-1/2" />
                        <div className="h-full w-px bg-[#C9A86A]/50 absolute left-1/2" />
                    </div>

                    {/* Camera Stats */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 text-xs font-mono text-white/80 whitespace-nowrap">
                        <span>ISO 400</span>
                        <span>1/125</span>
                        <span className="text-[#C9A86A] font-bold">f/2.8</span>
                    </div>

                    {/* REC */}
                    <div className="absolute -top-8 right-0 flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                        <span className="text-xs font-mono text-white/80 tracking-widest">REC</span>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
