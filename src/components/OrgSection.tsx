import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Crown, Users, Star, Award } from "lucide-react";

const leadershipValues = [
  "Lead By Example", "Passion", "Be Organized", "Delegate",
  "Take Ownership and Responsibility", "Communicate Effectively",
  "Be Brave and Honest", "Great Listener", "Know Your People", "Be a Follower",
];

const managementStyles = [
  "Directive", "Authoritative", "Affiliative", "Participative",
  "Pacesetting", "Coaching", "Training and Development",
];

const OrgSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Organization</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Our <span className="text-gradient-primary">Structure & Leadership</span>
          </h2>
        </motion.div>

        {/* Org Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-col items-center gap-4">
            {/* Managing Director */}
            <div className="glass-card rounded-xl p-4 px-8 glow-border text-center">
              <div className="flex items-center gap-2 justify-center mb-1">
                <Crown className="w-4 h-4 text-primary" />
                <p className="font-display font-bold text-foreground text-sm">Managing Director</p>
              </div>
              <p className="text-xs text-primary">Mr. Cornelius YARA</p>
              <p className="text-xs text-muted-foreground">Director & Chief Executive Officer</p>
            </div>

            {/* Connector */}
            <div className="w-px h-8 bg-border" />

            {/* Three managers */}
            <div className="grid sm:grid-cols-3 gap-4 w-full max-w-3xl">
              {[
                { title: "Regional Engineering & Planning Manager", sub: "Design & Implement Support Staffs" },
                { title: "Regional Corporate Services Manager", sub: "Admin & Accounts Staffs" },
                { title: "Regional Technical Systems Manager", sub: "Technical Support Staffs" },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-xl p-4 text-center">
                  <p className="font-display font-bold text-foreground text-xs mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Leadership & Management */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold text-foreground">Business & Leadership Values</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Our leadership values are embraced amongst all employees' contribution and quality in work 
              to achieve targeted results and deadlines.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {leadershipValues.map((val, i) => (
                <div key={val} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-bold text-xs">{i + 1}.</span>
                  {val}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="font-display font-bold text-foreground">Management Styles</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              We manage our team under these seven (7) management styles for business success:
            </p>
            <div className="space-y-2">
              {managementStyles.map((style, i) => (
                <div key={style} className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors">
                  <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">{i + 1}</span>
                  <span className="text-sm text-foreground">{style}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrgSection;
