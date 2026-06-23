import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-[#050505] border-t border-white/8 py-8">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <motion.div whileHover={{ scale: 1.04 }} className="flex items-center gap-2">
        <div
          className="w-6 h-6 rounded-md flex items-center justify-center text-black font-bold text-[10px] font-mono"
          style={{ background: "linear-gradient(135deg, #D4AF37, #F5D87A)" }}
        >
          FC
        </div>
        <span className="text-white font-bold font-mono text-sm tracking-tight">FlowCode</span>
      </motion.div>
      <p className="text-gray-700 text-xs">FlowCode</p>
      <div className="flex items-center gap-5">
        <span className="text-gray-700 text-xs">Telegram</span>
        <a href="mailto:rithvgu@gmail.com" className="text-gray-700 hover:text-[#D4AF37] transition-colors duration-300 text-xs">
          rithvgu@gmail.com
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;