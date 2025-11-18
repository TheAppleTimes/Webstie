import { useState, useMemo } from "react";
import { searchArticles } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { siteConfig } from "@/config";
import { AdSenseAd } from "@/components/AdSenseAd";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredArticles = useMemo(() => {
    return searchArticles(searchQuery);
  }, [searchQuery]);
  
  return (
    <div className="min-h-screen">
      <main>
      {/* Hero Section with Search */}
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <AdSenseAd slot="1234567890" format="horizontal" className="container" />
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {siteConfig.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="pt-4 flex justify-center">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search articles by title or description."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Articles Grid */}
      <section className="container py-12 md:py-16">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              {searchQuery
                ? `No articles found matching "${searchQuery}"`
                : "No articles found, is your internet working?"}
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold">
                {searchQuery ? `Search Results (${filteredArticles.length})` : "All Articles"}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </>
        )}
      </section>
      </main>
      <Footer />
    </div>
  );
}
