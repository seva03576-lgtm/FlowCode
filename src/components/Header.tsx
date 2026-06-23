import { useEffect, useState } from "react";

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    setMenuOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-3"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-black font-bold text-sm"
              style={{
                background:
                  "linear-gradient(135deg,#D4AF37,#F5D87A)",
              }}
            >
              FC
            </div>

            <span className="text-white font-bold text-2xl tracking-tight">
              FlowCode
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 rounded-xl text-sm transition-all duration-200 ${
                  active === link.href
                    ? "text-[#D4AF37] bg-[#D4AF37]/10"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("#contact")}
              className="hidden md:flex px-5 py-3 rounded-xl text-sm font-semibold text-black"
              style={{
                background:
                  "linear-gradient(135deg,#D4AF37,#F5D87A)",
              }}
            >
              Связаться
            </button>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="lg:hidden flex flex-col justify-center items-center w-12 h-12"
            >
              <span
                className={`block h-[2px] w-8 bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />

              <span
                className={`block h-[2px] w-8 bg-white my-[5px] transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-[2px] w-8 bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-20 left-0 right-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="mx-4 rounded-2xl border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl p-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-colors ${
                active === link.href
                  ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => scrollToSection("#contact")}
            className="w-full mt-2 py-3 rounded-xl text-sm font-semibold text-black"
            style={{
              background:
                "linear-gradient(135deg,#D4AF37,#F5D87A)",
            }}
          >
            Связаться
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
