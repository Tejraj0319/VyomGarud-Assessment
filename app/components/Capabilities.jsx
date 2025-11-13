"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Radio, Plane } from "lucide-react";

const capabilities = [
  {
    icon: Plane,
    title: "Tactical UAV Systems",
    desc: "Designed for endurance and precision, our UAVs excel in reconnaissance and real-time mission support.",
  },
  {
    icon: Cpu,
    title: "Autonomous Flight AI",
    desc: "Advanced onboard intelligence enables obstacle detection, adaptive routing, and hands-free operations.",
  },
  {
    icon: ShieldCheck,
    title: "Defense-Grade Reliability",
    desc: "Built with rugged materials and secure communication for harsh environments and mission-critical use.",
  },
  {
    icon: Radio,
    title: "Command & Control Systems",
    desc: "Seamless integration with ground stations and secure data links for remote operations.",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-12 px-6 text-center relative"
      style={{
        backgroundImage: "url('/wmremove-transformed.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold mb-12 text-[#ff7b00] relative z-10 shadow-2xl"
      >
        Our Capabilities
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto relative z-10">
        {capabilities.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform transition-shadow flex flex-col items-center"
          >
            <item.icon className="w-14 h-14 text-[#ff7b00] mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-3 text-white">
              {item.title}
            </h3>
            <p className="text-gray-300 text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
