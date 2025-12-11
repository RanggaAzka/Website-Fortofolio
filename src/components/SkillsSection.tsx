import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-cyan-500 to-blue-500",
    skills: [
      // { name: "React", icon: "" },
      // { name: "Next.js", icon: "" },
      // { name: "TypeScript", icon: "" },
      { name: "JavaScript", icon: "" },
      { name: "HTML", icon: "" },
      { name: "CSS", icon: "" },
      { name: "Tailwind", icon: "" },
      { name: "Bootstrap", icon: "" },
    ],
  },
  {
    title: "Backend",
    icon: "",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "PHP", icon: "" },
      { name: "My Sql", icon: "" },
      // { name: "Express", icon: "" },
      // { name: "Python", icon: "" },
      // { name: "Django", icon: "" },
      // { name: "PostgreSQL", icon: "" },
      // { name: "MongoDB", icon: "" },
      // { name: "REST API", icon: "" },
      // { name: "GraphQL", icon: "" },
      // { name: "Node.js", icon: "" },
    ],
  },
  {
    title: "Tools",
    icon: "",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Vercel", icon: "" },
      { name: "Figma", icon: "" },
      { name: "VS Code", icon: "" },
      { name: "Git", icon: "" },
      // { name: "Docker", icon: "" },
      // { name: "AWS", icon: "" },
      // { name: "Firebase", icon: "" },
      // { name: "Linux", icon: "" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Problem Solving", icon: "" },
      { name: "Leadership", icon: "" },
      { name: "Communication", icon: "" },
      { name: "Agile/Scrum", icon: "" },
      { name: "Management", icon: "" },
      { name: "Creativity", icon: "" },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08)_0%,transparent_50%)]" />

      <div ref={ref} className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-primary font-mono text-sm mb-4 px-4 py-2 glass rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            {"<Skills />"}
          </motion.span>
          <h2 className="heading-lg mb-4">
            Progaming <span className="text-gradient">Skils</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit of modern technologies and frameworks.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all duration-300 ${
                activeCategory === index
                  ? "glass border-primary/50 text-primary shadow-lg shadow-primary/20"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skillCategories[activeCategory].color} flex items-center justify-center text-3xl`}>
              {skillCategories[activeCategory].icon}
            </div>
            <div>
              <h3 className="heading-md">{skillCategories[activeCategory].title}</h3>
              <p className="text-muted-foreground text-sm">
                {skillCategories[activeCategory].skills.length} technologies
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 10px 30px -10px hsl(175, 80%, 50%)"
                }}
                className="group bg-secondary/50 rounded-xl p-4 flex items-center gap-3 cursor-pointer hover:bg-secondary transition-all duration-300"
              >
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </span>
                <span className="font-medium group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Tech Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 overflow-hidden relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-8 whitespace-nowrap">
                {[" Html", "CSS", " Tailwind", " Bootstrap", " JavaScript", " PHP", " MY Sql",].map((tech) => (
                  <span key={tech} className="text-muted-foreground/40 text-xl font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
