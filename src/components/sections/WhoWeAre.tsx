import { motion } from 'framer-motion';

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gradient-blue/5 to-gradient-violet/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gradient-blue via-gradient-violet to-gradient-teal bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Solvexa is a collective of visionary technologists, innovative thinkers, and problem solvers united by a common mission: to reshape the future through cutting-edge solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Visionaries",
              description: "Forward-thinking leaders who see beyond today's limitations to tomorrow's possibilities.",
              icon: "🚀"
            },
            {
              title: "Innovators", 
              description: "Creative minds that transform complex challenges into elegant, breakthrough solutions.",
              icon: "💡"
            },
            {
              title: "Builders",
              description: "Expert craftspeople who bring visionary concepts to life with precision and excellence.",
              icon: "🔧"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl hover:bg-card/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:animate-float">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;