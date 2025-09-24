import { useState, useMemo, useEffect, useCallback } from "react"
import { Link, useSearchParams } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Filter,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react"
import type { MarketResearchReport, ReportFilters } from "@/lib/types/reports"
import { reportCategories } from "@/data/categories"
import reportsData from "@/data/sample-reports.json"

const reports = reportsData.reports as MarketResearchReport[]

const heroStats = [
  {
    label: "Markets monitored",
    value: "68",
    description: "AI, climate, mobility, fintech, and digital health.",
  },
  {
    label: "Analyst briefings / week",
    value: "24",
    description: "Tailored walkthroughs across growth and corporate teams.",
  },
  {
    label: "Update cadence",
    value: "Hourly",
    description: "Signal feeds and models refresh automatically.",
  },
]

export function ReportsListPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState<ReportFilters>({})
  const [sortBy, setSortBy] = useState("newest")
  const allCategories = reportCategories

  useEffect(() => {
    const initialFilters: ReportFilters = {}

    const category = searchParams.get("category")
    if (category) {
      initialFilters.category = category
    }

    const featured = searchParams.get("featured")
    if (featured === "true") {
      initialFilters.featured = true
    }

    const searchTerm = searchParams.get("search")
    if (searchTerm) {
      initialFilters.searchTerm = searchTerm
    }

    setFilters(initialFilters)
  }, [searchParams])

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase()
        if (
          !report.title.toLowerCase().includes(searchLower) &&
          !report.description.toLowerCase().includes(searchLower) &&
          !report.tags.some((tag) => tag.toLowerCase().includes(searchLower))
        ) {
          return false
        }
      }

      if (filters.category && report.category.id !== filters.category) {
        return false
      }

      if (filters.featured !== undefined && report.featured !== filters.featured) {
        return false
      }

      return true
    })
  }, [filters])

  const sortedReports = useMemo(() => {
    const reportsToSort = [...filteredReports]

    switch (sortBy) {
      case "newest":
        reportsToSort.sort(
          (a, b) =>
            new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        )
        break
      case "oldest":
        reportsToSort.sort(
          (a, b) =>
            new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
        )
        break
      case "title":
        reportsToSort.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "pages":
        reportsToSort.sort((a, b) => b.pages - a.pages)
        break
      case "relevance":
        reportsToSort.sort((a, b) => Number(b.featured) - Number(a.featured))
        break
    }

    return reportsToSort
  }, [filteredReports, sortBy])

  const featuredReports = reports.filter((report) => report.featured)

  const updateFilter = useCallback(
    (key: keyof ReportFilters, value: string | boolean | undefined) => {
      const nextFilters: ReportFilters = {
        ...filters,
        [key]: value,
      }

      if (value === undefined || value === "") {
        delete nextFilters[key]
      }

      const newSearchParams = new URLSearchParams()

      if (nextFilters.category) {
        newSearchParams.set("category", nextFilters.category)
      }
      if (nextFilters.featured) {
        newSearchParams.set("featured", "true")
      }
      if (nextFilters.searchTerm) {
        newSearchParams.set("search", nextFilters.searchTerm)
      }

      setFilters(nextFilters)
      setSearchParams(newSearchParams)
    },
    [filters, setSearchParams]
  )

  const clearFilters = () => {
    setFilters({})
    setSearchParams(new URLSearchParams())
  }

  const hasActiveFilters = Boolean(
    filters.searchTerm || filters.category || filters.featured !== undefined
  )

  return (
    <div className="container space-y-12 py-16">
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
        <div className="space-y-6">
          <Badge variant="secondary" className="border border-primary/20 bg-primary/10 text-primary">
            Market research library
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Analyst-grade reports for markets that can’t wait
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Explore demand forecasts, competitive breakdowns, and momentum analysis across
            the sectors reshaping the global economy. Every report is curated with live
            signal updates and ready-to-share visuals.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link to="/reports?featured=true">
                View featured dossiers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base"
              asChild
            >
              <Link to="/about">
                Request analyst briefing
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <Card className="rounded-3xl border border-border/60 bg-card/95 shadow-lg shadow-primary/10">
          <CardHeader className="space-y-3">
            <CardTitle className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Coverage snapshot
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Where StatStrive analysts are focused this week.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/60 bg-background/80 p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    {stat.label}
                  </p>
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <p className="mt-2 text-xl font-semibold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Card className="rounded-3xl border border-border/60 bg-card/95">
        <CardHeader className="gap-4">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm font-semibold text-muted-foreground">
              {sortedReports.length} reports match your filters out of {reports.length} in the library
            </p>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full rounded-full border-border/70 px-4 py-2 text-sm font-medium lg:w-[200px]">
                <SelectValue placeholder="Sort reports" />
              </SelectTrigger>
              <SelectContent className="w-[200px]">
                <SelectItem value="newest">Newest first</SelectItem>
                <SelectItem value="oldest">Oldest first</SelectItem>
                <SelectItem value="title">Title A–Z</SelectItem>
                <SelectItem value="relevance">Featured first</SelectItem>
                <SelectItem value="pages">Most pages</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative flex-1">
              <Input
                placeholder="Search reports, companies, or signals"
                value={filters.searchTerm ?? ""}
                onChange={(event) => updateFilter("searchTerm", event.target.value || undefined)}
                className="h-11 rounded-full border-border/70 bg-background/80 pl-4"
              />
            </div>
            <Select
              value={filters.category}
              onValueChange={(value) => updateFilter("category", value === "all" ? undefined : value)}
            >
              <SelectTrigger className="h-11 w-full rounded-full border-border/70 bg-background/80 px-4 text-sm font-medium lg:w-[220px]">
                <SelectValue placeholder="All categories" />
              </SelectTrigger>
              <SelectContent className="max-h-[320px]">
                <SelectItem value="all">All categories</SelectItem>
                {allCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant={filters.featured ? "default" : "outline"}
              className="h-11 rounded-full border-border/70 px-5 text-sm font-semibold"
              onClick={() => updateFilter("featured", filters.featured ? undefined : true)}
            >
              <Star className="mr-2 h-4 w-4" /> Featured only
            </Button>
            {hasActiveFilters && (
              <Button variant="ghost" className="h-11 px-4 text-sm" onClick={clearFilters}>
                Clear filters
              </Button>
            )}
          </div>
        </CardHeader>
      </Card>

      {featuredReports.length > 0 && !filters.searchTerm && !filters.category && !filters.featured && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">Featured research dossiers</h2>
            </div>
            <Button variant="ghost" className="text-sm font-semibold text-primary" asChild>
              <Link to="/reports?featured=true">
                View all featured
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredReports.slice(0, 3).map((report) => (
              <ReportCard key={report.id} report={report} highlight />
            ))}
          </div>
          <Separator className="pt-6" />
        </section>
      )}

      {sortedReports.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border/70 bg-muted/40 py-16 text-center">
          <Filter className="mb-4 h-8 w-8 text-muted-foreground" />
          <p className="text-lg font-semibold text-foreground">No reports found</p>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Try adjusting your filters or search criteria to discover more market intelligence.
          </p>
          <Button variant="outline" className="mt-6" onClick={clearFilters}>
            Reset filters
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {sortedReports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      )}
    </div>
  )
}

