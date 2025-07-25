
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
        <div className="bg-card rounded-2xl overflow-hidden border-2 border-accent/30 transition-all hover:border-accent hover:shadow-glow hover:shadow-accent/25">
          <div className="aspect-video overflow-hidden relative">
            <img
              src={website.image}
              alt={website.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <div className="p-6 bg-gradient-accent">
            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{website.title}</h3>
            <p className="text-muted-foreground font-medium">{website.description}</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default WebsiteCard;
