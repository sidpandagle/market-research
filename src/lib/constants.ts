export const SITE_CONFIG = {
  name: "Market Research",
  description: "Data-driven insights for business growth",
  url: "https://your-domain.com",
  author: {
    name: "Market Research Team",
    email: "contact@your-domain.com",
  },
  social: {
    twitter: "@your-handle",
    linkedin: "your-company",
  },
}

export const SEO_DEFAULTS = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  keywords: [
    "market research",
    "business insights",
    "data analysis",
    "business intelligence",
    "market trends",
    "consumer behavior",
  ],
  ogType: "website" as const,
  twitterCard: "summary_large_image" as const,
}

export const NAVIGATION_ITEMS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "About",
    href: "/about",
  },
]

export const BLOG_CATEGORIES = [
  {
    name: "Technology",
    slug: "technology",
    description: "Latest tech trends and innovations",
  },
  {
    name: "Business",
    slug: "business",
    description: "Business insights and strategies",
  },
  {
    name: "Research",
    slug: "research",
    description: "Market research and analysis",
  },
]