import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-background to-gradient-blue/5 py-16 overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Top contact and CTA */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-16">
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-8 md:mb-0"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gradient-blue via-gradient-violet to-gradient-teal bg-clip-text text-transparent">
              Ready to Shape the Future?
            </h3>
            <p className="text-lg text-foreground/70 max-w-md">
              Join us in creating tomorrow's solutions today. Let’s innovate together.
            </p>
          </motion.div>

          {/* Contact info */}
          <div className="text-center md:text-right space-y-1 text-sm text-foreground/60">
            <p>Email: <a href="mailto:admin@solvexa.co.in" className="hover:text-primary transition-colors">admin@solvexa.co.in</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-primary transition-colors">+91 97654321</a></p>
            <p>Address:<b> 24/8A, PonniammamMeduBlock Veerapandian, Chennai - 600110, Tamil Nadu.</b></p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
        <motion.a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfq83Y4emYXoAfPJboyDFoTD5Kjup0V9GVbyQsHmlQ7V315PA/viewform?usp=dialog"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-gradient-blue via-gradient-violet to-gradient-teal rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
        >
        Get In Touch
        </motion.a>
        </div>

        {/* Footer links */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 text-sm">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-4">About Solvexa</h4>
            <p className="text-foreground/60 leading-relaxed">
              Innovating the future through cutting-edge technology solutions and visionary research.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-semibold text-foreground mb-4">Company</h5>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'News', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h5 className="font-semibold text-foreground mb-4">Connect</h5>
            <ul className="space-y-2">
              {['LinkedIn', 'Twitter', 'GitHub', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/50">
            <p>© 2024 Solvexa. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a key={item} href="#" className="hover:text-primary transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
