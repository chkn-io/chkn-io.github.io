
import { useState } from "react";
import WebsiteCard from "./WebsiteCard";
import SectionTitle from "./SectionTitle";
import { Button } from "@/components/ui/button";

interface Website {
  title: string;
  url: string;
  description: string;
  image: string;
  category: string;
}

interface WebsitesSectionProps {
  websites: Website[];
}

const WebsitesSection = ({ websites }: WebsitesSectionProps) => {
  const [visibleCount, setVisibleCount] = useState(6);
  
  // Group websites by category
  const websitesByCategory = websites.reduce((acc, website) => {
    if (!acc[website.category]) {
      acc[website.category] = [];
    }
    acc[website.category].push(website);
    return acc;
  }, {} as Record<string, Website[]>);

  const categories = Object.keys(websitesByCategory);
  
  const showMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 6, websites.length));
  };

  const visibleWebsites = websites.slice(0, visibleCount);
  const hasMore = visibleCount < websites.length;

  return (
    <>
      <SectionTitle title="Websites" className="mt-20" />
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6 border-b border-border pb-2">
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websitesByCategory[category]
              .filter((_, index) => websites.indexOf(websitesByCategory[category][index]) < visibleCount)
              .map((website) => {
                const originalIndex = websites.indexOf(website);
                return (
                  <WebsiteCard 
                    key={originalIndex} 
                    website={website} 
                    index={originalIndex} 
                  />
                );
              })}
          </div>
        </div>
      ))}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <Button 
            onClick={showMore}
            variant="outline"
            className="px-8 py-2"
          >
            Show More
          </Button>
        </div>
      )}
    </>
  );
};

export default WebsitesSection;
