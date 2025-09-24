import { Routes, Route, Link } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import { Layout } from "@/components/layout/layout"
import { HomePage } from "@/pages/home"
import { AboutPage } from "@/pages/about"
import { BlogListPage } from "@/pages/blog/blog-list"
import { BlogPostPage } from "@/pages/blog/blog-post"
import { BlogCategoryPage } from "@/pages/blog/blog-category"
import { BlogTagPage } from "@/pages/blog/blog-tag"
import { ReportsListPage } from "@/pages/reports/reports-list"
import { ReportDetailPage } from "@/pages/reports/report-detail"
import { PrivacyPage } from "@/pages/privacy"
import { TermsPage } from "@/pages/terms"

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogListPage />} />

          {/* Reports routes */}
          <Route path="reports" element={<ReportsListPage />} />
          <Route path="reports/:slug" element={<ReportDetailPage />} />

          {/* Blog routes */}
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="blog/category/:category" element={<BlogCategoryPage />} />
          <Route path="blog/tag/:tag" element={<BlogTagPage />} />

          {/* Utility pages */}
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}


function NotFoundPage() {
  return (
    <div className="container flex flex-col items-center justify-center py-16 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-muted-foreground mt-2 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Go Home
      </Link>
    </div>
  )
}
