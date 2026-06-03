
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Website {
  title: string;
  url: string;
  description: string;
  image: string;
}

interface WebsiteCardProps {
  website: Website;
  index: number;
}

const WebsiteCard = ({ website, index }: WebsiteCardProps) => {
  const displayUrl = website.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group w-full"
    >
      <a
        href={website.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Browser frame */}
        <div className="rounded-2xl overflow-hidden border border-gray-700/40 group-hover:border-emerald-500/50 transition-all duration-500 shadow-lg group-hover:shadow-emerald-500/15 group-hover:shadow-2xl">
          {/* Browser chrome bar */}
          <div className="bg-gray-900/95 px-4 py-3 flex items-center gap-3 border-b border-gray-700/50">
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-500/80 group-hover:bg-red-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 group-hover:bg-green-500 transition-colors" />
            </div>
            {/* URL bar */}
            <div className="flex-1 flex items-center gap-2 bg-gray-800/70 rounded-full px-3 py-1.5 min-w-0">
              <div className="w-3 h-3 shrink-0 text-emerald-500">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <span className="text-xs text-gray-400 truncate font-mono">{displayUrl}</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-emerald-400 transition-colors shrink-0" />
          </div>

          {/* Screenshot area */}
          <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
            <img
              src={website.image}
              alt={website.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#0D1117]/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center gap-4">
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={false}
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center backdrop-blur-sm">
                  <ExternalLink className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-white font-bold text-lg tracking-wide">Visit Site</span>
                <span className="text-emerald-400 text-xs font-mono">{displayUrl}</span>
              </motion.div>
            </div>
          </div>

          {/* Card footer */}
          <div className="bg-gray-900/80 px-5 py-4 border-t border-gray-700/40">
            <h3 className="text-white font-bold text-base group-hover:text-emerald-400 transition-colors duration-300 truncate">
              {website.title}
            </h3>
            <p className="text-gray-500 text-xs mt-1 line-clamp-1">{website.description}</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default WebsiteCard;
