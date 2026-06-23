import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { siteData } from "../data";

const Cases = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);
  const cases = siteData.cases;

  return (
    <section id="cases" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-[#D4AF37] text-sm uppercase tracking-widest font-semibold">
              Кейсы
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
              Реальные результаты
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActive(Math.max(0, active - 1))}
              disabled={active === 0}
              className="w-11 h-11 rounded-xl border border-white/20 text-white hover:border-[#D4AF37]/50 disabled:opacity-30 transition-all duration-200 flex items-center justify-center hover:bg-[#D4AF37]/10"
            >
              ←
            </button>
            <button
              onClick={() => setActive(Math.min(cases.length - 1, active + 1))}
              disabled={active === cases.length - 1}
              className="w-11 h-11 rounded-xl border border-white/20 text-white hover:border-[#D4AF37]/50 disabled:opacity-30 transition-all duration-200 flex items-center justify-center hover:bg-[#D4AF37]/10"
            >
              →
            </button>
          </div>
        </motion.div>

        <div className="flex gap-3 mb-8 flex-wrap">
          {cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${
                active === i
                  ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                  : "border-white/20 text-gray-400 hover:border-[#D4AF37]/40 hover:text-white"
              }`}
            >
              {c.tag}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-[#D4AF37]/20 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.05), rgba(0,0,0,0.5))",
          }}
        >
          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">
                  {cases[active].tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-6">
                  {cases[active].title}
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                      Задача
                    </p>
                    <p className="text-gray-300">{cases[active].problem}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                      Решение
                    </p>
                    <p className="text-gray-300">{cases[active].solution}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                      Результат
                    </p>
                    <p className="text-white font-medium">{cases[active].result}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 w-full">
                  {cases[active].metrics.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center p-4 md:p-5 rounded-2xl border border-white/10 bg-white/[0.03] min-h-[120px] flex flex-col justify-center"
                    >
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D4AF37] mb-1 break-words">
                        {m.value}
                      </div>
                      <div className="text-gray-500 text-[11px] sm:text-xs leading-tight break-words">
                        {m.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-2 mt-6">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === i ? "w-8 bg-[#D4AF37]" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
