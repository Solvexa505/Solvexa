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
    { role: "Team Member", name: "Haavya" },
    { role: "Team Member", name: "Pavithra" },
    { role: "Team Member", name: "Iniya" },
    { role: "Team Member", name: "Branayaga" },
    { role: "Team Member", name: "Shanmugapriya" },
    { role: "Team Member", name: "Vasunthara" },
    { role: "Team Member", name: "Pavithran S" },
    { role: "Team Member", name: "Avishikar" },
    { role: "Team Member", name: "Kavin chandran" },
  ];

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Floating Animated BG */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-teal-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-tr from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Solvexa Team
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders and the passionate members powering Solvexa.
          </p>
        </motion.div>

        {/* Executives */}
        <div className="flex flex-wrap justify-center gap-12 mb-24">
          {executives.map((exec, i) => (
            <motion.div
              key={exec.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ rotateY: 5, rotateX: -5, scale: 1.05 }}
              className="relative w-64 h-80 rounded-3xl p-6 bg-card/30 backdrop-blur-lg cursor-pointer 
                         transition-all duration-500 group perspective"
            >
              {/* Rotating Gradient Ring */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full p-[3px] 
                              bg-[conic-gradient(var(--tw-gradient-stops))] from-teal-400 via-purple-400 to-indigo-400 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-xl font-bold text-white">
                  {getInitials(exec.name)}
                </div>
              </div>

              <div className="absolute inset-0 rounded-3xl group-hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition"></div>

              <div className="mt-36 text-center relative z-10">
                <div className="text-2xl font-semibold text-indigo-400 drop-shadow-md">{exec.role}</div>
                <div className="text-xl font-bold text-foreground">{exec.name}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Members (same effect as Executives) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-primary mb-12 text-center">Team Members</h3>
          <div className="flex flex-wrap justify-center gap-12">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ rotateY: 5, rotateX: -5, scale: 1.05 }}
                className="relative w-56 h-72 rounded-3xl p-6 bg-card/30 backdrop-blur-lg cursor-pointer 
                           transition-all duration-500 group perspective"
              >
                {/* Rotating Gradient Ring */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full p-[3px] 
                                bg-[conic-gradient(var(--tw-gradient-stops))] from-pink-400 via-indigo-400 to-teal-400 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-lg font-bold text-white">
                    {getInitials(member.name)}
                  </div>
                </div>

                <div className="absolute inset-0 rounded-3xl group-hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] transition"></div>

                <div className="mt-32 text-center relative z-10">
                  <div className="text-lg font-semibold text-pink-400 drop-shadow-md">{member.role}</div>
                  <div className="text-lg font-bold text-foreground">{member.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolvexaTeam;
