import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Radio, Wifi, Zap, Wrench, Sun, Cpu,
  Building, ShieldCheck, Car, HardHat, Server, Snowflake,
} from "lucide-react";

const services = [
  { icon: Radio, title: "BTS Tower Services", desc: "Base Transceiver Station refueling, service and maintenance across PNG." },
  { icon: Zap, title: "Electrical Engineering", desc: "Powerline reticulation, domestic, industrial & commercial wiring, ATS design and installation." },
  { icon: Snowflake, title: "HVAC & Refrigeration", desc: "Air conditioning and refrigeration installation and maintenance services." },
  { icon: Wrench, title: "Mechanical Services", desc: "Generator installation, maintenance, repair, refueling and mechanical servicing." },
  { icon: Sun, title: "Solar & Satellite", desc: "Solar systems installations, satellite and microwave systems commissioning & monitoring." },
  { icon: Wifi, title: "Telecommunications", desc: "PSTN telephony, VoIP, tower construction, cabling, racking and network administration." },
  { icon: Cpu, title: "IT Systems & Security", desc: "CCTV, surveillance, access control, system administration and helpdesk management." },
  { icon: Building, title: "Construction", desc: "Building design, construction & maintenance including shipping container homes and offices." },
  { icon: Server, title: "IT Solutions", desc: "Corporate network setup, disaster recovery, application development and systems integration." },
  { icon: ShieldCheck, title: "Security Services", desc: "Asset protection, armed security services, monitoring and access control systems." },
  { icon: Car, title: "Corporate Hire Cars", desc: "Professional corporate hire car services for business transportation needs." },
  { icon: HardHat, title: "Labour Hire", desc: "Skilled labour hire and recruitment agency services with merit-based employment." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Comprehensive engineering and technology solutions across Papua New Guinea
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card rounded-2xl p-6 group hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-primary transition-all duration-300">
                  <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display font-bold text-foreground text-sm mt-0.5">{service.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
