
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
  const INITIAL_COUNT_PER_CATEGORY = 3;
  const LOAD_MORE_COUNT = 3;
  
  // Group websites by category
  const websitesByCategory = websites.reduce((acc, website) => {
    if (!acc[website.category]) {
      acc[website.category] = [];
    }
    acc[website.category].push(website);
    return acc;
  }, {} as Record<string, Website[]>);

  const categories = Object.keys(websitesByCategory);
  
  // State to track visible count for each category
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>(
    categories.reduce((acc, category) => {
      acc[category] = INITIAL_COUNT_PER_CATEGORY;
      return acc;
    }, {} as Record<string, number>)
  );
  
  const showMoreForCategory = (category: string) => {
    setVisibleCounts(prev => ({
      ...prev,
      [category]: Math.min(
        prev[category] + LOAD_MORE_COUNT, 
        websitesByCategory[category].length
      )
    }));
  };

  return (
    <>
      <SectionTitle title="Websites" className="mt-20" />
      {categories.map((category) => {
        const categoryWebsites = websitesByCategory[category];
        const visibleCount = visibleCounts[category];
        const hasMore = visibleCount < categoryWebsites.length;
        
        return (
          <div key={category} className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 border-b border-border pb-2">
              {category}
              <span className="text-sm text-muted-foreground ml-2">
                ({categoryWebsites.length} {categoryWebsites.length === 1 ? 'website' : 'websites'})
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryWebsites
                .slice(0, visibleCount)
                .map((website, index) => (
                  <WebsiteCard 
                    key={`${category}-${index}`} 
                    website={website} 
                    index={index} 
                  />
                ))}
            </div>
            {hasMore && (
              <div className="flex justify-center mt-6">
                <Button 
                  onClick={() => showMoreForCategory(category)}
                  variant="outline"
                  size="sm"
                  className="px-6 py-2"
                >
                  Show More {category} ({categoryWebsites.length - visibleCount} remaining)
                </Button>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default WebsitesSection;
