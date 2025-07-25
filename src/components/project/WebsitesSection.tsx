
import { useState } from "react";
import WebsiteCard from "./WebsiteCard";
import SectionTitle from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <div className="space-y-12">
      <SectionTitle title="Websites" className="mt-20" />
      
      <Tabs defaultValue={categories[0]} className="w-full">
        {/* Custom Pills Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 p-6 bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30 rounded-2xl backdrop-blur-sm">
          {categories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="group relative px-6 py-4 rounded-full border-2 border-transparent bg-background/60 hover:bg-background transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary/20 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25 hover:scale-105 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{category}</span>
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 group-data-[state=active]:bg-primary-foreground/20 text-xs font-bold transition-colors">
                  {websitesByCategory[category].length}
                </div>
              </div>
              
              {/* Animated glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </TabsTrigger>
          ))}
        </div>

        {categories.map((category) => {
          const categoryWebsites = websitesByCategory[category];
          const visibleCount = visibleCounts[category];
          const hasMore = visibleCount < categoryWebsites.length;

          return (
            <TabsContent key={category} value={category} className="mt-0">
              {/* Category stats */}
              <div className="text-center mb-8 p-4 bg-muted/30 rounded-xl border border-primary/10">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {category} Portfolio
                </h3>
                <p className="text-sm text-muted-foreground">
                  Showcasing {categoryWebsites.length} professional {categoryWebsites.length === 1 ? 'website' : 'websites'}
                </p>
              </div>

              {/* Websites Grid with stagger animation */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryWebsites
                  .slice(0, visibleCount)
                  .map((website, index) => (
                    <div
                      key={`${category}-${index}`}
                      className="animate-fade-in hover-scale"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      <WebsiteCard 
                        website={website} 
                        index={index} 
                      />
                    </div>
                  ))}
              </div>

              {hasMore && (
                <div className="flex justify-center mt-12">
                  <Button 
                    onClick={() => showMoreForCategory(category)}
                    variant="outline"
                    size="lg"
                    className="group relative px-8 py-3 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/30 hover:border-primary hover:from-primary/10 hover:to-accent/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <span className="mr-3 font-medium">Load More {category}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-primary/15 px-3 py-1 rounded-full font-semibold">
                        +{categoryWebsites.length - visibleCount}
                      </span>
                    </div>
                    
                    {/* Animated arrow */}
                    <div className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </Button>
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default WebsitesSection;
