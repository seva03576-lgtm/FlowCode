import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Дополнительно", href: "#startup" },
  { label: "Технологии", href: "#technologies" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Кейсы", href: "#cases" },
  { label: "Контакты", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, menuOpen ? 300 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0a0a0a]/85 backdrop-blur-2xl border-b border-white/8" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <motion.button
            onClick={() => scrollTo("#hero")}
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-2.5"
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-black font-bold text-xs font-mono"
              style={{ background: "linear-gradient(135deg, #D4AF37, #F5D87A)" }}
            >
              FC
            </div>
            <span className="text-white font-bold font-mono tracking-tight">FlowCode</span>
          </motion.button>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-3.5 py-2 rounded-lg text-sm transition-colors duration-200 ${
                  active === link.href ? "text-[#D4AF37]" : "text-gray-500 hover:text-gray-200"
                }`}
              >
                {active === link.href && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => scrollTo("#contact")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:block px-5 py-2.5 rounded-xl font-semibold text-black text-sm"
              style={{ background: "linear-gradient(135deg, #D4AF37, #F5D87A)" }}
            >
              Связаться
            </motion.button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-5 h-[1.5px] bg-white origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-[1.5px] bg-white"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-5 h-[1.5px] bg-white origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, y: -10, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/8 lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                    active === link.href
                      ? "text-[#D4AF37] bg-[#D4AF37]/8"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => scrollTo("#contact")}
                className="mt-2 py-3 rounded-xl font-semibold text-black text-sm"
                style={{ background: "linear-gradient(135deg, #D4AF37, #F5D87A)" }}
              >
                Связаться
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;