import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Rocket, Heart, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Providing professional Design, Engineering, Construction, Repair and Maintenance Services at high quality guided by Principles that is world recognized Standards and Safety Procedures at a very reasonable pricing and adding more VALUE to our clients.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "We are committed to providing and building world class products and services in Papua New Guinea that exceed customer's expectations for quality, value and reliability.",
  },
  {
    icon: Rocket,
    title: "Our Aim",
    text: "Making technology become a part of peoples' livelihood, making it always available, convenient and affordable in Papua New Guinea.",
  },
  {
    icon: Heart,
    title: "Our Dedication",
    text: "To employ, train, develop and certify highly skilled PNG Nationals to meet world standards of practices that is globally recognized.",
  },
  {
    icon: TrendingUp,
    title: "Our Future",
    text: "Becoming major Partnership and a key player to drive all services and maintenances for our clients to meet their targets in their products and services deliveries in Papua New Guinea.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Company <span className="text-gradient-primary">Introduction</span>
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            NITTEC (PNG) LIMITED was registered with the Papua New Guinea Investment Promotion Authority (IPA) 
            on April 2, 2014. The company specializes in all levels of Design, Engineering, Construction, 
            Repair, Service and Maintenance works — from Mechanical & Electrical Engineering to IT Systems, 
            Telecommunications, CCTV, and Security Services.
          </p>
        </motion.div>

        {/* About image + history */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src="images/about-bg.jpg"
              alt="NITTEC Engineering Team"
              className="w-full h-full object-cover min-h-[300px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-card rounded-xl p-4">
                <p className="text-primary font-display font-bold text-2xl">Since 2014</p>
                <p className="text-muted-foreground text-sm">Proudly serving Papua New Guinea</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Company History</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Niugini Information Technology and Telecommunications Engineering Consultants (NITTEC) came into 
              business on April 16, 2014. On May 18, 2018 the business was incorporated as NITTEC (PNG) LIMITED 
              (1-118440) with Director(s) and Shareholder(s).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The experts driving our dedicated team are all PNG Nationals with Engineering, Management and 
              Technical backgrounds with proven records of experience in many projects and industries 
              throughout PNG and Internationally.
            </p>
            <div className="flex items-center gap-3 mt-2 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-primary-foreground text-lg">0</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">ZERO Safety Incidents</p>
                <p className="text-sm text-muted-foreground">100% workplace safety record — no injuries, accidents, or deaths</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
