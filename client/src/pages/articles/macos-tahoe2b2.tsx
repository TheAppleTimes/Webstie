import type { ArticleMetadata } from "@/types/article";

export const metadata: ArticleMetadata = {
  id: "macos-tahoe2b2",
  title: "macOS 26.2 Beta 2 Tahoe released with an intresting new feature",
  description: "The update contains many changes, but this is the most intresting.",
  date: "2025-11-13",
  author: "Justaperson",
  tags: ["macOS", "Tahoe", "26", "Update"],
  readTime: 3,
};

export default function GettingStarted() {
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
        <p>
          Today Apple have given the public beta users the new beta for Tahoe 26.2, This
          comes a day after Apple sent the same beta out to Developers.
        </p>
        
          <figure className="my-8">
            <img
              src="/images/macostahoe.jpg"
              className="w-full rounded-lg"
            />
        </figure>
          
        <h2>So, What's new?</h2>
        <p>
          This release of macOS comes with many changes to liquid glass, making the animations better
          and even making macOS itself run a bit more smoothly, but there is one new thing that was
          unexpected and ultimately intresting.
        </p>
          
          <figure className="my-8">
            <img
              src="/images/edgelight.jpg"
              className="w-full rounded-lg"
            />
        </figure>
          
        <p>
          This is the new Edge Light feature, it does exactly what it says, it creates a loop of light
          around your device to brighten you in low light enviroments.
          
          If you need to see the content behind it, all you do it hover your mouse over the bar and that area
          will dissapear to allow you to see your content.
          
          It has currently two options for customisation, those are how bright it is and the color temperature.
          You can make it cool or warm, depending on what matches your room.
          
          it ultilises the nural engine to detect where your looking and adjust the lighting to always fit.
          You can access it in any video conference application in the same place as seeing the studio light or portrait mode.
          
          Developers and public beta testers can try out this feature today, and Tahoe 26.2 is set to release to everyone in december.
        </p>
        
      </section>
    </article>
  );
}
