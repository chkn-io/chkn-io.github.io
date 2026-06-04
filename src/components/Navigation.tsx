
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Work", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] z-[60] bg-emerald-500"
        style={{ width: progressWidth }}
      />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#0D1117]/90 backdrop-blur-xl border-b border-emerald-500/10 shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <span className="text-xl font-bold gradient-text">P</span>ercian <span className="text-xl font-bold gradient-text">B</span>orja
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={600}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`relative px-4 py-2 text-sm font-medium cursor-pointer rounded-lg transition-all duration-300 group ${
                    activeSection === item.to
                      ? "text-emerald-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-emerald-500 transition-all duration-300 origin-left ${
                    activeSection === item.to ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60"
                  }`} />
                </Link>
              ))}
              <Link
                to="contact"
                smooth={true}
                offset={-80}
                duration={600}
                className="ml-4 px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold rounded-lg cursor-pointer transition-all duration-300 btn-shine glow-emerald-sm"
              >
                Hire Me
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400 hover:text-white transition-colors p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-[#0D1117]/95 backdrop-blur-xl border-t border-white/8"
            >
              <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={600}
                        className="block text-gray-300 cursor-pointer hover:text-white transition-colors py-3 px-2 border-b border-gray-800/50 last:border-0"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;