interface ReportCardProps {
  report: MarketResearchReport
  highlight?: boolean
}

function ReportCard({ report, highlight = false }: ReportCardProps) {
  return (
    <Card
      className={`flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-card/95 transition hover:-translate-y-1 hover:border-primary/40 ${
        highlight ? "shadow-xl shadow-primary/20" : "shadow-sm"
      }`}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="border border-primary/20 bg-primary/10 text-primary">
            {report.category.name}
          </Badge>
          {report.featured && (
            <Badge variant="outline" className="border-primary/40 text-primary">
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl font-semibold text-foreground">
          <Link to={`/reports/${report.slug}`} className="transition hover:text-primary">
            {report.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {report.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {report.marketSize && (
          <div className="grid gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 text-sm text-muted-foreground">
            <div className="flex items-center justify-between text-foreground">
              <span className="font-medium">Market size</span>
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Current</p>
                <p className="text-base font-semibold text-foreground">{report.marketSize.current}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Projected</p>
                <p className="text-base font-semibold text-foreground">{report.marketSize.projected}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">{report.marketSize.timeframe}</p>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
          <span className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            {new Date(report.publishDate).toLocaleDateString()}
          </span>
          <span>• {report.pages} pages</span>
          <span>• {report.format.join(", ")}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {report.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="outline" className="rounded-full border-border/70">
              {tag}
            </Badge>
          ))}
          {report.tags.length > 4 && (
            <Badge variant="outline" className="rounded-full border-border/70">
              +{report.tags.length - 4}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <Button variant="ghost" className="px-0 text-sm font-semibold text-primary" asChild>
            <Link to={`/reports/${report.slug}`}>
              View report
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Badge variant="secondary" className="border border-primary/10 bg-primary/10 text-primary">
            Free access
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}