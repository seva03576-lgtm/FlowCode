import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { siteData } from "../data";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [status, setStatus] = useState<
  "idle" |
  "loading" |
  "sent" |
  "error" |
  "spam" |
  "short"
>("idle");
  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (status === "loading") return;

  const honey = (
    document.querySelector('input[name="_honey"]') as HTMLInputElement
  )?.value;

  if (honey) return;

  const lastSubmit = localStorage.getItem("flowcode_last_submit");

if (lastSubmit) {
  const diff = Date.now() - Number(lastSubmit);

  if (diff < 24 * 60 * 60 * 1000) {
    setStatus("spam");

    setTimeout(() => {
      setStatus("idle");
    }, 5000);

    return;
  }
}

if (form.message.trim().length < 10) {
  setStatus("short");

  setTimeout(() => {
    setStatus("idle");
  }, 5000);

  return;
}

if (form.message.trim().length < 10) {
  setStatus("short");

  setTimeout(() => {
    setStatus("idle");
  }, 5000);

  return;
}

  setStatus("loading");

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        contact: form.contact,
        message: form.message,
      },
      PUBLIC_KEY
    );

    localStorage.setItem(
      "flowcode_last_submit",
      Date.now().toString()
    );

    setStatus("sent");

    setForm({
      name: "",
      contact: "",
      message: "",
    });

    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  } catch (error) {
    console.error(error);

    setStatus("error");

    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  }
};

const btnLabel = {
  idle: "Отправить заявку",
  loading: "Отправляем...",
  sent: "Отправлено",
  error: "Ошибка",
  spam: "Отправить заявку",
  short: "Отправить заявку",
}[status];

const btnStyle = {
  idle: "linear-gradient(135deg, #D4AF37, #F5D87A)",
  loading: "linear-gradient(135deg, #a0845a, #c9a84c)",
  sent: "linear-gradient(135deg, #4ade80, #22c55e)",
  error: "linear-gradient(135deg, #f87171, #ef4444)",
  spam: "linear-gradient(135deg, #f59e0b, #eab308)",
  short: "linear-gradient(135deg, #f59e0b, #eab308)",
}[status];

  return (
    <section id="contact" className="py-28 bg-[#070707] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 70%, rgba(212,175,55,1), transparent 55%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold">
              Контакты
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-5">
              Обсудим задачу
            </h2>
            <p className="text-gray-500 text-base mb-10 leading-relaxed max-w-sm">
              Расскажите что нужно — разберём задачу, предложим решение.
            </p>

            <div className="space-y-3">
              <motion.a
                href={`https://t.me/${siteData.contact.telegram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/8 bg-white/[0.015] hover:border-[#D4AF37]/25 transition-all duration-300 cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-[#2CA5E0]/10 border border-[#2CA5E0]/20 flex items-center justify-center text-[#2CA5E0]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.12 14.063l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.696.523z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-600 text-xs mb-0.5">Telegram</div>
                  <div className="text-white text-sm font-medium">
                    {siteData.contact.telegram}
                  </div>
                </div>
              </motion.a>

              <motion.a
                href={`mailto:${siteData.contact.email}`}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/8 bg-white/[0.015] hover:border-[#D4AF37]/25 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-600 text-xs mb-0.5">Email</div>
                  <div className="text-white text-sm font-medium">
                    {siteData.contact.email}
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl border border-white/8 bg-white/[0.015] space-y-4"
            >
              <div>
                <label className="text-gray-600 text-xs uppercase tracking-wider block mb-1.5">
                  Имя
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] text-white placeholder-gray-700 focus:outline-none focus:border-[#D4AF37]/40 focus:bg-[#D4AF37]/[0.03] transition-all duration-300 text-sm"
                />
              </div>

              <div>
                <label className="text-gray-600 text-xs uppercase tracking-wider block mb-1.5">
                  Telegram / Телефон
                </label>
                <input
                  type="text"
                  required
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  placeholder="@username или +7..."
                  className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] text-white placeholder-gray-700 focus:outline-none focus:border-[#D4AF37]/40 focus:bg-[#D4AF37]/[0.03] transition-all duration-300 text-sm"
                />
              </div>

              <div>
                <label className="text-gray-600 text-xs uppercase tracking-wider block mb-1.5">
                  Описание задачи
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  placeholder="Опишите задачу..."
                  className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] text-white placeholder-gray-700 focus:outline-none focus:border-[#D4AF37]/40 focus:bg-[#D4AF37]/[0.03] transition-all duration-300 text-sm resize-none"
                />
              </div>

              <input
                type="text"
                name="_honey"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={status === "idle" ? { scale: 1.02 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
                className="w-full py-4 rounded-xl font-semibold text-black text-sm transition-all duration-500 disabled:cursor-not-allowed"
                style={{
                  background: btnStyle,
                  boxShadow: "0 0 30px rgba(212,175,55,0.15)",
                }}
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      className="block w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                    />
                    Отправляем...
                  </span>
                ) : (
                  btnLabel
                )}
              </motion.button>

              {status === "sent" && (
               <motion.p
                 initial={{ opacity: 0, y: 6 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="text-green-400 text-xs text-center"
               >
                 Заявка отправлена. Скоро с вами свяжемся.
               </motion.p>
              )}
              {status === "short" && (
               <motion.p
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="text-red-400 text-sm text-center"
               >
                 Опишите задачу минимум в 10 символов
               </motion.p>
              )}

              {status === "spam" && (
               <motion.p
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="text-yellow-400 text-sm text-center"
               >
                 Заявка уже была отправлена. Повторная отправка доступна через 24 часа.
               </motion.p>
              )}

              {status === "error" && (
               <motion.p
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="text-red-400 text-sm text-center"
               >
                 Ошибка отправки. Попробуйте позже.
               </motion.p>
              )}

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;