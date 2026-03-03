import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Briefcase, GraduationCap, X } from "lucide-react";

const teamMembers = [
  {
    name: "Dickson Mangau",
    role: "HEF / Mechanical Workshop Manager",
    experience: "20 Years' Experience",
    department: "Mechanical",
    image: "images/team-dickson.jpg",
    bio: "Dickson Mangau started employment with NITTEC (PNG) LIMITED as its Mechanical Workshop Manager in March 2019 and had been a great inspiration to the company. Mechanics under his leadership had done exceptionally well as he plays an important role as a role model and also training others to be more efficient with tasking.",
    education: [
      "Bishop Brothers Engineering - Lae: 2000–2004 (Apprenticeship Certificate in Heavy Equipment Fitter)",
      "Mt. Hagen Technical College: 1999 (Certificate in Heavy Equipment Fitter)",
    ],
    workHistory: [
      "NITTEC (PNG) LIMITED — Mechanical Workshop Manager (March 2019 – Current)",
      "Mapai Transport — Senior Workshop Technician (November 2018)",
      "Hornibrooks NGI — Workshop Leading Hand (Feb 2016 – Sep 2018)",
    ],
    skills: ["Heavy Trucks Maintenance (Kenworth, Volvo, Nissan, Hino, Isuzu)", "Engine Rebuilds (Cummins, Isuzu, Volvo)", "Power Gensets Service", "Heavy Machineries (Forklifts, Excavators, Cranes)"],
  },
  {
    name: "Chris Meresi",
    role: "HEF / Mechanical Workshop Supervisor",
    experience: "8 Years' Experience",
    department: "Mechanical",
    image: "images/team-chris.jpg",
    bio: "Chris Meresi is a hardworking supervisor whom had proven himself to be an asset in handling mechanical duties. He is well trained and is capable of getting difficult task done on time.",
    education: [
      "Automotive Training Solutions: 2017 (Automotive Air Conditioning Certificate 2)",
      "Ok Tedi Mining Limited: 2010–2014 (Tradesman Certificate in Heavy Equipment Fitter)",
    ],
    workHistory: [
      "NITTEC (PNG) LIMITED — Heavy Equipment Fitter (March 2019 – Current)",
      "Ok Tedi Mining Limited — Tradesman HEF (2014–2018)",
      "Ok Tedi Mining Limited — Apprentice HEF (2010–2014)",
    ],
    skills: ["Heavy Equipment & Machineries Maintenance", "Light Vehicles Diesel/Petrol Service & Repair", "Small Engines Repair", "Auto Air Conditioning"],
  },
  {
    name: "Beneti Rupi",
    role: "Electrical / Motor Winding & HVACR Team Leader",
    experience: "40 Years' Experience",
    department: "Electrical",
    image: "images/team-beneti.jpg",
    bio: "Beneti Rupi is more matured and an over experienced Electrical employee that sees everything he does done more professionally and as it should be. His years' of experiences speaks for itself. A very committed and reliable asset to NITTEC (PNG) LIMITED.",
    education: [
      "NATTB: 1978–1979 (Electrical Trade Certificate)",
      "Malahang Technical School: 1976–1977 (Technical Training Certificate in Electrical)",
    ],
    workHistory: [
      "Ramu Agri Industries Limited — Senior Electrical Charge Hand (1982–2015)",
      "Brian Bell Contract — Electrician (1980–1981)",
      "PNG Forest Lae (Bulolo) — Electrical TA (1978–1979)",
    ],
    skills: ["Power Distributions, 415V Transformers up to 11KV", "Domestic Wirings & Housing Reticulations", "Power Generation, Diesel Generation, Switch Boards", "Industrial Complex Control System (PLC & DCS)", "Motor Winding"],
  },
  {
    name: "James Timbo",
    role: "Air Condition & Refrigeration Mechanic",
    experience: "15 Years' Experience",
    department: "HVACR",
    image: "images/team-james.jpg",
    bio: "James knows his capabilities as an experienced Refrigeration Mechanic and had been a constructive employee in his trade. His outcome with his tasking is impressive.",
    education: [
      "Malahang Technical School - Lae: 2010 (Certificate in Electrical)",
      "Youth Development Training – Unitech Lae: 2002 (Certificate in Refrigeration Mechanic)",
    ],
    workHistory: [
      "NITTEC (PNG) LIMITED — Refrigeration & Air Conditioning Technician (Jan 2019 – Current)",
      "HBS - Lae — Refrigeration & AC Technician (2013–2014, Best Employee of the Month Award)",
      "Kimbe Refrigeration — Refrigeration Mechanic (2006–2007)",
    ],
    skills: ["Installations", "Repair & Maintenance", "General Servicing", "Troubleshooting", "Gas Refilling of all makes and models"],
  },
  {
    name: "Neville Anonga",
    role: "Draftsman / Building Construction Team Leader",
    experience: "11 Years' Experience",
    department: "Construction",
    image: "images/team-neville.jpg",
    bio: "Neville had been in the trade for more than a decade and an experienced Draftsman employed in NITTEC (PNG) LIMITED. He is committed to his work and gets things done on time for his Building & Maintenance Team to execute.",
    education: [
      "PNG National Polytechnic Institution - Lae: 2006 (Certificate in Drafting)",
      "Lae Secondary School - Lae: 2005 (Grade 10 Certificate)",
    ],
    workHistory: [
      "NITTEC (PNG) LIMITED — Team Leader/Draftsman (Jan 2019 – Current)",
      "RAM Construction Limited — Architectural Draftsman/Foreman (2008 – March 2019)",
    ],
    skills: ["Architectural Drafting & Full Construction Detail Drawings", "Full Scope of Work & Bill of Material", "Construction Site Supervision", "Time/Estimates"],
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="team" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our People</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Company <span className="text-gradient-primary">Team Leaders</span>
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            These NITTEC (PNG) LIMITED Team Leaders are an elite team of well experienced tradesmen 
            who had developed experience over the years in various companies and also played key roles 
            in their trades respectively.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              onClick={() => setSelected(i)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group hover:border-primary/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-primary/20 border border-primary/30 text-primary text-xs font-semibold">
                    {member.department}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-display font-bold text-foreground text-sm">{member.name}</h4>
                <p className="text-xs text-primary mt-0.5">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{member.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img
                    src={teamMembers[selected].image}
                    alt={teamMembers[selected].name}
                    className="w-16 h-16 rounded-xl object-cover object-top"
                  />
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg">{teamMembers[selected].name}</h3>
                    <p className="text-primary text-sm">{teamMembers[selected].role}</p>
                    <p className="text-muted-foreground text-xs">{teamMembers[selected].experience}</p>
                  </div>
                </div>
                <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{teamMembers[selected].bio}</p>

              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <h4 className="font-display font-bold text-foreground text-sm">Education</h4>
                  </div>
                  <ul className="space-y-1">
                    {teamMembers[selected].education.map((e) => (
                      <li key={e} className="text-xs text-muted-foreground leading-relaxed">• {e}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <h4 className="font-display font-bold text-foreground text-sm">Work Experience</h4>
                  </div>
                  <ul className="space-y-1">
                    {teamMembers[selected].workHistory.map((w) => (
                      <li key={w} className="text-xs text-muted-foreground leading-relaxed">• {w}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-primary" />
                    <h4 className="font-display font-bold text-foreground text-sm">Key Skills</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers[selected].skills.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-xs text-primary">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;