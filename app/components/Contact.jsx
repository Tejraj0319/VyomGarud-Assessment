"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#0f0f0f] text-center border-t border-[#222]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-[#ff7b00]"
      >
        Get in Touch
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto bg-[#1a1a1a] p-8 rounded-2xl shadow-md space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-[#111] border border-[#333] text-white focus:outline-none focus:border-[#ff7b00]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-[#111] border border-[#333] text-white focus:outline-none focus:border-[#ff7b00]"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 rounded-md bg-[#111] border border-[#333] text-white focus:outline-none focus:border-[#ff7b00]"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-[#ff7b00] hover:bg-[#e86d00] transition-all text-white font-semibold"
        >
          Send Message
        </button>
      </motion.form>

      <p className="mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} VyomGarud. All rights reserved.
      </p>
    </section>
  );
}
