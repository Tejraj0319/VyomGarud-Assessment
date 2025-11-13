"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 text-center bg-[#111]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#ff7b00]">
          About VyomGarud
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          VyomGarud develops cutting-edge Unmanned Aerial Vehicle systems
          engineered for <span className="text-white font-semibold">military precision</span>, 
          <span className="text-white font-semibold"> autonomous intelligence</span>, and 
          <span className="text-white font-semibold"> unmatched reliability</span>.
          We combine advanced AI-driven control systems with rugged design for
          the most demanding defense and industrial applications.
        </p>
      </motion.div>
    </section>
  );
}
