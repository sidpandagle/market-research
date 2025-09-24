import { Link } from "react-router-dom"
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Globe2,
  LineChart,
  Quote,
  Sparkles,
  Users2,
  Zap,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { MetaTags } from "@/components/seo/meta-tags"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import reportsData from "@/data/sample-reports.json"
import type { MarketResearchReport } from "@/lib/types/reports"

const heroHighlights = [
  "Analyst-ready narratives in minutes",
  "Signals unified across internal & external data",
  "Leadership decks with live assumptions",
]

const signalStats = [
  {
    value: "12k+",
    label: "Signals aggregated daily",
    description: "Alternative, regulatory, and sentiment inputs refreshed hourly.",
  },
  {
    value: "68",
    label: "Markets in constant view",
    description: "Coverage spanning AI, climate, mobility, fintech, and digital health.",
  },
  {
    value: "15 min",
    label: "From scan to briefing",
    description: "Structured workflows get decisions into motion faster.",
  },
]

type Capability = {
  title: string
  description: string
  icon: LucideIcon
  bullets: string[]
}

const capabilities: Capability[] = [
  {
    title: "Model-ready research",
    description: "TAM, priority accounts, and geographic splits exported directly into your planning models.",
    icon: LineChart,
    bullets: [
      "Scenario builders with editable assumptions",
      "Export-ready tables for finance & product",
      "Always-on validation against live signals",
    ],
  },
  {
    title: "Competitive radar",
    description: "Track launches, hiring, and funding moves without drowning in noise.",
    icon: BarChart3,
    bullets: [
      "Noise-filtered signal feed",
      "Auto-built battlecards per competitor",
      "Executive snapshot updated daily",
    ],
  },
  {
    title: "Operating room for insights",
    description: "Align strategy, revenue, and product teams around the same view of the market.",
    icon: Users2,
    bullets: [
      "Shared workspaces with version history",
      "Commenting & approvals for leadership",
      "Integrations into decks, docs, and CRM",
    ],
  },
  {
    title: "Global coverage fabric",
    description: "Monitor players, policy, and demand patterns across established and emerging regions.",
    icon: Globe2,
    bullets: [
      "Region-specific momentum scoring",
      "Regulatory trackers by subsector",
      "Localized sources in 24 languages",
    ],
  },
]

const coverageVerticals = [
  {
    name: "Generative AI & automation",
    summary: "Infrastructure, model marketplaces, and adoption curves across enterprise functions.",
    stat: "$412B projected by 2030",
    to: "/reports?category=artificial-intelligence",
  },
  {
    name: "Digital health ecosystems",
    summary: "Virtual care, diagnostics, and payer innovation as regulation accelerates.",
    stat: "26.4% CAGR",
    to: "/reports?category=digital-health",
  },
  {
    name: "Climate & energy transition",
    summary: "Storage, grid intelligence, and mobility electrification in key regional clusters.",
    stat: "$1.2T investment runway",
    to: "/reports?category=renewable-energy",
  },
  {
    name: "Next-gen mobility",
    summary: "Connected fleets, autonomy platforms, and charging ecosystems entering scale.",
    stat: "48 markets monitored",
    to: "/reports?category=electric-vehicles",
  },
]

const momentumRhythm = [
  {
    title: "Sense",
    description: "Spot demand shifts and headlines synthesized by analyst-led AI.",
    metric: "200+ fresh signals each week",
    icon: Sparkles,
  },
  {
    title: "Shape",
    description: "Stress-test market size, timing, and prioritization inside guided models.",
    metric: "±3.1% forecast variance",
    icon: LineChart,
  },
  {
    title: "Share",
    description: "Deliver concise briefings and recommended plays straight into stakeholder rituals.",
    metric: "Teams aligned in <48 hours",
    icon: Users2,
  },
]

const testimonials = [
  {
    quote:
      "We moved from quarterly market reviews to weekly direction. The board now expects StatStrive in every discussion.",
    name: "Jordan Blake",
    role: "Head of Market Strategy",
    company: "Nimbus Mobility",
  },
  {
    quote:
      "Analyst hours dropped by half while launch velocity doubled. The workspace keeps focus on the next inflection point.",
    name: "Priya Nair",
    role: "Director of Insights",
    company: "Helio HealthTech",
  },
  {
    quote:
      "Corporate development runs entirely out of StatStrive now—our team reacts to emerging bidders before it hits the wire.",
    name: "Luis Alvarez",
    role: "VP Corporate Development",
    company: "VoltEdge Energy",
  },
]

