import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Users, Zap, Globe } from "lucide-react";

const stats = [
  { number: "10+", label: "Projects" },
  { number: "20", label: "Repository" },
  { number: "16", label: "Years" },
  { number: "2", label: "Certificates" },
];

const values = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable and scalable code", color: "from-cyan-500 to-blue-500" },
  { icon: Palette, title: "Design First", desc: "Creating intuitive user experiences", color: "from-purple-500 to-pink-500" },
  { icon: Rocket, title: "Performance", desc: "Building fast and optimized apps", color: "from-orange-500 to-red-500" },
  { icon: Users, title: "Collaboration", desc: "Working effectively with teams", color: "from-green-500 to-emerald-500" },
  { icon: Zap, title: "Innovation", desc: "Embracing new technologies", color: "from-yellow-500 to-orange-500" },
  { icon: Globe, title: "Accessibility", desc: "Building for everyone", color: "from-blue-500 to-indigo-500" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="section-padding relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </motion.div>

      <div ref={ref} className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block text-primary font-mono text-sm mb-4 px-4 py-2 glass rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            {"<About />"}
          </motion.span>
          <h2 className="heading-lg mb-4">
            Passionate About Creating{" "}
            <span className="text-gradient">Digital Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Transforming complex problems into elegant, intuitive solutions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 text-center group hover:border-primary/50 transition-all duration-300"
            >
              <motion.span
                className="text-4xl block mb-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                {/* {stat.icon} */}
              </motion.span>
              <motion.div
                className="text-4xl font-bold text-gradient mb-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: "spring" }}
              >
                {stat.number}
              </motion.div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative Gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />

              <h3 className="heading-md mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl">👨‍💻</span>
                Who Am I?
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi! I'm a <span className="text-primary font-semibold">Rangga Azka Sutrisna</span> who
                  likes turning ideas into websites and digital products. I enjoy solving problems through code
                  and building things that people can actually use.
                </p>
                <p>
                  I started learning tech out of curiosity, and now it has become one of my biggest interests.
                  I love experimenting with new frameworks, polishing UI, and learning how things work behind the scenes.
                </p>
                <p>
                  Outside of coding, I like exploring new tech trends.
                </p>

              </div>

              {/* Code Block Decoration */}
              <motion.div
                className="mt-6 p-4 bg-background/50 rounded-xl font-mono text-sm overflow-hidden"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <div className="flex gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <code className="text-muted-foreground">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span> = {"{"}
                  <br />
                  {"  "}<span className="text-cyan-400">passion</span>: <span className="text-green-400">"coding"</span>,
                  <br />
                  {"  "}<span className="text-cyan-400">loves</span>: <span className="text-green-400">"building things"</span>,
                  <br />
                  {"  "}<span className="text-cyan-400">coffee</span>: <span className="text-orange-400">Infinity</span>
                  <br />
                  {"}"};
                </code>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-5 group cursor-pointer hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white" size={24} />
                </div>
                <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
