import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What areas of PNG does NITTEC operate in?",
    a: "We have offices in Port Moresby and Lae, with representatives in Mt. Hagen, Banz, Kundiawa, Wabag, Goroka, Kainantu, Madang, Vanimo, Kokopo and Wewak to reach all our clients.",
  },
  {
    q: "Is NITTEC a fully licensed contractor?",
    a: "Yes. We are IPA registered (1-118440), IRC compliant, NICTA licensed, and hold a PPL Electrical Contractors License (#2308/2023). We also carry full Public Liability and Workers Compensation insurance.",
  },
  {
    q: "What is NITTEC's safety record?",
    a: "We maintain 100% workplace safety and environmentally friendly policies. We have ZERO records of work-related injuries, accidents, or deaths.",
  },
  {
    q: "Does NITTEC employ PNG Nationals?",
    a: "Absolutely. We are 100% PNG-owned and operated. We continuously develop and empower young PNG Nationals in engineering, IT, and telecommunications industries. Employment is merit-based with gender equality considered.",
  },
  {
    q: "What types of engineering services do you provide?",
    a: "We cover Mechanical, Electrical, HVAC & Refrigeration, Structural Welding & Fabrication, Building Construction, IT Systems, Telecommunications, CCTV & Security, Electronics, Corporate Hire Cars, and Labour Hire services.",
  },
];

const FaqSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="relative z-10 max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card rounded-xl px-6 border border-border/50 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-foreground font-medium text-left hover:text-primary hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
