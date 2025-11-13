"use client";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Globe } from "lucide-react";

const highlights = [
  {
    icon: CheckCircle,
    title: "Military-Grade Reliability",
    desc: "Engineered for operational stability in extreme conditions."
  },
  {
    icon: Zap,
    title: "Advanced Autonomy",
    desc: "AI-powered navigation and mission execution for zero-compromise accuracy."
  },
  {
    icon: Globe,
    title: "Global Support",
    desc: "Comprehensive assistance and maintenance for worldwide clients."
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 px-6 bg-[#222222] text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-[#ff7b00]"
      >
        Highlights
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-3 max-w-5xl mx-auto">
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="flex flex-col items-center text-gray-300"
          >
            <item.icon className="w-10 h-10 text-[#ff7b00] mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="max-w-xs">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
