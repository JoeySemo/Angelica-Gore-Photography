"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function ViewfinderInteraction() {
    const [isFocused, setIsFocused] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Handle mouse movement for parallax effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Trigger focus animation on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFocused(true);
        }, 1500); // Wait a bit before locking focus
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            {/* Blur Overlay - Simulates looking through lens before focus */}
            <motion.div
                initial={{ backdropFilter: "blur(12px)" }}
                animate={{ backdropFilter: isFocused ? "blur(0px)" : "blur(12px)" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 z-10"
            />

            {/* Viewfinder Elements Container - Parallax movement */}
            <motion.div
                animate={{ x: mousePosition.x, y: mousePosition.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="w-full h-full relative"
            >
                {/* Corner Brackets */}
                <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/50 rounded-tl-lg" />
                <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white/50 rounded-tr-lg" />
                <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white/50 rounded-bl-lg" />
                <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/50 rounded-br-lg" />

                {/* Center Focus Crosshair */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 1.5, opacity: 0, borderColor: "white" }}
                        animate={{
                            scale: isFocused ? 1 : 1.2,
                            opacity: 1,
                            borderColor: isFocused ? "#4ade80" : "white", // Turns green on focus
                        }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className={`w-20 h-20 border-2 rounded-sm transition-colors duration-300 relative`}
                    >
                        {/* Center Dot */}
                        <div className={`absolute top-1/2 left-1/2 w-1 h-1 bg-current transform -translate-x-1/2 -translate-y-1/2 rounded-full ${isFocused ? "text-green-400" : "text-white"}`} />

                        {/* Horizontal/Vertical ticks */}
                        <div className="absolute top-1/2 left-0 w-2 h-px bg-current -translate-x-full" />
                        <div className="absolute top-1/2 right-0 w-2 h-px bg-current translate-x-full" />
                        <div className="absolute top-0 left-1/2 w-px h-2 bg-current -translate-y-full" />
                        <div className="absolute bottom-0 left-1/2 w-px h-2 bg-current translate-y-full" />
                    </motion.div>
                </div>

                {/* Camera info text */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 font-mono text-sm tracking-widest flex gap-8">
                    <span>ISO 800</span>
                    <span>1/250</span>
                    <span>f/1.8</span>
                    <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-[#C9A86A]"
                    >
                        RAW
                    </motion.span>
                </div>

                {/* REC Indicator */}
                <div className="absolute top-10 right-12 flex items-center gap-2">
                    <motion.div
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                    />
                    <span className="text-white/80 font-mono text-xs tracking-wider">REC</span>
                </div>

            </motion.div>
        </div>
    );
}
