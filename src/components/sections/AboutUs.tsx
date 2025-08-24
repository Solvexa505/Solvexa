import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gradient-violet to-gradient-teal bg-clip-text text-transparent">
              About Us
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Founded on the principle that technology should amplify human potential, Solvexa stands at the intersection of innovation and impact. We don't just build solutions—we craft experiences that transform industries and enrich lives.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Our multidisciplinary team combines deep technical expertise with creative problem-solving, ensuring every project we undertake pushes the boundaries of what's possible while remaining grounded in real-world application.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "1+", label: "Projects Delivered" },
                { number: "1+", label: "Industries Served" },
                { number: "99%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-effect p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Our Mission</h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "To democratize access to cutting-edge technology solutions, empowering businesses and individuals to achieve their most ambitious goals through innovation, collaboration, and unwavering commitment to excellence."
              </p>
              
              <div className="space-y-4">
                {[
                  "Innovative Solutions",
                  "Global Impact", 
                  "Sustainable Growth",
                  "Human-Centered Design"
                ].map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-foreground/70">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;