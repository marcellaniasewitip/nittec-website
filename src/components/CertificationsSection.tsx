import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Award, Scale, FileCheck } from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    body: "Certified by BQSR Quality Assurance — covering Civil, Electrical & Mechanical Engineering, HVACR, Metal Works & Fabrication, Building Architecture, IT & Telecommunications, CCTV, Security, Logistics, and Labour Hire services.",
    cert: "BQSR13838",
  },
  {
    icon: Award,
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety",
    body: "Certified by BQSR Quality Assurance — ensuring world-class occupational health and safety management across all NITTEC operations and services.",
    cert: "BQSR13839",
  },
  {
    icon: Scale,
    title: "Full Insurance Coverage",
    subtitle: "Workers Compensation & Public Liability",
    body: "Insured by Alpha Insurance Limited — Workers Compensation (WC00021460) and General & Products Liability (PL00021461). K100,000 per occurrence coverage across all PNG operations.",
  },
  {
    icon: FileCheck,
    title: "PPL Electrical License",
    subtitle: "Licensed Electrical Contractor",
    body: "PNG Power Limited Electrical Contractors License #2308/2023. Fully compliant with IPA, IRC, NICTA, and all regulatory authorities in Papua New Guinea.",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Compliance</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Certifications & <span className="text-gradient-primary">Insurance</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            NITTEC (PNG) LIMITED maintains international certifications and comprehensive insurance coverage
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <cert.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-foreground">{cert.title}</h4>
                  <p className="text-primary text-sm font-medium">{cert.subtitle}</p>
                  {cert.cert && <p className="text-xs text-muted-foreground mt-0.5">Certificate: {cert.cert}</p>}
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{cert.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
