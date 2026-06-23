import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteData } from "../data";

const Technologies = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const techs = siteData.technologies;

  return (
    <section id="technologies" className="py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">Технологии</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-3">Стек технологий</h2>
          <p className="text-gray-500 text-base">
            Проверенные инструменты для надёжных решений.
          </p>
        </motion.div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }} />
        <motion.div
          className="flex gap-3 w-max"
          animate={{ x: ["0px", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...techs, ...techs].map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, y: -3 }}
              className="flex-shrink-0 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5 transition-all duration-300 cursor-default group"
            >
              <span className="text-gray-400 text-sm font-medium group-hover:text-[#D4AF37] transition-colors duration-300 whitespace-nowrap">
                {tech}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;