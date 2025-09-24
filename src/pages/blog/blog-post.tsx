import { useParams, Link, Navigate } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { MetaTags } from '@/components/seo/meta-tags'
import {
  CalendarDays,
  Clock,
  User,
  ArrowLeft,
  Share2,
  BookOpen,
  Tag
} from 'lucide-react'
import type { BlogPost } from '@/lib/types/blog'
import blogData from '@/data/blog-posts.json'
import ReactMarkdown from 'react-markdown'

const posts = blogData.posts as BlogPost[]

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()

  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return <Navigate to="/404" replace />
  }

  const relatedPosts = posts.filter(p =>
    p.id !== post.id &&
    (p.category === post.category || p.tags.some(tag => post.tags.includes(tag)))
  ).slice(0, 3)

  return (
    <>
      <MetaTags
        title={post.seo.metaTitle || `${post.title} | Market Research Blog`}
        description={post.seo.metaDescription || post.excerpt}
        keywords={post.seo.keywords || post.tags}
        ogTitle={post.seo.metaTitle || post.title}
        ogDescription={post.seo.metaDescription || post.excerpt}
        ogType="article"
        canonical={window.location.href}
      />

      <div className="container py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-foreground">Blog</Link>
          <span>/</span>
          <span className="text-foreground">{post.title}</span>
        </nav>

        {/* Back Button */}
        <Button variant="outline" size="sm" className="mb-6" asChild>
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Article Header */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">{post.category}</Badge>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime} min read
                  </span>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

              {/* Author Info */}
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">{post.author.name}</div>
                  {post.author.bio && (
                    <div className="text-sm text-muted-foreground">{post.author.bio}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Tag className="h-5 w-5" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Link
                    key={tag}
                    to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <Badge variant="secondary" className="hover:bg-secondary/80">
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>

            <Separator />

            {/* Share Section */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Share this article</h3>
                <p className="text-sm text-muted-foreground">Help others discover this content</p>
              </div>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Article Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Article Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Published:</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                {post.updatedAt && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Updated:</span>
                    <span>{new Date(post.updatedAt).toLocaleDateString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Read time:</span>
                  <span>{post.readTime} minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span>{post.category}</span>
                </div>
              </CardContent>
            </Card>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Related Articles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedPosts.map(relatedPost => (
                    <div key={relatedPost.id} className="border-b border-border last:border-0 pb-3 last:pb-0">
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="font-medium hover:text-primary transition-colors line-clamp-2 block mb-1"
                      >
                        {relatedPost.title}
                      </Link>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{new Date(relatedPost.publishedAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{relatedPost.readTime} min read</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
                <CardDescription>
                  Get the latest market research insights delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  Subscribe to Newsletter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}