export function HomePage() {
  const reportDataset = reportsData as { reports: MarketResearchReport[] }
  const featuredReports = reportDataset.reports
    .filter((report) => report.featured)
    .slice(0, 3)
  const canonicalUrl =
    typeof window !== "undefined" ? window.location.href : "https://statstrive.com"

  return (
    <>
      <MetaTags
        title="StatStrive — Market Research Cloud"
        description="Confident decisions start with connected market research. StatStrive brings models, signals, and analyst narratives into one modern workspace."
        keywords={["market research", "opportunity sizing", "competitive intelligence"]}
        ogTitle="StatStrive — Market Research Cloud"
        ogDescription="Confident decisions start with connected market research."
        ogType="website"
        canonical={canonicalUrl}
      />

      <section className="relative overflow-hidden py-24">
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
          <div className="space-y-10">
            <Badge
              variant="secondary"
              className="flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
            >
              <Zap className="h-4 w-4" />
              Market research cloud
            </Badge>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Research that moves as fast as your market
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
                StatStrive links continuous market sensing with model-ready forecasts so growth, product,
                and revenue teams make confident calls without waiting on the next PDF.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <Link to="/reports">
                  Explore the library
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
                  Meet the analyst desk
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {heroHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card/80 p-5 text-sm text-foreground/85"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="h-full rounded-3xl border border-border/60 bg-card/95 shadow-xl shadow-primary/10">
            <CardHeader>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                Confidence index
              </div>
              <CardTitle className="text-2xl font-semibold text-foreground">
                Week-in-review briefing
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Analysts synthesize category momentum, standout signals, and recommended moves for leadership.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {signalStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/60 bg-background/80 p-4"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-semibold text-foreground">{stat.value}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                      {stat.label}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-border/70 bg-muted/40">
        <div className="container flex flex-col gap-8 py-12">
          <div className="flex flex-col gap-2 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Trusted by strategy, product, and revenue leaders
            </p>
            <p className="text-sm text-muted-foreground">
              Fast-growth scaleups · Global innovators · Fortune 500 transformation teams
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="max-w-2xl space-y-4">
            <Badge variant="secondary" className="border border-primary/20 bg-primary/10 text-primary">
              Platform capabilities
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Built for market research in motion
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything required to size, prioritize, and communicate new market moves—grounded in live
              signal intelligence and analyst oversight.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {capabilities.map((capability) => (
              <Card key={capability.title} className="flex h-full flex-col rounded-3xl border border-border/60 bg-card/95">
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <capability.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {capability.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {capability.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {capability.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-muted/30">
        <div className="container py-24">
          <div className="flex flex-col gap-4 text-center">
            <Badge variant="secondary" className="mx-auto border border-primary/20 bg-primary/10 text-primary">
              Coverage map
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Deep dives where the market is accelerating
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Explore continuously updated research corridors across frontier technology and climate transformation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {coverageVerticals.map((vertical) => (
              <Card key={vertical.name} className="rounded-3xl border border-border/60 bg-card/95 transition hover:-translate-y-1">
                <CardHeader className="space-y-3">
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {vertical.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {vertical.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-primary">{vertical.stat}</p>
                  <Button variant="ghost" className="px-0 text-sm font-semibold text-primary" asChild>
                    <Link to={vertical.to}>
                      View insights
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,360px)_1fr]">
          <div className="space-y-4">
            <Badge variant="secondary" className="border border-primary/20 bg-primary/10 text-primary">
              Operating rhythm
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Confidence at every step of the signal journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Purpose-built workflows keep the organisation aligned—from sensing momentum to shaping the response and sharing outcomes.
            </p>
          </div>

          <div className="space-y-4">
            {momentumRhythm.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-card/90 p-6 lg:flex-row lg:items-center lg:justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      0{index + 1}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 px-4 py-3 text-sm font-medium text-primary">
                  {step.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-muted/30">
        <div className="container py-24">
          <div className="flex flex-col gap-4 text-center">
            <Badge variant="secondary" className="mx-auto border border-primary/20 bg-primary/10 text-primary">
              Customer stories
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Market-moving teams rely on StatStrive
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From expansion-stage disruptors to global incumbents, leaders pick StatStrive when they need to turn signal into movement.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-card/95">
                <CardHeader>
                  <Quote className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-base font-medium text-foreground/90">“{testimonial.quote}”</p>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p>
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="flex flex-col gap-4 text-center">
            <Badge variant="secondary" className="mx-auto border border-primary/20 bg-primary/10 text-primary">
              Latest research releases
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Featured market reports
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Analyst-led deep dives spanning frontier technologies, emerging mobility, and the climate transition.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredReports.map((report) => (
              <Card
                key={report.id}
                className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-card/95 transition hover:-translate-y-1"
              >
                <CardHeader className="space-y-4">
                  <Badge variant="secondary" className="w-fit border border-primary/20 bg-primary/10 text-primary">
                    {report.category.name}
                  </Badge>
                  <CardTitle className="text-left text-xl font-semibold text-foreground">
                    {report.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {report.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {report.keyFindings.slice(0, 2).map((finding) => (
                      <li key={finding} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="px-0 text-sm font-semibold text-primary" asChild>
                    <Link to={`/reports/${report.slug}`}>
                      View the report
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
              <Link to="/reports">
                Browse all market intelligence
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="rounded-3xl border border-border/70 bg-primary text-primary-foreground">
            <div className="grid gap-10 p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:p-16">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-foreground/80">
                  Ready when the market moves
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
                  Launch a workspace or invite the analyst desk to your next review
                </h2>
                <p className="max-w-xl text-lg text-primary-foreground/80">
                  Start with a curated library or request a tailored walkthrough focusing on the markets shaping your next big move.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="secondary" size="lg" className="h-12 px-8 text-base" asChild>
                  <Link to="/reports">Open the library</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="h-12 px-8 text-base text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link to="/about">
                    Book analyst briefing
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}