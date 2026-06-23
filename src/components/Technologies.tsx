import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Next.js",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "REST API",
    ],
  },
  {
    title: "Базы данных",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "SQLite",
    ],
  },
  {
    title: "Интеграции",
    items: [
      "Telegram API",
      "OpenAI API",
      "EmailJS",
      "Webhooks",
    ],
  },
  {
    title: "DevOps",
    items: [
      "Docker",
      "Linux",
      "Nginx",
      "Vercel",
      "GitHub",
    ],
  },
  {
    title: "Автоматизация",
    items: [
      "Парсеры",
      "Боты",
      "CRM",
      "Скрипты",
      "Интеграции",
    ],
  },
];

const Technologies = () => {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="technologies"
      className="py-20 md:py-24 bg-[#0a0a0a]"
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

          <p className="text-gray-500 max-w-2xl">
            Используем современные технологии и проверенные инструменты для
            разработки надёжных веб-сервисов, автоматизации процессов и
            интеграций.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#D4AF37]/20 transition-all duration-300"
            >
              <h3 className="text-[#D4AF37] text-lg font-semibold mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/5 text-gray-300 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
