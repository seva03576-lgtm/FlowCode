import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteData } from "../data";

const Technologies = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="technologies"
      className="py-24 bg-[#0a0a0a]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">
            Технологии
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-3">
            Стек технологий
          </h2>

          <p className="text-gray-500">
            Проверенные инструменты для надёжных решений.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {siteData.technologies.map((tech, index) => (
            <div
              key={index}
              className="px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 text-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
