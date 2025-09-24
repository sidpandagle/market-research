# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (port auto-assigned, typically 3004)
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run serve` - Preview production build
- `npx shadcn@latest add [component-name]` - Add new shadcn/ui components

## Library Documentation

For shadcn/ui components and other library-related changes, use Context7 MCP server:
- Use `mcp__context7__resolve-library-id` to find library documentation
- Use `mcp__context7__get-library-docs` to get up-to-date documentation
- Example: For shadcn/ui, React Router, or other framework questions

## Architecture Overview

This is a **React Router v7** application with **shadcn/ui** components and **Tailwind CSS** styling, designed as an SEO-optimized blog/content platform for market research and business insights.

### Core Technologies

- **React Router v7**: Framework mode with client-side routing
- **Vite**: Build tool and dev server (runs on port 3000)
- **TypeScript**: Strict mode enabled
- **shadcn/ui**: New York style, using Radix UI primitives
- **Tailwind CSS**: Utility-first styling with CSS variables
- **next-themes**: Dark/light mode with system preference detection

### Application Structure

The app uses a **nested routing pattern** with a root Layout component:

```
/ (Layout wrapper)
├── index (HomePage)
├── about (AboutPage)
├── reports (ReportsListPage) - Free market research reports
├── reports/:slug (ReportDetailPage) - Individual report pages
├── blog (BlogListPage) - Market insights and analysis
├── blog/:slug (BlogPostPage) - Individual blog posts
├── blog/category/:category (BlogCategoryPage) - Category-filtered posts
├── blog/tag/:tag (BlogTagPage) - Tag-filtered posts
├── privacy (PrivacyPage) - Privacy policy
├── terms (TermsPage) - Terms of service
└── * (NotFoundPage)
```

### Component Architecture

**Layout Components** (`src/components/layout/`):
- `Layout`: Root layout with Header/Footer wrapper using `<Outlet />`
- `Header`: Main navigation with theme toggle
- `Footer`: Site footer

**Theme System** (`src/components/`):
- `ThemeProvider`: Wraps entire app, uses next-themes
- `theme-toggle.tsx`: Dark/light mode switcher

**SEO Components** (`src/components/seo/`):
- `MetaTags`: Dynamic meta tag management for SEO optimization

**UI Components** (`src/components/ui/`):
- shadcn/ui components: Button, Card, Navigation Menu
- All components follow New York style variant

### Data Models

**Blog Content Types** (`src/lib/types/blog.ts`):
- `BlogPost`: Complete post structure with SEO metadata, author info, categories, tags
- `BlogCategory`: Category taxonomy with post counts
- `BlogTag`: Tag taxonomy with post counts

**Report Content Types** (`src/lib/types/reports.ts`):
- `MarketResearchReport`: Complete report structure with market data, analysis
- `ReportCategory`: Report categorization system
- `ReportFilters`: Filtering and search functionality

**Data Sources** (`src/data/`):
- `blog-posts.json`: 5 comprehensive blog articles with full content
- `sample-reports.json`: 6 detailed market research reports
- `categories.json`: Category definitions for both content types

### Configuration Files

- `components.json`: shadcn/ui configuration (New York style, neutral base color)
- `vite.config.ts`: Vite setup with @ alias and React Router source paths
- `tsconfig.json`: TypeScript config with strict mode and @ path mapping
- `tailwind.config.js`: Tailwind configuration with shadcn/ui integration

### Key Features

1. **Free Access Model**: All market research reports and content provided without charge
2. **SEO-First Design**: Built for content marketing with comprehensive meta tag support
3. **Theme System**: Automatic dark/light mode with system preference detection
4. **Responsive Layout**: Mobile-first Tailwind CSS approach
5. **Type Safety**: Full TypeScript coverage with strict mode
6. **Component System**: Extensible shadcn/ui component library
7. **Rich Content**: Full blog posts with markdown support and detailed market reports
8. **Advanced Navigation**: Multi-level navigation with visual icons and clear categorization

### Development Notes

- Uses TypeScript strict mode - all types must be properly defined
- Path aliases configured: `@/` maps to `src/`
- Development server auto-assigns ports (typically 3004)
- All routing components are fully implemented with real data
- Blog functionality connected to JSON data source with 5 detailed articles
- Market research reports integrated with 6 comprehensive reports
- SEO components implemented with dynamic meta tags
- All pricing restrictions removed - everything is free access
- react-markdown used for blog post content rendering

### Current Status

✅ **Completed Features:**
- Free access to all reports and content
- Functional blog with category/tag filtering
- Market research reports with detailed data
- SEO optimization throughout
- Responsive design with dark/light mode
- Advanced navigation with visual categorization
- Privacy policy and terms of service pages