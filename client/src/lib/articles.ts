/**
 * Article Registry
 * 
 * This file automatically imports and registers all articles.
 * When you create a new article, import it here to make it available on the site.
 */

import type { Article, ArticleMetadata } from "@/types/article";

// Import example articles
import iPhonePocket, { metadata as iPhonePocketMetadata } from "@/pages/articles/iphone-pocket";
import macOS26B2, { metadata as macOS26B2Metadata } from "@/pages/articles/macos-tahoe2b2";

/**
 * Article Registry
 * 
 * Add your articles here in the format:
 * {
 *   metadata: yourArticleMetadata,
 *   component: YourArticleComponent,
 * }
 */
export const articles: Article[] = [
  {
    metadata: macOS26B2Metadata,
    component: macOS26B2,
  },
  {
      metadata: iPhonePocketMetadata,
      component: iPhonePocket,
  },
];

/**
 * Get all article metadata sorted by date (newest first)
 */
export function getAllArticles(): ArticleMetadata[] {
  return articles
    .map(article => article.metadata)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get article by ID
 */
export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.metadata.id === id);
}

/**
 * Search articles by query (searches title, description, tags, and author)
 */
export function searchArticles(query: string): ArticleMetadata[] {
  const lowerQuery = query.toLowerCase().trim();
  
  if (!lowerQuery) {
    return getAllArticles();
  }
  
  return articles
    .filter(article => {
      const { title, description, tags, author } = article.metadata;
      
      return (
        title.toLowerCase().includes(lowerQuery) ||
        description.toLowerCase().includes(lowerQuery) ||
        tags?.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
        author?.toLowerCase().includes(lowerQuery)
      );
    })
    .map(article => article.metadata)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get articles by tag
 */
export function getArticlesByTag(tag: string): ArticleMetadata[] {
  return articles
    .filter(article => article.metadata.tags?.includes(tag))
    .map(article => article.metadata)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get all unique tags from all articles
 */
export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  
  articles.forEach(article => {
    article.metadata.tags?.forEach(tag => tagSet.add(tag));
  });
  
  return Array.from(tagSet).sort();
}
