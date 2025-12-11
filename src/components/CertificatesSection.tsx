import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, Calendar, Building2, X, ChevronLeft, ChevronRight } from "lucide-react";

const certificates = [
  {
    title: "Sertifikat Kompetensi",
    issuer: "Kreasi Media",
    date: "Desember 2024",
    credentialId: "1",
    image: "src/assets/sertif-1.jpg",
    description: "Sebuah website Travel.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Sertifikat Kompetensi",
    issuer: "Ginvo Studio",
    date: "June 2025",
    credentialId: "2",
    image: "src/assets/sertif-2.jpg",
    description: "Sebuah website sistem pemilihan ketua osis.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Soon",
    issuer: "Soon",
    date: "Soon",
    credentialId: "Soon",
    image: "src/assets/coming-soon-background-with-focus-light-effect-design_1017-27277.avif",
    description: "unknown.",
    color: "from-blue-600 to-indigo-500",
  },
  {
    title: "Soon",
    issuer: "Soon",
    date: "Soon",
    credentialId: "Soon",
    image: "src/assets/coming-soon-background-with-focus-light-effect-design_1017-27277.avif",
    description: "unknown.",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Soon",
    issuer: "Soon",
    date: "Soon",
    credentialId: "Soon",
    image: "src/assets/coming-soon-background-with-focus-light-effect-design_1017-27277.avif",
    description: "unknown.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Soon",
    issuer: "Soon",
    date: "Soon",
    credentialId: "Soon",
    image: "src/assets/coming-soon-background-with-focus-light-effect-design_1017-27277.avif",
    description: "unknown.",
    color: "from-cyan-500 to-teal-500",
  },
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const navigateCert = (direction: "prev" | "next") => {
    if (selectedCert === null) return;
    if (direction === "prev") {
      setSelectedCert(selectedCert === 0 ? certificates.length - 1 : selectedCert - 1);
    } else {
      setSelectedCert(selectedCert === certificates.length - 1 ? 0 : selectedCert + 1);
    }
  };

  return (
    <section id="certificates" className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.08)_0%,transparent_50%)]" />

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
            {"<Certificates />"}
          </motion.span>
          <h2 className="heading-lg mb-4">
            <span className="text-gradient">Certificate</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Credentials that validate my expertise and commitment to excellence.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedCert(index)}
              className="glass rounded-2xl overflow-hidden cursor-pointer group relative"
            >
              {/* Gradient Border on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                
                {/* Award Badge */}
                <motion.div
                  className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="text-white" size={24} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5 relative z-10">
                <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Building2 size={14} />
                  <span>{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCert !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-xl"
              onClick={() => setSelectedCert(null)}
            >
              {/* Navigation Arrows */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={(e) => { e.stopPropagation(); navigateCert("prev"); }}
                className="absolute left-4 md:left-8 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors z-10"
              >
                <ChevronLeft size={24} />
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={(e) => { e.stopPropagation(); navigateCert("next"); }}
                className="absolute right-4 md:right-8 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors z-10"
              >
                <ChevronRight size={24} />
              </motion.button>

              <motion.div
                key={selectedCert}
                initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                transition={{ type: "spring", damping: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-3xl max-w-2xl w-full overflow-hidden relative"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${certificates[selectedCert].color} opacity-10`} />

                <div className="relative aspect-video">
                  <img
                    src={certificates[selectedCert].image}
                    alt={certificates[selectedCert].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-8 relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${certificates[selectedCert].color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Award className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="heading-md mb-1">{certificates[selectedCert].title}</h3>
                      <p className="text-muted-foreground text-lg">{certificates[selectedCert].issuer}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-lg">
                    {certificates[selectedCert].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg">
                      <Calendar size={16} className="text-primary" />
                      <span>Issued: {certificates[selectedCert].date}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg">
                      <span className="text-primary font-mono">ID:</span>
                      <span>{certificates[selectedCert].credentialId}</span>
                    </div>
                  </div>

                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Verify Credential
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CertificatesSection;
