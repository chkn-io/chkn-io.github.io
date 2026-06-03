
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
        {/* Category Pills */}
        <TabsList className="flex flex-wrap justify-center gap-2 mb-10 p-4 bg-gray-900/50 rounded-2xl border border-gray-700/30 h-auto backdrop-blur-sm">
          {categories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="px-5 py-2.5 rounded-xl border border-transparent bg-transparent text-gray-400 hover:text-white hover:bg-gray-800/60 transition-all duration-300 data-[state=active]:bg-emerald-500 data-[state=active]:text-white data-[state=active]:border-emerald-400/30 data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-500/30 font-semibold text-sm"
            >
              {category}
              <span className="ml-2 text-xs opacity-70 data-[state=active]:opacity-90 bg-white/10 rounded-full px-1.5 py-0.5">
                {websitesByCategory[category].length}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => {
          const categoryWebsites = websitesByCategory[category];
          const visibleCount = visibleCounts[category];
          const hasMore = visibleCount < categoryWebsites.length;

          return (
            <TabsContent key={category} value={category} className="mt-0">
              {/* Category stats */}
              <div className="text-center mb-10 py-4 px-6 rounded-2xl border border-emerald-500/10 bg-emerald-500/3">
                <h3 className="text-lg font-bold text-white mb-1">
                  {category} <span className="text-emerald-400">Portfolio</span>
                </h3>
                <p className="text-sm text-gray-500">
                  {categoryWebsites.length} professional {categoryWebsites.length === 1 ? 'website' : 'websites'}
                </p>
              </div>

              {/* Websites Grid */}
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
                <div className="flex justify-center mt-12">
                  <Button 
                    onClick={() => showMoreForCategory(category)}
                    variant="outline"
                    size="lg"
                    className="group px-8 py-3 bg-emerald-500/5 border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-500/10 text-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 rounded-xl font-semibold"
                  >
                    Load More
                    <span className="ml-2 text-xs bg-emerald-500/20 px-2.5 py-0.5 rounded-full">
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
