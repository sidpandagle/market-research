import { useParams, Link, Navigate } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle,
  FileText,
  Globe2,
  Share2,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react"
import type { MarketResearchReport } from "@/lib/types/reports"
import reportsData from "@/data/sample-reports.json"

const reports = reportsData.reports as MarketResearchReport[]

export function ReportDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  const report = reports.find((r) => r.slug === slug)

  if (!report) {
    return <Navigate to="/404" replace />
  }

  const relatedReports = reports
    .filter(
      (r) =>
        r.id !== report.id &&
        (r.category.id === report.category.id ||
          r.tags.some((tag) => report.tags.includes(tag)))
    )
    .slice(0, 3)

  return (
    <div className="container space-y-10 py-12">
      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
        <span>·</span>
        <Link to="/reports" className="hover:text-primary">
          Reports
        </Link>
        <span>·</span>
        <span className="text-foreground">{report.title}</span>
      </div>

      <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-8">
          <div className="space-y-6 rounded-3xl border border-border/60 bg-card/95 p-8 shadow-lg shadow-primary/10">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="border border-primary/20 bg-primary/10 text-primary">
                {report.category.name}
              </Badge>
              {report.subcategory && (
                <Badge variant="outline" className="border-border/70">
                  {report.subcategory}
                </Badge>
              )}
              {report.featured && (
                <Badge variant="outline" className="border-primary/60 bg-primary/10 text-primary">
                  <Star className="mr-1 h-3.5 w-3.5" /> Featured
                </Badge>
              )}
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {report.title}
              </h1>
              <p className="text-lg text-muted-foreground">{report.description}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  Published {new Date(report.publishDate).toLocaleDateString()}
                </span>
                {report.lastUpdated && (
                  <span className="flex items-center gap-1">
                    <Sparkles className="h-4 w-4" /> Updated {new Date(report.lastUpdated).toLocaleDateString()}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <FileText className="h-4 w-4" /> {report.pages} pages
                </span>
                <span className="flex items-center gap-1">
                  <Globe2 className="h-4 w-4" /> {report.geography.length} regions
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-11 rounded-full px-6 text-sm font-semibold">
                <Link to={"/reports"}>
                  Download executive summary
                  <ArrowLeft className="ml-2 hidden h-4 w-4 rotate-180 sm:block" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-11 rounded-full px-6 text-sm font-semibold"
                asChild
              >
                <Link to="/about">
                  Request analyst briefing
                  <Share2 className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <QuickStat label="Pages" value={report.pages} />
            <QuickStat
              label="Markets"
              value={`${report.geography.length}`}
              description="Regions assessed"
            />
            <QuickStat
              label="Companies"
              value={`${report.companies.length}`}
              description="Profiles included"
            />
            <QuickStat
              label="Formats"
              value={report.format.join(" · ")}
              description="Included assets"
            />
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 rounded-full bg-muted/60">
              <TabsTrigger value="overview" className="rounded-full">
                Overview
              </TabsTrigger>
              <TabsTrigger value="findings" className="rounded-full">
                Key findings
              </TabsTrigger>
              <TabsTrigger value="scope" className="rounded-full">
                Coverage
              </TabsTrigger>
              <TabsTrigger value="methodology" className="rounded-full">
                Methodology
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card className="rounded-3xl border border-border/60 bg-card/95">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Target className="h-5 w-5 text-primary" /> Executive summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {report.executiveSummary}
                  </p>
                </CardContent>
              </Card>

              {report.marketSize && (
                <Card className="rounded-3xl border border-border/60 bg-card/95">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <TrendingUp className="h-5 w-5 text-primary" /> Market size & momentum
                    </CardTitle>
                    <CardDescription>
                      Growth horizon based on StatStrive demand modelling and analyst review.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                          Current market size
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-foreground">
                          {report.marketSize.current}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Baseline {report.marketSize.timeframe.split("-")[0]}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                          Projected market size
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-foreground">
                          {report.marketSize.projected}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Outlook {report.marketSize.timeframe.split("-")[1]}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                        CAGR
                      </p>
                      <p className="mt-2 text-xl font-semibold text-primary">
                        {report.marketSize.cagr}
                      </p>
                      <p className="text-xs text-primary/70">{report.marketSize.timeframe}</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="rounded-3xl border border-border/60 bg-card/95">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-primary" /> Analyst team
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{report.author.name}</p>
                    <p className="text-sm text-muted-foreground">{report.author.title}</p>
                    {report.author.company && (
                      <p className="text-sm text-muted-foreground">{report.author.company}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="findings" className="space-y-6">
              <Card className="rounded-3xl border border-border/60 bg-card/95">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BarChart3 className="h-5 w-5 text-primary" /> Key findings
                  </CardTitle>
                  <CardDescription>
                    Signals and implications distilled by the analyst desk.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {report.keyFindings.map((finding, index) => (
                    <div key={index} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/70 p-4">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                      <p className="text-sm text-muted-foreground">{finding}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border/60 bg-card/95">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Building2 className="h-5 w-5 text-primary" /> Companies in focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {report.companies.map((company) => (
                    <Badge key={company} variant="outline" className="rounded-full border-border/70">
                      {company}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="scope" className="space-y-6">
              {report.dataScope && (
                <Card className="rounded-3xl border border-border/60 bg-card/95">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Globe2 className="h-5 w-5 text-primary" /> Coverage & data inputs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                          Geography
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {report.geography.map((geo) => (
                            <Badge key={geo} variant="secondary" className="rounded-full border-border/60">
                              {geo}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                          Timing
                        </p>
                        <div className="rounded-2xl border border-border/60 bg-background/80 p-4 text-sm text-muted-foreground">
                          <p>Historical: {report.dataScope.historicalData}</p>
                          <p>Forecast: {report.dataScope.forecastPeriod}</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                          Companies analysed
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-primary">
                          {report.dataScope.companies}+
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Blend of incumbents and challengers
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                          Data sources
                        </p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {report.dataScope.dataSources.map((source) => (
                            <li key={source}>• {source}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="rounded-3xl border border-border/60 bg-card/95">
                <CardHeader>
                  <CardTitle className="text-lg">Related topics</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {report.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-full border-border/70">
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="methodology">
              <Card className="rounded-3xl border border-border/60 bg-card/95">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-primary" /> Methodology notes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {report.methodology ||
                      "Detailed methodology information is provided within the downloadable report, including data collection and modelling assumptions."}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <aside className="space-y-6">
          <Card className="rounded-3xl border border-border/60 bg-card/95">
            <CardHeader>
              <CardTitle className="text-lg">Report overview</CardTitle>
              <CardDescription>
                Essential details to help you reference and share this research faster.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <DetailRow label="Published" value={new Date(report.publishDate).toLocaleDateString()} />
              {report.lastUpdated && (
                <DetailRow label="Last updated" value={new Date(report.lastUpdated).toLocaleDateString()} />
              )}
              <DetailRow label="Pages" value={`${report.pages}`} />
              <DetailRow label="Formats" value={report.format.join(", ")} />
              <DetailRow label="Category" value={report.category.name} />
            </CardContent>
          </Card>

          {relatedReports.length > 0 && (
            <Card className="rounded-3xl border border-border/60 bg-card/95">
              <CardHeader>
                <CardTitle className="text-lg">Related reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedReports.map((relatedReport) => (
                  <div key={relatedReport.id} className="space-y-1 rounded-2xl border border-border/60 bg-background/70 p-4">
                    <Link
                      to={`/reports/${relatedReport.slug}`}
                      className="font-medium text-foreground transition hover:text-primary"
                    >
                      {relatedReport.title}
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      {new Date(relatedReport.publishDate).toLocaleDateString()} · {relatedReport.pages} pages
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </aside>
      </section>
    </div>
  )
}

function QuickStat({
  label,
  value,
  description,
}: {
  label: string
  value: string | number
  description?: string
}) {
  return (
    <div className="rounded-3xl border border-border/60 bg-card/95 p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-xl font-semibold text-foreground">{value}</p>
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
    </div>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  )
}