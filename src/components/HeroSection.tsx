import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(hsl(185 70% 45% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(185 70% 45% / 0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
        >
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Reliable Engineering Services</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6"
        >
          Ensure Top Quality
          <br />
          <span className="text-gradient-primary">Engineering Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10"
        >
          NITTEC (PNG) LIMITED delivers professional Design, Engineering, Construction, 
          Repair and Maintenance Services across Papua New Guinea since 2014.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all animate-pulse-glow"
          >
            Book an Appointment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold text-lg hover:border-primary/50 hover:text-primary transition-all"
          >
            <Zap className="w-5 h-5" />
            Explore Services
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {[
            "IPA Registered",
            "IRC Compliant",
            "NICTA Licensed",
            "PPL Contractor #2308",
            "Fully Insured",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-muted-foreground text-sm">
              <CheckCircle className="w-4 h-4 text-primary" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
