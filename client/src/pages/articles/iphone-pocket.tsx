import type { ArticleMetadata } from "@/types/article";

export const metadata: ArticleMetadata = {
  id: "iPhone-Pocket",
  title: "Apple releases new 'iPhone Pocket',
  description: "Apple has partnered with 'ISSEY MIYAKE' to make a pocket for your iPhone.",
  date: "2025-11-11",
  author: "Justaperson",
  tags: ["product", "collaboration", "2025"],
  readTime: 4,
};

export default function ExampleArticle() {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {metadata.author && <span>By {metadata.author}</span>}
          {metadata.date && <span>{new Date(metadata.date).toLocaleDateString()}</span>}
          {metadata.readTime && <span>{metadata.readTime} min read</span>}
        </div>
        {metadata.tags && metadata.tags.length > 0 && (
          <div className="flex gap-2 mt-4">
            {metadata.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      
      <section className="space-y-6">
        <h2>What is this pocket?</h2>
        <p>
          The iPhone pocket is a set of 3D-Knitted straps with a clever cutout in the middle with a pocket to store your iPhone in.
        </p>
        
        <h2>What it looks like.</h2>
        
          <figure className="my-8">
            <img
              src="/images/pocket1.jpg"
              alt="The iPhone pocket by Apple and ISSEY MIYAKE shown with two models."
              className="w-full rounded-lg"
            />
          <figcaption className="text-center text-sm text-muted-foreground mt-2">
            The iPhone pocket by Apple and ISSEY MIYAKE shown with two models.
          </figcaption>
        </figure>
        
        <p>
          Now thet don't just come in those two colors, they actually come in a wide range of eight colors for you to choose from. These colors are Yellow, Orange, Purple, Pink, Light Blue, Dark Blue, Brown and Black.
        </p>
          
          <figure className="my-8">
            <img
              src="/images/pocket2.jpg"
              alt="All of the pockets in their colors."
              className="w-full rounded-lg"
            />
          <figcaption className="text-center text-sm text-muted-foreground mt-2">
            All of the pockets in their colors.
          </figcaption>
        </figure>
        
        <h2>Sound familiar?</h2>
        <p>
          If you have known Apple for a long time, you might have noticed that this product might remind you of the iPod Socks which were released around 21 years ago, in which they contained a very similar design to these new iPhone socks.
        </p>
        
          <figure className="my-8">
            <img
              src="/images/sock1.png"
              alt="The iPod Sock."
              className="w-full rounded-lg"
            />
          <figcaption className="text-center text-sm text-muted-foreground mt-2">
            The iPod Sock.
          </figcaption>
        </figure>
        
        <p>
          As you can see, they look pretty similar, with the exception that the iPhone one is a pocket and the iPod one is a.. sock
        </p>
        
        <h2>Pricing and release date.</h2>
        <p>
         The new iPhone Pocket is set to hit stores on Friday the 14th of november, for the low low price of only £139.95 for the short and £219.95 for the long... holy apple im no expert but i think that might be a bit much.. right?
        </p>
        
        
        <h2>Conclusion</h2>
        <p>
          Are these worth it? Eh... probably not, as of writing these are not even out yet and in my opinion, it looks strange to look at. And that price is just not pretty at all, but its not up to me.. Its up to you!
        </p>

      </section>
    </article>
  );
}
