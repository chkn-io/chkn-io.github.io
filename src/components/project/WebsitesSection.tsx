
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
        {/* Bright Pills Navigation */}
        <TabsList className="flex flex-wrap justify-center gap-4 mb-12 p-6 bg-gradient-secondary rounded-3xl shadow-glow backdrop-blur-sm h-auto border border-primary/20">
          {categories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="group relative px-8 py-5 rounded-full border-2 border-transparent bg-card hover:bg-card/80 transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary/30 data-[state=active]:shadow-bright hover:scale-105 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="font-semibold text-sm">{category}</span>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-accent/20 group-data-[state=active]:bg-primary-foreground/30 text-xs font-bold transition-colors animate-pulse-soft">
                  {websitesByCategory[category].length}
                </div>
              </div>
              
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-data-[state=active]:opacity-20 transition-opacity duration-300 -z-10 blur-xl"></div>
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => {
          const categoryWebsites = websitesByCategory[category];
          const visibleCount = visibleCounts[category];
          const hasMore = visibleCount < categoryWebsites.length;

          return (
            <TabsContent key={category} value={category} className="mt-0">
              {/* Bright category stats */}
              <div className="text-center mb-10 p-6 bg-gradient-primary rounded-2xl border-2 border-accent/30 shadow-glow">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  {category} Portfolio
                </h3>
                <p className="text-primary-foreground/90 font-medium">
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
                    className="group relative px-10 py-4 bg-gradient-secondary border-2 border-accent/40 hover:border-accent hover:bg-gradient-primary text-primary-foreground transition-all duration-300 hover:shadow-glow hover:scale-105 rounded-full"
                  >
                    <span className="mr-4 font-bold">Load More {category}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm bg-accent/30 px-4 py-2 rounded-full font-bold animate-bounce-gentle">
                        +{categoryWebsites.length - visibleCount}
                      </span>
                    </div>
                    
                    {/* Bright animated arrow */}
                    <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce-gentle">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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
