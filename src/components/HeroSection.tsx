"use client";
import React from "react";
import { motion } from "framer-motion";
import { Vortex } from "../components/ui/shadcn-io/vortex"; // ✅ your vortex background
import LogoImage from "../assets/logo.png"; // ✅ ensure file exists

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Vortex
        backgroundColor="black"
        particleCount={700}
        baseHue={220}
        baseSpeed={0.0}
        rangeSpeed={1.5}
        className="flex items-center justify-center w-full h-full"
      >
        {/* ✅ Hero Content floats above vortex */}
        <div className="text-center text-white z-10 px-6 max-w-4xl mx-auto">
          {/* Logo with breathing animation */}
          <motion.img
            src={LogoImage}
            alt="Solvexa Logo"
            className="mb-6 object-contain mx-auto"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "700px", maxWidth: "95vw" }}
          />

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Innovating the Future, Today
          </p>

          {/* Get Started Button */}
          <a
            href="#about-us"
            className="hero-button px-12 py-4 text-lg font-semibold text-white rounded-full relative overflow-hidden group cursor-pointer inline-block"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </Vortex>
    </section>
  );
};

export default HeroSection;
