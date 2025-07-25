
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
    <div className="space-y-8">
      <SectionTitle title="Websites" className="mt-20" />
      
      <Tabs defaultValue={categories[0]} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto p-1 bg-muted/50">
          {categories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="px-4 py-3 text-sm font-medium rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
            >
              <div className="flex flex-col items-center gap-1">
                <span>{category}</span>
                <span className="text-xs text-muted-foreground">
                  {websitesByCategory[category].length}
                </span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => {
          const categoryWebsites = websitesByCategory[category];
          const visibleCount = visibleCounts[category];
          const hasMore = visibleCount < categoryWebsites.length;

          return (
            <TabsContent key={category} value={category} className="mt-8">
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
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default WebsitesSection;
