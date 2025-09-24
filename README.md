# Market Research - SEO-Optimized Blog Starter

A modern, SEO-optimized blog/news starter built with React Router v7, shadcn/ui, and Tailwind CSS. Perfect for market research, business insights, and content-driven websites.

## ✨ Features

- **React Router v7** - Latest framework mode with SSR support
- **shadcn/ui** - Beautiful, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Dark/Light Mode** - Theme switching with system preference detection
- **SEO-Optimized** - Meta tags, structured data, and semantic HTML
- **TypeScript** - Type-safe development
- **Responsive Design** - Mobile-first approach
- **Blog Structure** - Categories, tags, and content management ready

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd market-research
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Header, Footer, etc.)
│   ├── seo/             # SEO components (MetaTags, etc.)
│   ├── ui/              # shadcn/ui components
│   └── theme-provider.tsx
├── lib/
│   ├── types/           # TypeScript type definitions
│   └── utils.ts         # Utility functions
├── pages/
│   ├── blog/            # Blog-related pages
│   ├── home.tsx         # Homepage
│   └── about.tsx        # About page
└── App.tsx              # Main app component
```

## 🎨 Available Components

### UI Components
- Button
- Card
- Navigation Menu
- Theme Toggle

### Layout Components
- Header with navigation
- Footer
- Responsive layout wrapper

### SEO Components
- MetaTags component for dynamic meta tag management
- Structured data support
- Canonical URL management

## 📝 Content Management

The starter includes a flexible blog structure with:

- **Posts** - Individual blog articles with metadata
- **Categories** - Organized content groupings
- **Tags** - Flexible content labeling
- **Authors** - Author information and attribution
- **SEO** - Per-page SEO optimization

### Adding Content

1. Create new blog posts in `src/pages/blog/`
2. Update the blog data structure in `src/lib/types/blog.ts`
3. Implement data fetching for your content source

## 🎯 SEO Features

- Dynamic meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Structured data markup
- Semantic HTML structure
- Mobile-first responsive design

## 🔧 Development

### Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run serve       # Preview production build
```

### Adding Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

### Customizing Themes

Edit `src/index.css` to customize the color scheme and design tokens.

## 🚀 Deployment

The project is ready for deployment to:

- Vercel
- Netlify
- AWS Amplify
- Traditional hosting with Node.js

Build the project:

```bash
npm run build
```

## 📱 Progressive Web App

The starter is ready to be enhanced with PWA features:

- Service worker registration
- Offline functionality
- App manifest
- Push notifications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🛠️ Built With

- [React Router v7](https://reactrouter.com) - Routing and framework
- [shadcn/ui](https://ui.shadcn.com) - UI components
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Lucide React](https://lucide.dev) - Icons
- [TypeScript](https://typescriptlang.org) - Type safety
- [Vite](https://vitejs.dev) - Build tool

## 📞 Support

For support and questions, please open an issue in the GitHub repository.
