import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Project 505",
      description: "An innovative platform undergoing rigorous testing to push boundaries in tech.",
      category: "AI & Automation",
      status: "undergoing testing",
      tech: ["React", "Node.js", "TailwindCSS"],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "text-green-400 bg-green-400/10";
      case "Beta":
        return "text-blue-400 bg-blue-400/10";
      case "In Development":
        return "text-yellow-400 bg-yellow-400/10";
      case "Research Phase":
        return "text-purple-400 bg-purple-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gradient-violet via-gradient-teal to-gradient-blue bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of groundbreaking projects that are reshaping
            industries and defining the future of technology.
          </p>
        </motion.div>

        {/* Projects Centered */}
        <div className="flex justify-center w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect p-6 rounded-2xl group hover:bg-card/50 transition-all duration-300 cursor-pointer max-w-md w-full"
            >
              {/* Category & Status */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm text-foreground/60 font-medium">
                  {project.category}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary-glow transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 mb-6 leading-relaxed text-sm">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-muted/50 text-foreground/60 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Learn More */}
              <motion.div
                className="mt-4 pt-4 border-t border-border/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm text-primary font-medium">
                  Learn More →
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
