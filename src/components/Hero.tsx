import { motion } from "framer-motion";
import { siteData } from "../data";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0a0a0a] overflow-x-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.25) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div
        className="absolute top-20 right-0 w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full blur-[80px] opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.8), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[38px] sm:text-[52px] lg:text-[68px] leading-[0.95] font-bold text-white"
            >
              {siteData.hero.title}
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[38px] sm:text-[52px] lg:text-[68px] leading-[0.95] font-bold mt-2"
              style={{
                background:
                  "linear-gradient(135deg,#D4AF37,#F5D87A,#D4AF37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {siteData.hero.titleAccent}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mt-6"
            >
              {siteData.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mt-8"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-center font-semibold text-black"
                style={{
                  background:
                    "linear-gradient(135deg,#D4AF37,#F5D87A)",
                }}
              >
                {siteData.hero.cta}
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-center font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              >
                {siteData.hero.secondary}
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div
              className="w-full max-w-[500px] rounded-3xl border border-white/10 p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.05), rgba(255,255,255,0.02))",
              }}
            >
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>

              <div className="space-y-4">
                <div className="h-3 rounded bg-white/10 w-2/3" />
                <div className="h-3 rounded bg-white/10 w-full" />
                <div className="h-3 rounded bg-white/10 w-4/5" />

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl border border-white/10 bg-black/20">
                    <div className="text-[#D4AF37] text-2xl font-bold">
                      40+
                    </div>
                    <div className="text-gray-500 text-sm">
                      проектов
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border border-white/10 bg-black/20">
                    <div className="text-[#D4AF37] text-2xl font-bold">
                      24/7
                    </div>
                    <div className="text-gray-500 text-sm">
                      поддержка
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16 md:mt-24 pt-8 border-t border-white/10">
          {siteData.stats.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#D4AF37]">
                {item.value}
              </div>
              <div className="text-gray-500 text-sm mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
