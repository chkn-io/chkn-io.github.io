
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
    <div className="space-y-16">
      <SectionTitle title="Websites" className="mt-20" />
      
      <div className="grid gap-12">
        {categories.map((category, categoryIndex) => {
          const categoryWebsites = websitesByCategory[category];
          const visibleCount = visibleCounts[category];
          const hasMore = visibleCount < categoryWebsites.length;
          
          return (
            <div 
              key={category} 
              className="relative group"
            >
              {/* Category Header with enhanced styling */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {category}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {categoryWebsites.length} {categoryWebsites.length === 1 ? 'website' : 'websites'}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block h-px bg-gradient-to-r from-primary/20 to-transparent flex-1 ml-8"></div>
              </div>

              {/* Websites Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryWebsites
                  .slice(0, visibleCount)
                  .map((website, index) => (
                    <div
                      key={`${category}-${index}`}
                      className="transform transition-all duration-300 hover:scale-[1.02]"
                    >
                      <WebsiteCard 
                        website={website} 
                        index={index} 
                      />
                    </div>
                  ))}
              </div>

              {/* Show More Button */}
              {hasMore && (
                <div className="flex justify-center mt-10">
                  <Button 
                    onClick={() => showMoreForCategory(category)}
                    variant="outline"
                    size="lg"
                    className="group/btn border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <span className="mr-2">Show More {category}</span>
                    <span className="text-xs bg-primary/10 px-2 py-1 rounded-full">
                      +{categoryWebsites.length - visibleCount}
                    </span>
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WebsitesSection;
