
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface WebDesign {
  title: string;
  url: string;
  description: string;
  image: string;
}

interface WebDesignCardProps {
  webDesign: WebDesign;
  index: number;
}

const WebDesignCard = ({ webDesign, index }: WebDesignCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-card border border-border">
        <div className="relative overflow-hidden">
          <img 
            src={webDesign.image} 
            alt={webDesign.title}
            loading="lazy"
            decoding="async"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a
              href={webDesign.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              View Design <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-foreground">{webDesign.title}</h3>
          <p className="text-muted-foreground mb-4">{webDesign.description}</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <ExternalLink className="w-4 h-4 mr-2" />
            <span>Figma Design</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default WebDesignCard;
