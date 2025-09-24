import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MetaTags } from "@/components/seo/meta-tags"
import { BarChart3, Users, Target, Award } from "lucide-react"

export function AboutPage() {
  return (
    <>
      <MetaTags
        title="About Us - Market Research Experts"
        description="Learn about our market research expertise, our team of analysts, and our commitment to providing data-driven insights for business growth."
        keywords={["about market research", "research team", "business analysis", "market experts"]}
        ogTitle="About Us - Market Research Experts"
        ogDescription="Learn about our market research expertise and our commitment to providing data-driven insights for business growth."
        ogType="website"
        canonical={window.location.href}
      />

      <div className="container space-y-16 py-16">
        <section className="mx-auto max-w-[980px] text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            About Our Research
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We are a team of dedicated market research professionals committed to providing
            actionable insights that drive business growth and strategic decision-making.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="text-center">
              <BarChart3 className="mx-auto h-12 w-12 text-primary" />
              <CardTitle>Data-Driven</CardTitle>
              <CardDescription>
                Our analysis is backed by comprehensive data collection and rigorous methodology
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Users className="mx-auto h-12 w-12 text-primary" />
              <CardTitle>Expert Team</CardTitle>
              <CardDescription>
                Industry veterans with decades of combined experience in market research
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Target className="mx-auto h-12 w-12 text-primary" />
              <CardTitle>Strategic Focus</CardTitle>
              <CardDescription>
                We provide actionable insights that directly impact business strategy
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <Award className="mx-auto h-12 w-12 text-primary" />
              <CardTitle>Proven Results</CardTitle>
              <CardDescription>
                Track record of helping businesses make informed decisions and grow
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        <section className="mx-auto max-w-[800px] space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-center">Our Mission</h2>
          <div className="prose prose-gray dark:prose-invert">
            <p className="text-lg leading-7 text-muted-foreground">
              At Market Research, we believe that informed decisions lead to better outcomes.
              Our mission is to provide businesses with the insights they need to understand
              their markets, customers, and competitive landscape.
            </p>
            <p className="text-lg leading-7 text-muted-foreground">
              Through rigorous research methodologies, data analysis, and strategic thinking,
              we help organizations navigate complex market dynamics and identify new opportunities
              for growth and innovation.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[800px] space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-center">Our Approach</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center space-y-2">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold">Research</h3>
              <p className="text-muted-foreground">
                Comprehensive data collection using multiple research methodologies
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold">Analysis</h3>
              <p className="text-muted-foreground">
                Deep analysis using statistical methods and industry expertise
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold">Insights</h3>
              <p className="text-muted-foreground">
                Actionable recommendations that drive strategic decision-making
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}