import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpRight, Linkedin, Mail, Twitter, Youtube } from "lucide-react"

const linkColumns = [
  {
    title: "Platform",
    links: [
      { label: "Signals workspace", to: "/reports" },
      { label: "Featured research", to: "/reports?featured=true" },
      { label: "Market coverage", to: "/reports?category=renewable-energy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insight briefings", to: "/blog" },
      { label: "Technology lens", to: "/blog/category/technology" },
      { label: "Energy transitions", to: "/blog/category/energy" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
]

const socialLinks = [
  { icon: Linkedin, to: "https://linkedin.com" },
  { icon: Twitter, to: "https://twitter.com" },
  { icon: Youtube, to: "https://youtube.com" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/70 bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-[-12rem] z-[-10] h-[28rem] bg-[radial-gradient(80%_80%_at_50%_0%,rgba(99,102,241,0.15),transparent)]" />
      <div className="container py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,420px)_1fr]">
          <div className="space-y-8">
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-2xl border border-border/70 bg-card/80 px-5 py-3 text-left transition hover:border-primary/50 hover:bg-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary/90 to-primary/60 text-primary-foreground shadow-lg shadow-primary/25">
                <span className="text-lg font-bold tracking-tight">SS</span>
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight text-foreground">StatStrive</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Market Research Cloud
                </p>
              </div>
            </Link>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              From category scans to transaction-grade forecasts, StatStrive unifies research,
              alternative data, and analyst commentary so growth teams can see the market with
              certainty.
            </p>

            <div className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-lg shadow-primary/10">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Mail className="h-4 w-4 text-primary" />
                Weekly signal summary
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Stay ahead with three stories, one signal deep dive, and upcoming industry moves.
              </p>
              <form className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Work email"
                  aria-label="Work email"
                  className="h-11 flex-1 rounded-full border-border/60 bg-background/80"
                />
                <Button className="h-11 rounded-full px-6 text-sm font-semibold">
                  Join the cadence
                </Button>
              </form>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              <div className="rounded-2xl border border-border/60 bg-card/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/70">
                  Coverage
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">68 markets</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/70">
                  Updates
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">Hourly refresh</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground/70">
                  Analysts
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">30+ specialists</p>
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {linkColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {column.title}
                </p>
                <div className="grid gap-2 text-sm text-muted-foreground">
                  {column.links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="group flex items-center justify-between rounded-xl border border-transparent px-3 py-2 transition hover:border-primary/20 hover:bg-primary/5 hover:text-foreground"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground/60 group-hover:text-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Connect
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition hover:border-primary/50 hover:text-primary"
                  >
                    <link.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
              <div className="rounded-2xl border border-dashed border-border/70 bg-muted/40 p-4 text-sm text-muted-foreground">
                Analysts on demand for leadership reviews, product sprints, and investor prep.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} StatStrive. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/privacy"
              className="hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="hover:text-primary"
            >
              Terms
            </Link>
            <Link
              to="/about"
              className="hover:text-primary"
            >
              Meet the analysts
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}