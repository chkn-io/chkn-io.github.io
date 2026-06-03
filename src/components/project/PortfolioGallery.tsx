import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, ShoppingCart, Globe, Figma, BarChart3 } from "lucide-react";
import { projects, websites, webDesigns, analytics } from "./ProjectData";

// ─── Types ────────────────────────────────────────────────────────────────────

type FilterKey = "all" | "webapp" | "ecommerce" | "website" | "design" | "analytics";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  url?: string;
  filter: FilterKey;
  badge: string;
  badgeClass: string;
  skills?: string[];
}

// ─── Data normalisation (runs once at module level) ───────────────────────────

const GALLERY_ITEMS: GalleryItem[] = [
  ...projects.map((p, i): GalleryItem => ({
    id: `webapp-${i}`,
    title: p.title,
    description: p.description,
    image: p.image,
    filter: "webapp",
    badge: "Web App",
    badgeClass: "bg-white/8 text-white/70 border-white/15",
    skills: p.skills,
  })),

  ...websites
    .filter(w => w.category === "E-commerce" || w.category === "Funnel Page")
    .map((w, i): GalleryItem => ({
      id: `ecom-${i}`,
      title: w.title,
      description: w.description,
      image: w.image,
      url: w.url,
      filter: "ecommerce",
      badge: "E-commerce",
      badgeClass: "bg-white/8 text-white/70 border-white/15",
    })),

  ...websites
    .filter(w => w.category !== "E-commerce" && w.category !== "Funnel Page")
    .map((w, i): GalleryItem => ({
      id: `site-${i}`,
      title: w.title,
      description: w.description,
      image: w.image,
      url: w.url,
      filter: "website",
      badge: "Website",
      badgeClass: "bg-white/8 text-white/70 border-white/15",
    })),

  ...webDesigns.map((d, i): GalleryItem => ({
    id: `design-${i}`,
    title: d.title,
    description: d.description,
    image: d.image,
    url: d.url,
    filter: "design",
    badge: "UI Design",
    badgeClass: "bg-white/8 text-white/70 border-white/15",
  })),

  ...analytics.map((a, i): GalleryItem => ({
    id: `analytics-${i}`,
    title: a.title,
    description: a.description,
    image: a.image,
    url: a.url,
    filter: "analytics",
    badge: "Analytics",
    badgeClass: "bg-white/8 text-white/70 border-white/15",
  })),
];

// ─── Filter tabs config ────────────────────────────────────────────────────────

const FILTERS: { key: FilterKey; label: string; Icon: React.ElementType }[] = [
  { key: "all",       label: "All",        Icon: Globe },
  { key: "webapp",    label: "Web Apps",   Icon: Code2 },
  { key: "ecommerce", label: "E-commerce", Icon: ShoppingCart },
  { key: "website",   label: "Websites",   Icon: Globe },
  { key: "design",    label: "UI Design",  Icon: Figma },
  { key: "analytics", label: "Analytics",  Icon: BarChart3 },
];

// ─── Card component ───────────────────────────────────────────────────────────

const GalleryCard = ({ item, index }: { item: GalleryItem; index: number }) => {
  const inner = (
      <div className="relative w-full h-full overflow-hidden rounded-xl border border-white/6 group-hover:border-white/20 transition-colors duration-400">
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
        loading="lazy"
      />

      {/* Always-visible gradient + title */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/95 via-[#0D1117]/25 to-transparent pointer-events-none" />

      {/* Badge — top left */}
      <div className="absolute top-3 left-3">
        <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-semibold tracking-widest uppercase border ${item.badgeClass} backdrop-blur-sm`}>
          {item.badge}
        </span>
      </div>

      {/* External link icon — top right (only if has URL) */}
      {item.url && (
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <ExternalLink className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      )}

      {/* Title always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-bold text-sm leading-tight line-clamp-2 group-hover:text-emerald-400 transition-colors duration-300">
          {item.title}
        </h3>

        {/* Description — slides up on hover */}
        <div className="max-h-0 overflow-hidden group-hover:max-h-16 transition-all duration-500">
          <p className="text-gray-400 text-xs leading-relaxed mt-1.5 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100">
            {item.description}
          </p>
        </div>

        {/* Skills (web apps only) */}
        {item.skills && (
          <div className="flex flex-wrap gap-1 mt-2 max-h-0 overflow-hidden group-hover:max-h-10 transition-all duration-500">
            {item.skills.slice(0, 3).map(s => (
              <span key={s} className="px-1.5 py-0.5 text-[9px] font-semibold bg-white/10 text-white/60 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-150">
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const cardClasses = "group relative w-full aspect-[4/3] cursor-pointer";

  return item.url ? (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClasses}
    >
      {inner}
    </a>
  ) : (
    <div className={cardClasses}>{inner}</div>
  );
};

// ─── Main gallery ─────────────────────────────────────────────────────────────

const PortfolioGallery = () => {
  const [active, setActive] = useState<FilterKey>("all");

  const counts = useMemo(() => {
    const c: Record<FilterKey, number> = {
      all: GALLERY_ITEMS.length,
      webapp: 0, ecommerce: 0, website: 0, design: 0, analytics: 0,
    };
    GALLERY_ITEMS.forEach(it => c[it.filter]++);
    return c;
  }, []);

  const filtered = useMemo(
    () => active === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(it => it.filter === active),
    [active]
  );

  return (
    <div>
      {/* ── Filter tabs ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {FILTERS.map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              active === key
                ? "bg-white text-gray-900 shadow-md scale-105 font-semibold"
                : "bg-gray-900/70 text-gray-500 hover:text-gray-200 hover:bg-gray-800/70 border border-gray-700/50"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
            <span className={`text-[11px] rounded px-1.5 py-0.5 font-bold tabular-nums ${
              active === key ? "bg-gray-200 text-gray-700" : "bg-gray-800 text-gray-500"
            }`}>
              {counts[key]}
            </span>
          </button>
        ))}
      </motion.div>

      {/* ── Gallery grid ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: Math.min(i * 0.04, 0.6),
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <GalleryCard item={item} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ── Empty state ── */}
      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-600">No items in this category yet.</div>
      )}
    </div>
  );
};

export default PortfolioGallery;
