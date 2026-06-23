import { motion } from "framer-motion";
import { siteData } from "../data";

const Hero = () => (
<section
  id="hero"
  className="relative min-h-screen flex flex-col justify-center overflow-x-hidden bg-[#0a0a0a]"
>
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />

    <motion.div
      className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(212,175,55,0.12), transparent 70%)" }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 md:pt-32 pb-16 md:pb-20 w-full overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-[10px] sm:text-xs tracking-wider uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            Открыты для новых проектов
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[34px] sm:text-[46px] lg:text-[64px] font-bold text-white leading-[1] tracking-tight"
          >
            {siteData.hero.title}
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-[34px] sm:text-[46px] lg:text-[64px] font-bold leading-[1] tracking-tight mt-2 mb-5"            style={{
              background: "linear-gradient(135deg, #D4AF37 0%, #F5D87A 50%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {siteData.hero.titleAccent}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-md"
          >
            {siteData.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-white text-sm text-center border border-white/15 bg-white/5"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #F5D87A)",
                boxShadow: "0 0 40px rgba(212,175,55,0.25)",
              }}
            >
              {siteData.hero.cta}
            </motion.a>
            <motion.a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-white text-sm text-center border border-white/15 bg-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              {siteData.hero.secondary}
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div
              className="rounded-2xl p-8 border border-white/10"
              style={{
                background: "linear-gradient(135deg, rgba(212,175,55,0.06), rgba(10,10,10,0.8))",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-gray-600 text-xs font-mono ml-3">parser.py</span>
              </div>
              <div className="font-mono text-sm space-y-1.5 leading-relaxed">
                <div className="text-gray-600"># FlowCode — автоматизация</div>
                <div><span className="text-purple-400">import</span> <span className="text-green-400">asyncio</span></div>
                <div><span className="text-purple-400">from</span> <span className="text-green-400">playwright.async_api</span> <span className="text-purple-400">import</span> <span className="text-yellow-300">async_playwright</span></div>
                <div className="mt-2"><span className="text-blue-400">async def</span> <span className="text-yellow-300">collect</span><span className="text-white">(url: </span><span className="text-green-400">str</span><span className="text-white">):</span></div>
                <div className="pl-4"><span className="text-purple-400">async with</span> <span className="text-yellow-300">async_playwright</span><span className="text-white">() as p:</span></div>
                <div className="pl-8 text-gray-400">browser <span className="text-white">= </span><span className="text-purple-400">await</span> p.chromium.<span className="text-yellow-300">launch</span>()</div>
                <div className="pl-8 text-gray-400">page <span className="text-white">= </span><span className="text-purple-400">await</span> browser.<span className="text-yellow-300">new_page</span>()</div>
                <div className="pl-8 text-gray-400"><span className="text-purple-400">await</span> page.<span className="text-yellow-300">goto</span>(url)</div>
                <div className="pl-8"><span className="text-purple-400">return</span> <span className="text-purple-400">await</span> page.<span className="text-yellow-300">content</span>()</div>
                <motion.div
                  className="mt-2 text-[#D4AF37]"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity }}
                >▋</motion.div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-5 -left-5 px-5 py-3 rounded-xl border border-[#D4AF37]/20 bg-[#111]"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="text-2xl font-bold text-[#D4AF37]">40+</div>
              <div className="text-gray-600 text-xs">проектов</div>
            </motion.div>

            <motion.div
              className="absolute -top-5 -right-5 px-5 py-3 rounded-xl border border-[#D4AF37]/20 bg-[#111]"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-2xl font-bold text-[#D4AF37]">24/7</div>
              <div className="text-gray-600 text-xs">поддержка</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-24 pt-8 md:pt-10 border-t border-white/8"
      >
        {siteData.stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.08 }}
            className="text-center"
          >
            <div className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-1">{s.value}</div>
            <div className="text-gray-600 text-sm">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
