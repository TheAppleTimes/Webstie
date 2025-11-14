/**
 * Site Configuration
 * 
 * Customize your blog by editing the values below.
 * After making changes, rebuild the site to see updates.
 */

export const siteConfig = {
  // Site Information
  title: "The Apple Times",
  description: "Stay in the loop with everything Apple.",
  logo: "/website/logo.svg", // Path to your logo in client/public/
  
  // Branding & Colors
  // These colors use CSS custom properties defined in index.css
  // You can customize the theme by editing the CSS variables
  colors: {
    primary: "hsl(222.2 47.4% 11.2%)", // Main brand color
    secondary: "hsl(210 40% 96.1%)", // Secondary accent
    accent: "hsl(210 40% 96.1%)", // Highlight color
  },
  
  // Typography
  fonts: {
    heading: "'Inter', sans-serif", // Font for headings
    body: "'Inter', sans-serif", // Font for body text
    mono: "'JetBrains Mono', monospace", // Font for code
  },
  
  // Layout
  layout: {
    maxWidth: "1200px", // Maximum content width
    articlesPerPage: 10, // Number of articles to show on homepage
  },
  
  // Features
  features: {
    search: true, // Enable/disable search functionality
    darkMode: true, // Enable/disable dark mode toggle
  },
  
  // Social Links (optional)
  social: {
    github: "",
    twitter: "",
    linkedin: "",
  },
};
