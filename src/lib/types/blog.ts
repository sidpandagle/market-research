export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  publishedAt: string
  updatedAt?: string
  author: {
    name: string
    avatar?: string
    bio?: string
  }
  category: string
  tags: string[]
  featuredImage?: string
  readTime: number
  seo: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
    ogImage?: string
  }
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description?: string
  postCount: number
}

export interface BlogTag {
  id: string
  name: string
  slug: string
  postCount: number
}