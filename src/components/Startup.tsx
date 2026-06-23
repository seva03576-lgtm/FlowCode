import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteData } from "../data";

const Startup = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="startup" className="py-28 bg-[#070707] relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] blur-[100px] pointer-events-none opacity-[0.06]"
        style={{ background: "radial-gradient(ellipse, #D4AF37, transparent)" }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">Дополнительно</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-3">
            Запускаем ваш продукт
          </h2>
          <p className="text-gray-500 text-base max-w-lg">
            Встраиваемся в любую среду. Стартап, бизнес или solo-проект.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {siteData.startup.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl border border-white/8 bg-white/[0.015] hover:border-[#D4AF37]/30 transition-all duration-300 relative"
            >
              {i < 3 && (
                <div className="hidden lg:block absolute top-9 left-full w-4 h-px bg-gradient-to-r from-[#D4AF37]/30 to-transparent z-10" />
              )}
              <div className="text-[#D4AF37]/30 font-mono text-4xl font-bold mb-4 group-hover:text-[#D4AF37]/50 transition-colors duration-300">
                {step.num}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="rounded-2xl border border-[#D4AF37]/15 p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-10"
          style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.04), rgba(0,0,0,0.3))" }}
        >
          <div className="flex-1">
            <h3 className="text-white font-bold text-xl mb-5">Что вы получаете</h3>
            <div className="flex flex-wrap gap-2">
              {siteData.startup.outputs.map((o, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 text-sm hover:border-[#D4AF37]/30 hover:text-white transition-all duration-300 cursor-default"
                >
                  {o.label}
                </motion.span>
              ))}
            </div>
          </div>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 px-8 py-4 rounded-xl font-semibold text-black text-sm whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #F5D87A)",
              boxShadow: "0 0 30px rgba(212,175,55,0.2)",
            }}
          >
            Обсудить идею
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Startup;