import { motion } from "framer-motion";

const SolvexaTeam = () => {
  const executives = [
    { role: "Founder", name: "Harish Reddy" },
    { role: "Co-Founder", name: "Hariprashath N" },
    { role: "Co-Founder", name: "Sakti D" },
    { role: "CEO", name: "Kavin Raj ks" },
    { role: "CTO", name: "Harshavardhan" },
  ];

  const teamMembers = [
    "Haavya",
    "Pavithra",
    "Iniya",
    "Branayaga",
    "Shanmugapriya",
    "Vasunthara",
    "Pavithran S",
    "Avishikar",
    "Kavin chandran",
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-gradient-blue/20 to-gradient-teal/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tr from-gradient-violet/20 to-gradient-blue/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gradient-teal via-gradient-blue to-gradient-violet bg-clip-text text-transparent">
            Solvexa Team
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders and talented team members behind Solvexa.
          </p>
        </motion.div>

        {/* Executives */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {executives.map((exec, index) => (
            <motion.div
              key={exec.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-3xl group hover:bg-card/50 transition-all duration-300 text-center"
            >
              <div className="text-2xl font-semibold text-primary mb-2">{exec.role}</div>
              <div className="text-xl font-bold text-foreground">{exec.name}</div>
            </motion.div>
          ))}
        </div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Team Members</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-2xl text-center hover:bg-card/50 transition-all duration-300"
              >
                <div className="text-lg font-bold text-foreground">{member}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolvexaTeam;
