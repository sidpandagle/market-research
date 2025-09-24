import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MetaTags } from '@/components/seo/meta-tags'
import { ArrowRight, Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import type { BlogPost, BlogCategory } from '@/lib/types/blog'
import blogData from '@/data/blog-posts.json'

const posts = blogData.posts as BlogPost[]
const categories = blogData.categories as BlogCategory[]

export function BlogCategoryPage() {
  const { category } = useParams<{ category: string }>()

  const categoryData = categories.find(c => c.slug === category)
  const categoryPosts = posts.filter(p => p.category.toLowerCase() === categoryData?.name.toLowerCase())

  if (!categoryData) {
    return (
      <div className="container py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Category Not Found</h1>
          <p className="text-muted-foreground mt-2 mb-8">
            The category you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <MetaTags
        title={`${categoryData.name} Articles | Market Research Blog`}
        description={`Read the latest ${categoryData.name.toLowerCase()} articles and insights from our market research experts.`}
        keywords={[categoryData.name.toLowerCase(), "market research", "blog", "insights"]}
        ogTitle={`${categoryData.name} Articles | Market Research Blog`}
        ogDescription={`Latest ${categoryData.name.toLowerCase()} insights and analysis`}
        ogType="website"
        canonical={window.location.href}
      />

      <div className="container space-y-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-foreground">Blog</Link>
          <span>/</span>
          <span className="text-foreground">{categoryData.name}</span>
        </nav>

        {/* Back Button */}
        <Button variant="outline" size="sm" asChild>
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        {/* Header */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
              {categoryData.name} Articles
            </h1>
            <p className="text-xl text-muted-foreground">
              {categoryData.description}
            </p>
            <p className="text-muted-foreground">
              {categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''} in this category
            </p>
          </div>
        </div>

        {/* Posts Grid */}
        {categoryPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found in this category.</p>
            <Button variant="outline" asChild className="mt-4">
              <Link to="/blog">Browse All Articles</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryPosts.map((post) => (
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
        )}
      </div>
    </>
  )
}