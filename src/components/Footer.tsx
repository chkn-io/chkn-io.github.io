
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Work", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/percianborja" },
    { name: "GitHub", url: "https://github.com/chkn-io" },
    { name: "Facebook", url: "https://www.facebook.com/percian15" },
    { name: "Instagram", url: "https://www.instagram.com/sirpborja/" },
  ];

  return (
    <footer className="relative bg-[#070B10] border-t border-gray-800/40 pt-14 pb-8">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <ScrollLink to="hero" smooth duration={500} className="cursor-pointer inline-block mb-4">
              <span className="text-2xl font-bold gradient-text">PB</span>
              <span className="text-white font-light text-xl ml-1">ercian Borja</span>
            </ScrollLink>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
              Full Stack Developer & Data Analyst based in the Philippines. Available for remote work worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth
                    offset={-80}
                    duration={600}
                    className="text-gray-500 hover:text-emerald-400 text-sm cursor-pointer transition-colors"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Connect</p>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-emerald-400 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:percian0296@gmail.com"
                  className="text-gray-500 hover:text-emerald-400 text-sm transition-colors"
                >
                  percian0296@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800/40">
          <p className="text-gray-600 text-xs">
            © {currentYear} Percian Borja. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="text-gray-600 hover:text-gray-400 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span className="text-gray-600 text-xs">Made with ♥ in Philippines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
