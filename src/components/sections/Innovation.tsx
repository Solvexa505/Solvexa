import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Innovation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handlePointerMove = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      const { top, left, width, height } = el.getBoundingClientRect();
      const posX = clientX - left - width / 2;
      const posY = clientY - top - height / 2;
      el.style.setProperty("--posX", `${posX}px`);
      el.style.setProperty("--posY", `${posY}px`);
    };

    el.addEventListener("pointermove", handlePointerMove);
    return () => el.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const innovations = [
    {
      icon: "🧠",
      title: "AI-Driven Solutions",
      description:
        "Leveraging advanced machine learning and neural networks to create intelligent systems that learn, adapt, and evolve.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Autonomous Decision Making"],
    },
    {
      icon: "⚡",
      title: "Quantum Computing",
      description:
        "Harnessing quantum mechanics to solve complex problems exponentially faster than classical computers.",
      features: ["Quantum Algorithms", "Cryptographic Security", "Optimization Problems", "Scientific Simulation"],
    },
    {
      icon: "🌐",
      title: "Edge Computing",
      description:
        "Bringing computation closer to data sources for ultra-low latency and real-time processing capabilities.",
      features: ["Real-time Processing", "IoT Integration", "Bandwidth Optimization", "Offline Capabilities"],
    },
  ];

  return (
    <section
      ref={ref}
      id="innovation"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(115deg, rgb(211 255 215), rgb(0 0 0)),
          radial-gradient(90% 100% at calc(50% + var(--posX)) calc(0% + var(--posY)), rgb(200 200 200), rgb(22 0 45)),
          radial-gradient(100% 100% at calc(80% - var(--posX)) calc(0% - var(--posY)), rgb(250 255 0), rgb(36 0 0)),
          radial-gradient(150% 210% at calc(100% + var(--posX)) calc(0% + var(--posY)), rgb(20 175 125), rgb(0 10 255)),
          radial-gradient(100% 100% at calc(100% - var(--posX)) calc(30% - var(--posY)), rgb(255 77 0), rgb(0 200 255)),
          linear-gradient(60deg, rgb(255 0 0), rgb(120 86 255))
        `,
        backgroundBlendMode: "overlay, overlay, difference, difference, difference, normal",
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gradient-blue via-gradient-violet to-gradient-teal bg-clip-text text-transparent">
            Innovation
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            At the forefront of technological advancement, we pioneer solutions that don't just meet today's needs—they anticipate tomorrow's challenges.
          </p>
        </motion.div>

        <div className="space-y-16">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect p-8 rounded-3xl group hover:bg-card/50 transition-all duration-300"
                >
                  <div className="text-6xl mb-6">{innovation.icon}</div>
                  <h3 className="text-3xl font-bold mb-4 text-primary">{innovation.title}</h3>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">{innovation.description}</p>

                  <div className="grid grid-cols-2 gap-3">
                    {innovation.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-sm text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="lg:w-1/2 flex justify-center">
                <motion.div
                  animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="relative"
                >
                  <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
                  <motion.div
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 bg-gradient-to-tl from-gradient-violet/30 to-gradient-teal/30 rounded-full blur-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovation;
