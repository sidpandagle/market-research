import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MetaTags } from "@/components/seo/meta-tags"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import type { BlogPost } from "@/lib/types/blog"
import blogData from "@/data/blog-posts.json"

const posts = blogData.posts as BlogPost[]

export function BlogListPage() {
  return (
    <>
      <MetaTags
        title="Blog - Market Research Insights & Analysis"
        description="Read the latest market research insights, business trends, and data-driven analysis from our expert team. Stay informed with actionable business intelligence."
        keywords={["market research blog", "business insights", "data analysis", "market trends", "business intelligence"]}
        ogTitle="Blog - Market Research Insights & Analysis"
        ogDescription="Read the latest market research insights, business trends, and data-driven analysis from our expert team."
        ogType="website"
        canonical={window.location.href}
      />

      <div className="container space-y-8 py-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
              Market Research Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Insights, analysis, and trends from the world of market research
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </span>
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-primary">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime} min read
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
                <div className="mt-4 flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground hover:bg-muted/80"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}