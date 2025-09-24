import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MetaTags } from '@/components/seo/meta-tags'
import { ArrowRight, Calendar, Clock, User, ArrowLeft, Hash } from 'lucide-react'
import type { BlogPost, BlogTag } from '@/lib/types/blog'
import blogData from '@/data/blog-posts.json'

const posts = blogData.posts as BlogPost[]
const tags = blogData.tags as BlogTag[]

export function BlogTagPage() {
  const { tag } = useParams<{ tag: string }>()

  const tagData = tags.find(t => t.slug === tag)
  const tagPosts = posts.filter(p =>
    p.tags.some(postTag => postTag.toLowerCase().replace(/\s+/g, "-") === tag)
  )

  const tagName = tagData?.name || tag?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || ''

  if (!tagData && tagPosts.length === 0) {
    return (
      <div className="container py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Tag Not Found</h1>
          <p className="text-muted-foreground mt-2 mb-8">
            The tag you're looking for doesn't exist.
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
        title={`#${tagName} Articles | Market Research Blog`}
        description={`Read the latest articles tagged with ${tagName} from our market research experts.`}
        keywords={[tagName.toLowerCase(), "market research", "blog", "insights"]}
        ogTitle={`#${tagName} Articles | Market Research Blog`}
        ogDescription={`Latest articles tagged with ${tagName}`}
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
          <span className="text-foreground">#{tagName}</span>
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
            <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl flex items-center gap-3">
              <Hash className="h-8 w-8 text-primary" />
              {tagName}
            </h1>
            <p className="text-xl text-muted-foreground">
              Articles tagged with "{tagName}"
            </p>
            <p className="text-muted-foreground">
              {tagPosts.length} article{tagPosts.length !== 1 ? 's' : ''} with this tag
            </p>
          </div>
        </div>

        {/* Posts Grid */}
        {tagPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found with this tag.</p>
            <Button variant="outline" asChild className="mt-4">
              <Link to="/blog">Browse All Articles</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tagPosts.map((post) => (
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
                    {post.tags.map((postTag) => (
                      <Link
                        key={postTag}
                        to={`/blog/tag/${postTag.toLowerCase().replace(/\s+/g, "-")}`}
                        className={`rounded-md px-2 py-1 text-xs hover:bg-muted/80 ${
                          postTag.toLowerCase().replace(/\s+/g, "-") === tag
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        #{postTag}
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