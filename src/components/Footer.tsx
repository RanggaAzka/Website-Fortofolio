import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/RanggaAzka", label: "GitHub", color: "hover:text-white" },
  { icon: Instagram, href: "https://www.instagram.com/ragasll/", label: "Instagram", color: "hover:text-pink-400" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              className="text-3xl font-bold text-gradient inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {"<Fortofolio />"}
            </motion.a>
            <p className="text-muted-foreground mb-6">
              Full Stack Developer crafting exceptional digital experiences 
              with passion and precision.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {["Home", "About", "Skills", "Projects", "Certificates", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>ranggaazka.pesat@gmail.com</p>
              <p>+62 858 9342 9106</p>
              <p>Bogor, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Made with <Heart className="text-red-500 animate-pulse" size={16} fill="currentColor" /> 
            by <span className="text-primary font-medium">Rangga Azka</span> © {currentYear}
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        {/* Code Comment */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-muted-foreground/50 font-mono">
            {"// Designed & Developed with ☕ and 💻"}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
