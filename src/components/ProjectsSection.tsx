import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight, Eye } from "lucide-react";
import XproImg from "@/assets/xpro-optimized.jpg";
import OsisImg from "@/assets/dashboard-osis-optimized.jpg";
import OnlyCarsImg from "@/assets/only-cars-optimized.jpg";
import WeddingImg from "@/assets/weddingg-optimized.jpg";



const projects = [
    {
    title: "Xpro Travel",
    description:
      "Expro Travel adalah website layanan perjalanan wisata yang dirancang untuk memberikan pengalaman liburan terbaik bagi keluarga, pasangan, maupun perjalanan pribadi.",
    image: XproImg,
    tags: ["HTML", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/RanggaAzka/Xpro-Travel-Page",
    featured: true,
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Dashboard OSIS",
    description:
      "Dashboard OSIS ini merupakan platform manajemen pemilihan ketua OSIS yang dirancang untuk menampilkan data pemilu secara jelas, terstruktur, dan mudah dipahami.",
    image: OsisImg,
    tags: ["HTML", "Bootstrap", "PHP"],
    githubUrl: "https://github.com/RanggaAzka/Dashboard-OSIS-Sertikom",
    featured: true,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Only Cars",
    description:
      "Only Cars adalah sebuah website katalog dan informasi otomotif yang menampilkan berbagai pilihan kendaraan dengan tampilan modern dan profesional.",
    image: OnlyCarsImg,
    tags: ["Laravel", "Bootstrap", "PHP"],
    githubUrl: "https://github.com/RanggaAzka/Only-Cars",
    featured: false,
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Wedding",
    description:
      "Website undangan pernikahan ini dirancang dengan tampilan elegan dan modern, menampilkan foto pasangan pengantin sebagai latar utama yang memberi kesan hangat dan personal.",
    image: WeddingImg,
    tags: ["HTML", "CSS", "Bootstrap"],
    githubUrl: "https://github.com/RanggaAzka/Wedding-Page",
    featured: false,
    color: "from-green-500/20 to-emerald-500/20",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="glass rounded-3xl overflow-hidden group cursor-pointer relative"
    >
      {/* Gradient Overlay on Hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}
      />

      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center gap-4"
        >
          {/* <motion.a
            href={project.liveUrl}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:text-primary transition-colors"
          >
            <Eye size={24} />
          </motion.a> */}
          <motion.a
            href={project.githubUrl}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:text-primary transition-colors"
          >
            <Github size={24} />
          </motion.a>
        </motion.div>

        {project.featured && (
          <motion.span
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider"
          >
            Featured
          </motion.span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 relative z-10" style={{ transform: "translateZ(50px)" }}>
        <div className="flex items-start justify-between mb-3">
          <h3 className="heading-md group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <motion.div
            animate={{ x: isHovered ? 5 : 0, y: isHovered ? -5 : 0 }}
            className="text-muted-foreground group-hover:text-primary"
          >
            <ArrowUpRight size={24} />
          </motion.div>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-secondary/80 text-muted-foreground font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

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
            {"<Projects />"}
          </motion.span>
          <h2 className="heading-lg mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my skills and passion for 
            creating impactful digital solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/RanggaAzka?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(175, 80%, 50%)" }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View All on GitHub
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
