
import { motion } from "framer-motion";

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
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <a
        href={website.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="bg-secondary/50 rounded-xl overflow-hidden border border-primary/10 transition-all hover:border-primary/30">
          <div className="aspect-video overflow-hidden relative">
            <img
              src={website.image}
              alt={website.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-foreground">{website.title}</h3>
            <p className="text-gray-400">{website.description}</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default WebsiteCard;
