import { useEffect, useRef } from "react";
import * as THREE from "three";
import LogoImage from "../assets/logo.png"; // your logo

const HeroSection = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    const loadVanta = async () => {
      if (vantaRef.current && !vantaEffect.current && isMounted) {
        const VANTA = await import("vanta/dist/vanta.halo.min.js"); // dynamic import
        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          THREE: THREE,
        });
      }
    };

    loadVanta();

    return () => {
      isMounted = false;
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <section
      ref={vantaRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden scroll-smooth"
    >
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <img
          src={LogoImage}
          alt="Solvexa Logo"
          className="w-64 md:w-80 lg:w-[500px] mb-6 object-contain"
        />

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Innovating the Future, Today
        </p>

        {/* Get Started Anchor (styled like a button) */}
        <a
          href="#about-us"
          className="hero-button px-12 py-4 text-lg font-semibold text-white rounded-full relative overflow-hidden group cursor-pointer inline-block"
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
