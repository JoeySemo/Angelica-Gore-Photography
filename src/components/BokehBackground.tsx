"use client";

import { motion } from "framer-motion";

// Generate random bokeh circles for the background
const generateBokeh = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 80 + 20, // 20-100px
        x: Math.random() * 100, // % position
        y: Math.random() * 100,
        duration: Math.random() * 10 + 15, // 15-25s for full animation cycle
        delay: Math.random() * 5,
        opacity: Math.random() * 0.4 + 0.1, // 0.1-0.5
        color: Math.random() > 0.5 ? "#C9A86A" : "#ffffff",
    }));
};

const bokehElements = generateBokeh(15);

// Camera flash bursts
const flashElements = [
    { delay: 3, x: "20%", y: "30%" },
    { delay: 7, x: "80%", y: "40%" },
    { delay: 11, x: "50%", y: "20%" },
    { delay: 15, x: "30%", y: "70%" },
];

export default function BokehBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Bokeh Circles */}
            {bokehElements.map((bokeh) => (
                <motion.div
                    key={bokeh.id}
                    className="absolute rounded-full"
                    style={{
                        width: bokeh.size,
                        height: bokeh.size,
                        left: `${bokeh.x}%`,
                        top: `${bokeh.y}%`,
                        background: `radial-gradient(circle, ${bokeh.color}40 0%, ${bokeh.color}00 70%)`,
                        boxShadow: `0 0 ${bokeh.size / 2}px ${bokeh.color}30`,
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: [0, bokeh.opacity, bokeh.opacity, 0],
                        scale: [0.5, 1, 1.2, 0.8],
                        x: [0, 30, -20, 10, 0],
                        y: [0, -40, 20, -10, 0],
                    }}
                    transition={{
                        duration: bokeh.duration,
                        delay: bokeh.delay + 4, // Start after shutter opens
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Camera Flash Bursts */}
            {flashElements.map((flash, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: flash.x, top: flash.y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                    }}
                    transition={{
                        duration: 0.3,
                        delay: flash.delay,
                        repeat: Infinity,
                        repeatDelay: 12,
                    }}
                >
                    {/* Flash burst */}
                    <div className="w-32 h-32 -translate-x-1/2 -translate-y-1/2">
                        <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-80" />
                        <div className="absolute inset-4 bg-[#C9A86A] rounded-full blur-lg opacity-60" />
                    </div>
                </motion.div>
            ))}

            {/* Floating Light Streaks */}
            <motion.div
                className="absolute top-1/4 -left-20 w-[400px] h-1 bg-gradient-to-r from-transparent via-[#C9A86A]/50 to-transparent"
                initial={{ x: -400, opacity: 0, rotate: -20 }}
                animate={{ x: ["0%", "200%"], opacity: [0, 0.7, 0] }}
                transition={{ duration: 8, delay: 5, repeat: Infinity, repeatDelay: 10 }}
            />
            <motion.div
                className="absolute top-2/3 -right-20 w-[300px] h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                initial={{ x: 400, opacity: 0, rotate: 15 }}
                animate={{ x: ["0%", "-200%"], opacity: [0, 0.5, 0] }}
                transition={{ duration: 6, delay: 8, repeat: Infinity, repeatDelay: 12 }}
            />

            {/* Animated Ring Pulse (like camera focus ring) */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C9A86A]/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 0.3, 0] }}
                transition={{ duration: 8, delay: 4, repeat: Infinity }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/10"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: [1, 1.3, 1], opacity: [0, 0.2, 0] }}
                transition={{ duration: 6, delay: 6, repeat: Infinity }}
            />

            {/* Golden Particles Rising */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-[#C9A86A]"
                    style={{
                        left: `${10 + i * 12}%`,
                        bottom: "-10px",
                    }}
                    initial={{ y: 0, opacity: 0 }}
                    animate={{
                        y: [0, -800],
                        opacity: [0, 0.8, 0.6, 0],
                        scale: [0.5, 1, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 12,
                        delay: i * 1.5 + 5,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                />
            ))}

            {/* Glowing Orb */}
            <motion.div
                className="absolute top-[30%] right-[15%] w-40 h-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 2 }}
            >
                <motion.div
                    className="w-full h-full rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(201,168,106,0.4) 0%, rgba(201,168,106,0) 70%)",
                        filter: "blur(20px)",
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </div>
    );
}
