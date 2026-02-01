"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ShutterReveal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Scroll to top immediately when component mounts
        window.scrollTo(0, 0);

        // Start opening the shutter after a brief moment (slowed 3x: 500ms -> 1500ms)
        const openTimer = setTimeout(() => {
            setIsOpen(true);
        }, 1500);

        // Remove the component entirely after animation completes (slowed 3x: 2000ms -> 6000ms)
        const completeTimer = setTimeout(() => {
            setIsComplete(true);
        }, 6000);

        return () => {
            clearTimeout(openTimer);
            clearTimeout(completeTimer);
        };
    }, []);

    // Once complete, don't render anything
    if (isComplete) return null;

    // Shutter blade positions (8 blades forming a circular aperture)
    const bladeCount = 8;
    const blades = Array.from({ length: bladeCount }, (_, i) => i);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center bg-[#2D3142]"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 2.4, delay: isOpen ? 1.5 : 0 }} // Slowed 3x
                >
                    {/* Shutter Blades Container */}
                    <div className="relative w-[200vmax] h-[200vmax]">
                        {blades.map((index) => {
                            const rotation = (360 / bladeCount) * index;
                            return (
                                <motion.div
                                    key={index}
                                    className="absolute top-1/2 left-1/2 origin-bottom-left"
                                    style={{
                                        width: "100vmax",
                                        height: "100vmax",
                                        rotate: `${rotation}deg`,
                                        backgroundColor: index % 2 === 0 ? "#1a1d26" : "#2D3142",
                                    }}
                                    initial={{
                                        clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)",
                                        x: "-50%",
                                        y: "-100%",
                                    }}
                                    animate={{
                                        clipPath: isOpen
                                            ? "polygon(0% 100%, 50% -200%, 100% 100%)"
                                            : "polygon(0% 100%, 50% 0%, 100% 100%)",
                                        x: "-50%",
                                        y: "-100%",
                                    }}
                                    transition={{
                                        duration: 2.4, // Slowed 3x (was 0.8s)
                                        ease: [0.4, 0, 0.2, 1],
                                        delay: index * 0.06, // Slowed 3x (was 0.02s)
                                    }}
                                />
                            );
                        })}
                    </div>

                    {/* Center Logo/Text while shutter is closed */}
                    <motion.div
                        className="absolute z-10 text-center"
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.8 : 1 }}
                        transition={{ duration: 0.9 }} // Slowed 3x
                    >
                        <div className="text-[#C9A86A] text-6xl mb-4">📷</div>
                        <h1 className="font-serif text-2xl text-white tracking-widest">
                            Angelica Gore
                        </h1>
                        <p className="text-white/60 text-sm tracking-[0.3em] mt-1">
                            PHOTOGRAPHY
                        </p>
                    </motion.div>

                    {/* Aperture Ring */}
                    <motion.div
                        className="absolute w-[300px] h-[300px] rounded-full border-4 border-[#C9A86A]/30"
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{
                            scale: isOpen ? 3 : 1,
                            opacity: isOpen ? 0 : 0.5,
                            rotate: isOpen ? 45 : 0
                        }}
                        transition={{ duration: 2.4, ease: "easeOut" }} // Slowed 3x
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
