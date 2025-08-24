import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

// @ts-ignore
import RINGS from "vanta/dist/vanta.rings.min.js"; // make sure vanta installed via npm

const Creating = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = RINGS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0,
        color: 0x20ff,
        THREE: THREE,
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  const creativeProcess = [
    {
      step: "01",
      title: "Ideation",
      description:
        "We begin with collaborative brainstorming sessions, exploring possibilities and challenging conventional thinking to uncover breakthrough concepts.",
      color: "from-gradient-blue",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Our design philosophy centers on user experience, creating intuitive interfaces and seamless interactions that feel natural and engaging.",
      color: "from-gradient-violet",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Using cutting-edge technologies and agile methodologies, we build robust, scalable solutions that exceed performance expectations.",
      color: "from-gradient-teal",
    },
    {
      step: "04",
      title: "Refinement",
      description:
        "Through continuous testing, feedback integration, and iterative improvements, we ensure every solution reaches its full potential.",
      color: "from-primary",
    },
  ];

  return (
    <section
      id="creating"
      ref={vantaRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gradient-teal via-gradient-blue to-gradient-violet bg-clip-text text-transparent">
            Creating
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Our creative process transforms abstract ideas into tangible solutions.
            Every project follows a meticulous journey from concept to completion.
          </p>
        </motion.div>

        <div className="space-y-12">
          {creativeProcess.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect p-8 rounded-3xl group hover:bg-card/50 transition-all duration-300"
                  >
                    <div
                      className={`text-6xl font-bold mb-4 bg-gradient-to-r ${item.color} to-transparent bg-clip-text text-transparent opacity-20 group-hover:opacity-30 transition-opacity`}
                    >
                      {item.step}
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-primary group-hover:text-primary-glow transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className={`w-80 h-80 mx-auto bg-gradient-to-br ${item.color} to-accent/30 rounded-full opacity-20 blur-3xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creating;
