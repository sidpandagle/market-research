export interface MarketResearchReport {
  id: string
  title: string
  slug: string
  description: string
  category: ReportCategory
  subcategory?: string
  publishDate: string
  lastUpdated?: string
  author: {
    name: string
    title: string
    company?: string
  }
  executiveSummary: string
  keyFindings: string[]
  marketSize?: {
    current: string
    projected: string
    cagr: string
    timeframe: string
  }
  geography: string[]
  companies: string[]
  tags: string[]
  price?: {
    amount: number
    currency: string
    type: 'single' | 'subscription'
  }
  pages: number
  format: ('PDF' | 'Excel' | 'PowerPoint')[]
  samplePages?: string[]
  toc?: TableOfContentsItem[]
  methodology?: string
  dataScope?: {
    historicalData: string
    forecastPeriod: string
    geographicScope: string[]
    companies: number
    dataSources: string[]
  }
  relatedReports?: string[]
  featured: boolean
  downloadUrl?: string
  sampleUrl?: string
}

export interface TableOfContentsItem {
  title: string
  page?: number
  children?: TableOfContentsItem[]
}

export interface ReportCategory {
  id: string
  name: string
  description: string
  icon?: string
  color?: string
  parentId?: string
}

export interface ReportFilters {
  category?: string
  subcategory?: string
  geography?: string[]
  priceRange?: {
    min: number
    max: number
  }
  publishDateRange?: {
    start: string
    end: string
  }
  searchTerm?: string
  tags?: string[]
  companies?: string[]
  featured?: boolean
}

export interface ReportStats {
  totalReports: number
  categories: Array<{
    category: ReportCategory
    count: number
  }>
  geographies: Array<{
    name: string
    count: number
  }>
  companies: Array<{
    name: string
    count: number
  }>
  tags: Array<{
    name: string
    count: number
  }>
}