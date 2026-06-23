import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteData } from "../data";

const advIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
];

const Advantages = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="advantages" className="py-28 bg-[#070707] relative">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle at 75% 50%, rgba(212,175,55,1), transparent 55%)" }}
      />
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">Преимущества</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-3">Как я работаю</h2>
          <p className="text-gray-500 text-base max-w-lg">Прозрачно, поэтапно, с гарантией результата.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {siteData.advantages.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="group flex gap-5 p-7 rounded-2xl border border-white/8 bg-white/[0.015] hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.03] transition-all duration-300 cursor-default"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                {advIcons[i]}
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1.5 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {adv.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{adv.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;