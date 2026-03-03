import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const CtaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('images/cta-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative z-10 max-w-5xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Meticulous Attention to Detail,
            <br />
            <span className="text-gradient-primary">So You Can Focus On What Matters</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Becoming a major partnership and key player to drive all services and maintenance 
            for our clients across Papua New Guinea.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              "PPL Licensed Contractor",
              "Full Insurance Coverage",
              "Gender Equality Workplace",
              "Environmental Friendly",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
