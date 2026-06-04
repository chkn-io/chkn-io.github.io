
import { motion } from "framer-motion";

interface Analytics {
  title: string;
  url: string;
  description: string;
  image: string;
}

interface AnalyticsCardProps {
  analytics: Analytics;
  index: number;
}

const AnalyticsCard = ({ analytics, index }: AnalyticsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <a
        href={analytics.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10 transition-all hover:border-primary/30">
          <div className="aspect-video overflow-hidden relative">
            <img
              src={analytics.image}
              alt={analytics.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-foreground">{analytics.title}</h3>
            <p className="text-gray-400">{analytics.description}</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default AnalyticsCard;
