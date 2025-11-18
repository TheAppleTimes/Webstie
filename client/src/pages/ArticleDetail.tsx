import { useRoute, Link } from "wouter";
import { getArticleById } from "@/lib/articles";
import { Button } from "@/components/ui/button";
import { AdSenseAd } from "@/components/AdSenseAd";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function ArticleDetail() {
  const [, params] = useRoute("/article/:id");
  const articleId = params?.id;
  
  if (!articleId) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <Link href="/">
          <a>
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </a>
        </Link>
      </div>
    );
  }
  
  const article = getArticleById(articleId);
  
  if (!article) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <p className="text-muted-foreground mb-8">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/">
          <a>
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </a>
        </Link>
      </div>
    );
  }
  
  const ArticleComponent = article.component;
  
  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="border-b bg-secondary/20">
        <div className="container py-4">
          <Link href="/">
            <a>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Button>
            </a>
          </Link>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <ArticleComponent />
          <AdSenseAd slot="0987654321" format="fluid" className="max-w-4xl mx-auto" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
